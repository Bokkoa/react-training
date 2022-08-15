import { useState } from 'react';
import CloseBtn from '../img/close.svg'
import Message from './Message';


const Modal = ({ setModal, modalAnimate, setModalAnimate, saveNewExpsense}) => {

    const [ name, setName ] = useState('');
    const [ quantity, setQuantity ] = useState('');
    const [ category, setCategory ] = useState('');
    const [message, setMessage] = useState('');

 const closeModal = () => {
     setModalAnimate(false);

     setTimeout(() => {
         setModal(false);
     }, 500);
 }


 const handleSubmit = e => {
    e.preventDefault();

    if([name, quantity, category ].includes('')){
        console.log("Some fields are empty");
        setMessage('All fields are required');

        setTimeout(() => {
                setMessage('');
        }, 3000);
        return;
    }


    saveNewExpsense({name, quantity, category});
    closeModal();
 }

  return (
    <div className="modal">

        <div className="close-modal">
                <img
                    onClick={closeModal} 
                    src={CloseBtn} 
                    alt="close modal" />
        </div>


        <form 
            onSubmit={handleSubmit}
            className={`form ${modalAnimate ? 'animate' : 'close' }`}>
            <legend>New Expense</legend>

            { message && <Message type="error">{message}</Message>}


            <div className='field'>
                <label htmlFor="name">Expense Name</label>

                <input 
                    id="name"
                    type="text"
                    placeholder='Add the new expense'    
                    value={name}
                    onChange={ e => setName(e.target.value )}
                 />
            </div>


            <div className='field'>
                <label htmlFor="quantity">Quantity</label>

                <input 
                    id="quantity"
                    type="number"
                    placeholder='Add the new quantity: ex. 400'    
                    value={quantity}
                    onChange={ e => setQuantity( Number(e.target.value) )}
                 />
            </div>


            <div className='field'>
                <label htmlFor="categiry">Category</label>

                <select 
                    value={category}
                    onChange={ e => setCategory(e.target.value )} 
                    id="category">

                    <option value="">--Choose--</option>
                    <option value="saving">Saving</option>
                    <option value="food">Food</option>
                    <option value="house">House</option>
                    <option value="hobbie">Hobbie</option>
                    <option value="expenses">Other</option>
                    <option value="health">Health</option>
                    <option value="subscription">Subscriptions</option>
                </select>

            </div>



            <input 
                type="submit" 
                value="Add expense"
            />

        </form>

    </div>
  )
}

export default Modal