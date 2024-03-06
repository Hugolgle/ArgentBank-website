import './header.scss'
import { NavLink, Outlet } from 'react-router-dom'
import Nav from "../../components/Nav/nav"

export default function Header() {
    return <>
        <header>
            <NavLink to="/"><img src="src/assets/img/argentBankLogo.png" alt="logo" /></NavLink>
            <Nav />
        </header>
        <div className='container my-4'><Outlet /></div >
    </>
}