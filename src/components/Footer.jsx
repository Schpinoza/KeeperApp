import React from "react";

const Footer = ()=>{
    const corentYear = new Date().getFullYear()
    return (
    <footer>
        <p><span role="img" aria-label="emoji">©️</span>Copyright {corentYear}</p>
    </footer>    
    )
}


export default Footer