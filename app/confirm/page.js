'use client'

import { useEffect, useState } from "react"
import tw from "tailwind-styled-components"
import Map from '../components/Map'
import { useSearchParams } from "next/navigation"
import RideSelector from "../components/RideSelector"
import Link from "next/link"

const Confirm = () => {
  const searchParams = useSearchParams()
  const pickup = searchParams.get('pickup')
  const dropoff = searchParams.get('dropoff')

  console.log("Pickup",pickup);
  console.log("Dropoff",dropoff); 

  const [ pickupCoordinates, setPickupCoordinates ] = useState([0,0])
  const [ dropoffCoordinates, setDropoffCoordinates ] = useState([0,0])


  const getPickupCoordinates =(pickup)=> {
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` + 
        new URLSearchParams({
            access_token: "pk.eyJ1IjoieXZpdmVrMjU5IiwiYSI6ImNseXRhOHQxMzByNzMycnE0MWs5cWVnbmIifQ.oPjjjUlJiBlSxNgJ8Uri0Q",
            limit:1
        })    
    )
    .then(response => response.json())
    .then(data => {
        setPickupCoordinates(data.features[0].center);
    })
}

const getDropOffCoordinates =(dropoff)=> {
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` + 
        new URLSearchParams({
            access_token: "pk.eyJ1IjoieXZpdmVrMjU5IiwiYSI6ImNseXRhOHQxMzByNzMycnE0MWs5cWVnbmIifQ.oPjjjUlJiBlSxNgJ8Uri0Q",
            limit:1
        })    
    )
    .then(response => response.json())
    .then(data => {
        setDropoffCoordinates(data.features[0].center);
    })
}


useEffect(()=>{
    getPickupCoordinates(pickup);
    getDropOffCoordinates(dropoff);
},[pickup,dropoff])

  return (
    <Wrapper>
        <ButtonContainer>
            <Link href="/search">
                <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png"/>
            </Link>
        </ButtonContainer>
        <Map
            pickupCoordinates={pickupCoordinates}
            dropoffCoordinates={dropoffCoordinates}
        />
        <RideContainer>
            <RideSelector pickupCoordinates={pickupCoordinates}
            dropoffCoordinates={dropoffCoordinates}/> 
            <ConfirmButtonContainer>
                <ConfirmButton>
                    Confirm UberX
                </ConfirmButton>
            </ConfirmButtonContainer>
        </RideContainer>   
    </Wrapper>
  )
}

export default Confirm 

const ConfirmButton = tw.div`
bg-black text-white my-4 mx-4 py-4 text-center text-xl 
`

const ConfirmButtonContainer = tw.div`
border-t-2
`

const RideContainer = tw.div`
flex-1 flex flex-col h-1/2
`

const Wrapper= tw.div`
flex h-screen flex-col
`

const ButtonContainer = tw.div`
rounded-full absolute top-4 left-4 z-10 bg-white shadow-md cursor-pointer 
`

const BackButton = tw.img`
h-full object-contain
`