import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {MdCheckCircle, MdCancel} from "react-icons/md";

const Form = ({onSubmit}) => {
    const [newName, setNewName] = useState('')
    const [newImageUrl, setNewImageUrl] = useState('')
    const [newPortions, setNewPortions] = useState('')
    const [newTime, setNewTime] = useState('')
    const [newPreparation, setNewPreparation] = useState('')
    const navigate = useNavigate();

    const submitForm = async () => {
        if (newName === '') {
            //TODO: replace alert with popup
            alert('Please fill at least name input')
            return
        }
        const newRecipe = {
            name: newName,
            imageUrl: newImageUrl,
            portions: newPortions,
            time: newTime,
            preparation: newPreparation
        }
        await onSubmit(newRecipe)
        navigate('/', {replace: true});
    }

    return (
       // TODO: make sensible layout
       <div className='addForm'>
           <input
               type='text'
               placeholder='name'
               value={newName}
               onChange={(e) => setNewName(e.target.value)}
           />
           <input
               type='text'
               placeholder='imageUrl'
               value={newImageUrl}
               onChange={(e) => setNewImageUrl(e.target.value)}
           />
           <input
               type='number'
               placeholder='portions'
               value={newPortions}
               onChange={(e) => setNewPortions(e.target.value)}
           />
           <input
               type='text'
               placeholder='preparation time'
               value={newTime}
               onChange={(e) => setNewTime(e.target.value)}
           />
           <input
               type='text'
               placeholder='preparation description'
               value={newPreparation}
               onChange={(e) => setNewPreparation(e.target.value)}
           />


           <div className='icon'>
               <MdCheckCircle
                   size={35}
                   onClick={() => submitForm()}
               />
           </div>

           <Link to='/'>
               <div className='icon'>
                   <MdCancel
                       size={35}
                   />
               </div>
           </Link>

       </div>
    )
}

export default Form
