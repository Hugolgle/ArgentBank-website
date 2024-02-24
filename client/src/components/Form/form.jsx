import './form.scss'
import Button from '../../components/Button/button.jsx'

export default function Form() {
    return <>
        <div className="form">
            <i class="fa fa-user-circle"></i>
            <h1>Sign In</h1>
            <form>
                <div class="input-wrapper">
                    <label for="username">Username</label>
                    <input type="text" id="username" />
                </div>
                <div class="input-wrapper">
                    <label for="password">Password</label>
                    <input type="password" id="password" />
                </div>
                <div class="input-remember">
                    <input type="checkbox" id="remember-me" />
                    <label for="remember-me">Remember me</label>
                </div>
                <Button text="Sign In" />

            </form>
        </div>
    </>
}