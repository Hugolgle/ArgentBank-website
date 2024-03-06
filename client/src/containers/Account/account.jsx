import './account.scss'
import Button from '../../components/Button/button.jsx'

export default function Account(props) {
    return <>
        <div className='account'>
            <div className="content-wrapper">
                <h3 className="title">{props.title}</h3>
                <p className="amount">{props.amount}</p>
                <p className="amount-description">{props.amountDescription}</p>
            </div>
            <div className="content-wrapper cta">
                <Button text="View transactions" />
            </div>
        </div>
    </>
}