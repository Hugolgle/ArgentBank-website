import './account.scss'
import Button from '../../components/Button/button.jsx'

export default function Account(props) {
    return <>
        <div className='account'>
            <div class="content-wrapper">
                <h3 class="title">{props.title}</h3>
                <p class="amount">{props.amount}</p>
                <p class="amount-description">{props.amountDescription}</p>
            </div>
            <div class="content-wrapper cta">
                <Button text="View transactions" />
            </div>
        </div>
    </>
}