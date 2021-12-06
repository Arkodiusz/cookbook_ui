import {MdCancel, MdCheckCircle, MdEdit} from "react-icons/all";
import {useState} from "react";

const RecipeDescription = ({description, editMode, onEnableEditMode, onDisableEditMode, onUpdate}) => {

    const [newPreparation, setNewPreparation] = useState('')

    if(!editMode) {
        return (
        <div className='prepDescription'>
            <div id='prepDescriptionHeader'>
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

    const saveDescription = async () => {
        await onUpdate(newPreparation)
        setNewPreparation('')
    }

    return (
        <div className='prepDescriptionInput'>
            <div id='prepDescriptionHeader'>
                <div id='descOptions'>
                    <div className='icon'>
                        <MdCheckCircle
                            size={30}
                            onClick={() => saveDescription()}
                        />
                    </div>
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
                <h3>PREPARATION:</h3>
                <div style={{width: 80}}></div>

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