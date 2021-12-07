import {IoMdAddCircle} from "react-icons/all";

const OptionsAdd = ({onAdd}) => {

    return (
        <div className='ingredientsSetupColumn'>
            <div className='icon'>
                <IoMdAddCircle
                    size={25}
                    onClick={onAdd}
                />
            </div>
        </div>
    )
}

export default OptionsAdd