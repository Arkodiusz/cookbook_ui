import {MdCancel, MdCheckCircle} from "react-icons/all";

const OptionsEdit = ({onAccept, onCancel}) => {

    return (
        <div className='ingredientsSetupColumn'>
            <div className='icon'>
                <MdCheckCircle
                    size={25}
                    onClick={onAccept}
                />
            </div>
            <div className='icon'>
                <MdCancel
                    size={25}
                    onClick={onCancel}
                />
            </div>
        </div>
    )
}

export default OptionsEdit