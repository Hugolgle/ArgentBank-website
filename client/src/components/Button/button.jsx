import './button.scss'

export default function Button(props) {
    return <>
        <button className="button" onClick={props.action}>{props.text}</button>
    </>
}