import React from "react";

const Login= () => {
    return (
        <>
        <form>
            <input type="text" placeholder='enter username' ref={username}/>
            <br /><br />
            <input type="text" placeholder="enter userpassword" ref={userpassword}/>
            <br /><br />
            <input type="submit" value="Login" classname='btn btn-outline-primary' />
        </form>
        </>
    )
}