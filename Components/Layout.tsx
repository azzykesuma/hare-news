import React from "react"
import AppBar from "./Appbar"

const Layout = ({children} : any) => {

    return (
        <div>
            <AppBar />
            {children}
        </div>
    )
}

export default Layout