
const InputQuantity = ({value, onChange}) => {

    function validateKey(e) {
        const restrictedKeys = ['e', '+', '-']
        if (restrictedKeys.includes(e.key)) {
            e.preventDefault()
        }
    }

    function changeQuantity(val) {
        let quantity = val.replace(',','.')
        if (parseFloat(quantity) < 0) {
            quantity = ''
        }
        onChange(quantity)
    }

    return (
        <input
            type='number'
            placeholder='quantity'
            value={value}
            onKeyDown={(e) => validateKey(e)}
            onChange={(e) => changeQuantity(e.target.value)}
        />
    )
}

export default InputQuantity