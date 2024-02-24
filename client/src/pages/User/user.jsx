import './user.scss'
import HeaderUser from '../../containers/Header-User/headerUser.jsx'
import Account from '../../containers/Account/account.jsx'
import Footer from '../../containers/Footer/footer.jsx'

export default function User() {
    return <>
        <section className="user">
            <HeaderUser />
            <Account title="Argent Bank Checking (x8349)" amount="$2,082.79" amountDescription="Available Balance" />
            <Account title="Argent Bank Checking (x8349)" amount="$2,082.79" amountDescription="Available Balance" />
            <Account title="Argent Bank Checking (x8349)" amount="$2,082.79" amountDescription="Available Balance" />
        </section>
        <Footer />
    </>
}