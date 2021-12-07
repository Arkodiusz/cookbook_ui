
const InputName = ({value, onChange}) => {
    return (
        <input
            maxLength='32'
            type='text'
            placeholder='name'
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    )
}

export default InputName