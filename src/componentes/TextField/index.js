import './TextField.css'

const FieldText = (props) => {

    const whenTyped = (e) => {
        props.whenChanging(e.target.value);

    }

    return (
        <div className="field_text">
            <label>{props.label}
                <input 
                    value={props.value}
                    onChange={whenTyped}
                    placeholder={props.placeholder}
                    required={props.required}
                />
            </label>
        </div>
    )
}

export default FieldText;