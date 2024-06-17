import { NavLink } from "react-router-dom"
import "../styles/Header.css"

export default function Header(){

    return(
        <header>
            <div id="headerBranding">
                ColourAcademy
            </div>
            <nav id="headerNavBar">
                <NavLink to={"/"} >Home</NavLink>
                <NavLink to={"/generator"} >Generator</NavLink>
                <NavLink to={"/generator/saved"} >Saved Themes</NavLink>
            </nav>
        </header>
    )
}