import './header.scss'
import { NavLink, Outlet } from 'react-router-dom'

export default function Header() {
    return <>
        <header>
            <NavLink to="/"><img src="src/assets/img/argentBankLogo.png" alt="logo" /></NavLink>
            <nav>
                <NavLink to="/sign-in"><i class="fa fa-user-circle"></i>Sign-in</NavLink>
                {/* <NavLink to="/user">User</NavLink> */}
            </nav>
        </header>
        <div className='container my-4'><Outlet /></div >
    </>
}