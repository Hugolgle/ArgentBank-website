import './items.scss'
import Item from '../../components/Item/item.jsx'

export default function Items() {
    return <>
        <section className='items'>
            <Item img="src/assets/img/icon-chat.png" title="You are our #1 priority" text="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes." />
            <Item img="src/assets/img/icon-money.png" title="More savings means higher rates" text="The more you save with us, the higher your interest rate will be!" />
            <Item img="src/assets/img/icon-security.png" title="Security you can trust" text="We use top of the line encryption to make sure your data and money is always safe." />
        </section>
    </>


}