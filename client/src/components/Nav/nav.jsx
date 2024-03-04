import './nav.scss'
import { NavLink, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { reset } from "../../redux/userSlice"

export default function Nav() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const token = useSelector((state) => state.user.token);
    const userName = useSelector((state) => state.user.userInfo.userName);

    const deconnexion = (e) => {
        e.preventDefault();
        localStorage.removeItem("token");
        dispatch(reset())
        navigate("/");
    }

    if (token) {
        return (
            <nav>
                <NavLink to="/user">User</NavLink>
                <NavLink to="/" onClick={deconnexion}>Sign off</NavLink>
            </nav>
        )

    } else {
        return (
            <nav>
                <NavLink to="/sign-in"><i class="fa fa-user-circle"></i>Sign-in</NavLink>
            </nav>
        )



    }

}

// }