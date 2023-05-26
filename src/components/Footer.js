import React from "react";

const year = new Date()
const currentYear = year.getFullYear()

function Footer(){
    return (<footer>
        <p>copyright© by: Aryan Gupta-{currentYear}</p>
    </footer> );
}

export default Footer;

