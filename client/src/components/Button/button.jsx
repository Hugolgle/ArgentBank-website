import './button.scss'

export default function Button(props) {
    return <>
        <button className="button">{props.text}</button>
    </>
}