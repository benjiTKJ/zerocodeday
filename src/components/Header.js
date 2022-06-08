import React, { useState }  from "react";
import { Link } from "react-router-dom";
import CloseMenuIcon from "../assets/x.svg";
import MenuIcon from "../assets/menu.svg";
import LogoIcon from "../assets/logo.svg";



const Header = ({ children }) => {
    
 
    

    const style = {
        display: 'flex',
        margin: 0,
        marginBottom: 0,
        justifyContent: 'right'
        
    }
    
    return (
        <div>
            <nav>
            <ul style={style}>
                <li><Link to="/" style={style}>Infra</Link>
                <ul>
                    <li><Link to="/" >Terraform</Link></li>
                    <li><Link to="/" >AWS</Link></li>
                </ul>
                </li>
                <li><Link to="/" style={style}>Language</Link>
                <ul>
                    <li><Link to="/" >Java</Link></li>
                    <li><Link to="/" >Javascript</Link></li>
                    <li><Link to="/" >Shellscripting</Link></li>
                </ul>
                </li>
                <li><Link to="/" style={style}>Web 3</Link>
                <ul>
                    <li><Link to="/" >Solidity</Link></li>
                    <li><Link to="/" >Smart Contracts</Link></li>

                </ul>
                </li>
            </ul>
            </nav>
            {children}
        </div>
    )
}

export default Header;