import React from 'react';

const Navigation = ({onRouteChange, isSignedIn}) =>{
    if(isSignedIn){
        return(
            <nav style={{display:'flex', justifyContent: 'flex-end'}}>
                <p onClick = {() => onRouteChange('signout')} className="f3 link dim black underline pa3 pointer code ba br-pill">Sign Out</p>
            </nav>
        );
    } else {
        return (
            <nav className="" style={{display:'flex', justifyContent: 'flex-end'}}>
                <p onClick = {() => onRouteChange('SignIn')} className="f3 link dim black underline pa3 pointer code br2">Sign In</p>
                <p onClick = {() => onRouteChange('register')} className="f3 link dim black underline pa3 pointer code br2">Register</p>
            </nav>
        );
    }
}

export default Navigation;