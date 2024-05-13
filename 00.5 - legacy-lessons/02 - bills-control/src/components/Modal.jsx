import { useState, useEffect } from 'react';
import CloseBtn from '../img/close.svg'
import Message from './Message';


const Modal = ({ setModal, 
                 modalAnimate, 
                 setModalAnimate, 
                 saveNewExpsense, 
                 expenseEdit,
                 setExpenseEdit }) => {

    const [ name, setName ] = useState('');
    const [ quantity, setQuantity ] = useState('');
    const [ category, setCategory ] = useState('');
    const [ date, setDate ] = useState('');
    const [ id, setId ] = useState('');
    const [message, setMessage] = useState('');

    useEffect( () => {
        
        // if editing...
        if(Object.keys(expenseEdit).length > 0){
            setName(expenseEdit.name);
            setQuantity(expenseEdit.quantity);
            setCategory(expenseEdit.category);
            setId(expenseEdit.id);
            setDate( expenseEdit.date );
        }

    }, [])

 const closeModal = () => {
     setModalAnimate(false);
     setExpenseEdit({});
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
        }, 500);
        return;
    }


    saveNewExpsense({name, quantity, category, id, date});
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
            <legend>{expenseEdit.name ? 'Edit expense' : 'New expense'}</legend>

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
                value={expenseEdit.name ? 'Edit expense' : 'Add expense'}
            />

        </form>

    </div>
  )
}

export default Modal