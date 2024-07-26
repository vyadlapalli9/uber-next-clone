'use client'
import tw from "tailwind-styled-components"
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import {signInWithPopup, onAuthStateChanged} from 'firebase/auth'
import {auth,provider} from '../../firebase' 

const Login = () => {
    const router = useRouter()

    useEffect(()=>{
        onAuthStateChanged(auth, user =>{
            if (user) {
                router.push('/')
            }
        })
    })
  return (
    
    <Wrapper>
        <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />
        <HeadImage src="https://i.ibb.co/CsV9RYZ/login-image.png"/>
        <Title>Log in to access your account</Title>
        <SignInButton onClick={() => signInWithPopup(auth,provider)}>
            Sign in with Google
        </SignInButton>

    </Wrapper>
  )
}

export default Login

const Wrapper = tw.div`
flex flex-col h-screen w-screen bg-white p-4
`
const SignInButton = tw.button`
bg-black text-white text-center py-4 mt-8 self-center w-full
`

const UberLogo = tw.img`
h-20 w-auto object-contain self-start
`

const HeadImage = tw.img`
object-contain w-full h-64
`

const Title= tw.div`
text-5xl pt-4 text-gray-500
`