import React, { useState, useEffect } from 'react'
import logo from "./logo.ico"
import "./Navbar.css"
import { useDispatch, useSelector } from 'react-redux'
import { Link, generatePath } from "react-router-dom"
import { RiVideoAddLine } from "react-icons/ri"
import { IoMdNotificationsOutline } from "react-icons/io"
import { BiUserCircle } from "react-icons/bi"
import Searchbar from './Searchbar/Searchbar'
import Auth from '../../Pages/Auth/Auth'
import axios from "axios"
import { login } from "../../action/auth"
import { useGoogleLogin,googleLogout } from '@react-oauth/google';
import { setcurrentuser } from '../../action/currentuser';

import {jwtDecode} from "jwt-decode"
const Navbar = ({ toggledrawer, seteditcreatechanelbtn }) => {
    const [authbtn, setauthbtn] = useState(false)
    const [user, setuser] = useState(null)
    const [profile, setprofile] = useState([])
    const dispatch = useDispatch()
   

    const currentuser = useSelector(state => state.currentuserreducer);
    // console.log(currentuser)
    const successlogin = () => {
        if (profile.email) {
            dispatch(login({ email: profile.email }))
            console.log(profile.email)
        }
    }
    // console.log(currentuser)
    // const currentuser={
    //     result:{
    //         _id:1,
    //         name:"abcjabsc",
    //         email:"abcd@gmail.com",
    //         joinedon:"222-07-134"
    //     }
    // }

    const google_login = useGoogleLogin({
        onSuccess: tokenResponse => setuser(tokenResponse),
        
        onError: (error) => console.log("Login Failed", error)
    });

    useEffect(
        () => {
            if (user) {
                axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                    headers: {
                        Authorization: `Bearer ${user.access_token}`,
                        Accept: 'application/json'
                    }
                })
                    .then((res) => {
                        setprofile(res.data)
                        successlogin()
                        // console.log(res.data)
                    })

            }
        },
        [user]
    );
    const logout=()=>{
        dispatch(setcurrentuser(null))
        googleLogout()
        localStorage.clear()
    }
    useEffect(()=>{
        const token=currentuser?.token;
        if(token){
            const decodetoken=jwtDecode(token)
            if(decodetoken.exp *1000 <new Date().getTime()){
                logout()
            }
        }
        dispatch(setcurrentuser(JSON.parse(localStorage.getItem("Profile"))))
  },[currentuser?.token,dispatch]
)
    return (
        <>
            <div className="Container_Navbar">
                <div className="Burger_Logo_Navbar">
                    <div className="burger" onClick={() => toggledrawer()}>
                        <p></p>
                        <p></p>
                        <p></p>
                    </div>
                    <Link to={"/"} className='logo_div_Navbar'>
                        <img src={logo} alt="" />
                        <p className="logo_title_navbar">Your-Tube</p>
                    </Link>
                </div>
                <Searchbar />
                <RiVideoAddLine size={22} className={"vid_bell_Navbar"} />
                <div className="apps_Box">
                    <p className="appBox"></p>
                    <p className="appBox"></p>
                    <p className="appBox"></p>
                    <p className="appBox"></p>
                    <p className="appBox"></p>
                    <p className="appBox"></p>
                    <p className="appBox"></p>
                    <p className="appBox"></p>
                    <p className="appBox"></p>
                </div>

                <IoMdNotificationsOutline size={22} className={"vid_bell_Navbar"} />
                <div className="Auth_cont_Navbar">
                    {currentuser ? (
                        <>
                            <div className="Chanel_logo_App" onClick={() => setauthbtn(true)}>
                                <p className="fstChar_logo_App">
                                    {currentuser?.result.name ? (
                                        <>{currentuser?.result.name.charAt(0).toUpperCase()}</>

                                    ) : (
                                        <>{currentuser?.result.email.charAt(0).toUpperCase()}</>
                                    )}
                                </p>
                            </div>
                        </>
                    ) : (
                        <>
                            <p className='Auth_Btn' onClick={() => google_login()}>
                                <BiUserCircle size={22} />
                                <b>Sign in</b>
                            </p>
                        </>
                    )}
                </div>
            </div>
            {
                authbtn &&
                <Auth seteditcreatechanelbtn={seteditcreatechanelbtn} setauthbtn={setauthbtn} user={currentuser} />
            }
        </>
    )
}

export default Navbar


