import './button.scss'

export default function Button(props) {
    return <>
        <button class="button">{props.text}</button>
    </>
}