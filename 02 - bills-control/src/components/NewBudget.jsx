import React from 'react'
import { useState } from 'react';
import Message from './Message';

const NewBudget = ({ budget, setBudget, setIsValidBudget}) => {

    const [message, setMessage] = useState('');


    const handleBudget = (e) =>{
        e.preventDefault();

        if(!budget || budget < 0){
            setMessage("Not a valid budget value");
            return
        }


        setMessage('');
        setIsValidBudget(true);



        

    }

  return (
    <div className='container-budget container shadow'>
        <form className='form' onSubmit={handleBudget}>
            <div className='field'>

                <label>Budget</label>

                <input type="number" 
                       className='new-budget'
                       placeholder='Add your budget'
                       value={budget}
                       onChange={ e => setBudget(Number(e.target.value)) }
                />

            </div>

            <input type="submit" value="Add" />



            {message && <Message type="error">{message}</Message>}

        </form>
    </div>
  )
}

export default NewBudget