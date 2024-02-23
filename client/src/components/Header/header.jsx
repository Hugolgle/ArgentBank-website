import './header.scss'
import { NavLink, Outlet } from 'react-router-dom'

export default function Header() {
    return <>
        <header>
            <img src="src/assets/img/argentBankLogo.png" alt="logo" />
            <nav>
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/sign-in">Sign-in</NavLink>
                <NavLink to="/user">User</NavLink>
            </nav>
        </header>
    </>
}