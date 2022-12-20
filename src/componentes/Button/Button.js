import './Button.css'

export const Button = (props) => {
    console.log('props', props);
    return (
        <button className="Button">
            {props.children}
        </button>
    )
}

