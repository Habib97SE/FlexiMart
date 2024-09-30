"use client";
import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { useUser } from "@/context/UserContext"

const LogoutPage = () => {
    const { userLoggedIn, logoutUser } = useUser()
    const router = useRouter()
    const [loggedOut, setLoggedOut] = useState(false)

    if (loggedOut) {
        router.push("/")
    }


    useEffect(() => {
        if (userLoggedIn) {
            logoutUser()
            setLoggedOut(true)
            router.push("/")
        }
    }, [userLoggedIn])

    return <div>Logging out...</div>

}

export default LogoutPage;