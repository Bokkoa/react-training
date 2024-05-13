import React, { useEffect, useState } from 'react'

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css"

const ControlBudget = ({expenses,
                        setExpenses,
                        budget,
                        setBudget,
                        setIsValidBudget}) => {

    const [ percent, setPercent ] = useState(0);

    const [available, setAvailable] = useState(0);
    const [spent, setSpent] = useState(0);

    useEffect(() => {

        // reduce appends the array values in iteration
        const totalSpent = expenses.reduce( (total, expense) => expense.quantity + total, 0);

        const totalAvailable = budget - totalSpent;

        // calculate the percent
        const newPercent = (( (budget - totalAvailable ) / budget ) * 100).toFixed(2);


        setAvailable(totalAvailable);
        setSpent(totalSpent);

        setTimeout( () => {
            setPercent(newPercent);
        }, 1000)

    }, [expenses])
    
    const handleResetApp = () => {

        const result = confirm('Are you sure?');


        if( result ){
            setBudget(0);
            setExpenses([])
            setIsValidBudget(false);
        }
        
    }

    const formatQuantity = (quantity) => {
        return quantity.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        });
    }

  return (
    <div className='container-budget container shadow two-columns'>

        <div>
            <CircularProgressbar 
                styles={buildStyles({
                    pathColor: percent > 100 ? '#DC2626' : '#3b82f6',
                    trailColor: '#F5F5F5',
                    textColor: percent > 100 ? '#DC2626' : '#3b82f6',
                })}
                value={percent}
                text={`${percent} % Spent`}
            />
        </div>

        <div className='content-budget'>

            <button 
                className="reset-app" 
                onClick={handleResetApp}
                type="button">
                Reset app
            </button>

            <p>
                <span>Budget: </span>{formatQuantity(budget)}
            </p>

            <p className={`${available < 0 ? 'negative' : ''}`} >
                <span>Available: </span>{formatQuantity(available)}
            </p>

            <p>
                <span>Spent: </span>{formatQuantity(spent)}
            </p>
        </div>

    </div>
  )
}

export default ControlBudget