import {MdDeleteForever, MdEdit} from "react-icons/all";

const OptionsBasic = ({onEdit, onDelete}) => {

    console.log(onEdit)

    return (

        <div className='ingredientsSetupColumn'>
            {
                onEdit !== false ? (
                    <div className='icon'>
                        <MdEdit
                            size={25}
                            onClick={onEdit}
                        />
                    </div>
                ) : (
                    // <div style={{width: 25}}></div>
                    <></>
                )
            }
            <div className='icon'>
                <MdDeleteForever
                    size={25}
                    onClick={onDelete}
                />
            </div>
        </div>
    )
}

export default OptionsBasic