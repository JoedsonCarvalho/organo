import './TextField.css'

const FieldText = (props) => {
    console.log(props);

    const whenTyped = (e) => {
        // setValue(e.target.value);
        // console.log(value);
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