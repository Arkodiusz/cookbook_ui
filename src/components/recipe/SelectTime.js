
const SelectTime = ({value, onChange}) => {
    return (
        <select value={value} onChange={(e) => onChange(e.target.value)}>
            <option value="?">?</option>
            <option value="5 min">5 min</option>
            <option value="10 min">10 min</option>
            <option value="15 min">15 min</option>
            <option value="30 min">30 min</option>
            <option value="45 min">45 min</option>
            <option value="1 h">1 h</option>
            <option value="1,5 h">1,5 h</option>
            <option value="2 h">2 h</option>
            <option value="3 h">3 h</option>
            <option value="> 4 h">> 4 h</option>
        </select>
    )
}

export default SelectTime