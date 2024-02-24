import './headerUser.scss'
import Button from '../../components/Button/button.jsx'

export default function HeaderUser() {
    return <>
        <div className="header">
            <h1>Welcome back <br />Tony Jarvis</h1>
            <Button text="Edit" />
        </div>
    </>
}