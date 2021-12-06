import {MdCancel, MdCheckCircle, MdEdit} from "react-icons/all";
import {useState} from "react";

const RecipeDescription = ({description, editMode, onEnableEditMode, onDisableEditMode, onUpdate}) => {

    const [newPreparation, setNewPreparation] = useState('')

    if(!editMode) {
        return (
        <div className='prepDescription'>
            <div>
                <div className='icon'>
                    <MdEdit
                        size={30}
                        onClick={() => {
                            onEnableEditMode()
                            setNewPreparation(description)
                        }}
                    />
                </div>
                <h3>PREPARATION:</h3>
                <div style={{width: 30}}></div>
            </div>
            &emsp;{description}
        </div>
        )
    }

    return (
        <div className='prepDescriptionInput'>
            <div>
                <div className='icon'>
                    <MdCheckCircle
                        size={30}
                        onClick={() => {
                            onUpdate(newPreparation)
                            setNewPreparation('')
                        }}
                    />
                </div>
                <h3>PREPARATION:</h3>
                <div className='icon'>
                    <MdCancel
                        size={30}
                        onClick={() => {
                            onDisableEditMode()
                            setNewPreparation('')
                        }}
                    />
                </div>
            </div>
            <textarea
                maxLength='4000'
                className='prepDescriptionTextarea'
                placeholder='preparation description'
                value={newPreparation}
                onChange={(e) => setNewPreparation(e.target.value)}
            />
        </div>
    )
}

export default RecipeDescription