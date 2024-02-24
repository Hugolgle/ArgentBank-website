import './item.scss'

export default function Item(props) {
    return <>
        <div className='item'>
            <img src={props.img} alt={props.img} />
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>
    </>


}