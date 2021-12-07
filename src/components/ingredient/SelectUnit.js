
const SelectUnit = ({value, onChange}) => {

    return (
        <select
            required
            value={value}
            onChange={(e) => onChange(e.target.value)}>
            <option value="" hidden>unit</option>
            <option value="G">g</option>
            <option value="DAG">dag</option>
            <option value="KG">kg</option>
            <option value="ML">ml</option>
            <option value="L">l</option>
            <option value="TEASPOON">teaspoon</option>
            <option value="TABLESPOON">tablespoon</option>
            <option value="PINCH">pinch</option>
            <option value="HANDFUL">handful</option>
            <option value="PIECE">piece</option>
            <option value="CUP">cup</option>
        </select>
    )


}

export default SelectUnit