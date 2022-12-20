import './DropdownList.css'

const DropdownList = (props) => {

    return (
        <div className="DropdownList">
            <label>{props.label}
                <select onChange={event => props.whenChanging(event.target.value)} required={props.required} value={props.value}>
                    <option value=''></option>
                    {props.itens.map(item => <option key={item}>{item}</option>)}
                </select>
            </label>
        </div>
    )
}

export default DropdownList;