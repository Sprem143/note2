import React from "react";
import { Navigate,Outlet } from "react-router-dom";

export default function PrivateComponent(){
    return <Outlet/>
}