import {NavLink, Outlet } from "react-router-dom"

const navLinks = ['Home', 'Popular', 'Battle']

const Nav = () => {
   
    return(
        <div>
            <ul className="nav">
                {navLinks.map((link, i) => 
                <li key={i}> 
                    <NavLink to={link === 'Home' ? '/' : link.toLocaleLowerCase()}>
                        {link}
                    </NavLink>
                </li>)}
            </ul>
            <Outlet/>
        </div>
       
    )
}

export default Nav;