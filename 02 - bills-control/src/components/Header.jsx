import React from 'react'
import ControlBudget from './ControlBudget'
import NewBudget from './NewBudget'

const Header = ({ budget, 
                  setBudget, 
                  isValidBudget, 
                  setIsValidBudget}) => {
  return (

    <header>
        <h1>Expense Planner</h1>

        {isValidBudget ? (
            
            <ControlBudget
                budget={budget}
             />

        ) : (

            <NewBudget 
                budget={budget}
                setBudget={setBudget}
                setIsValidBudget={setIsValidBudget}
            />
        )}

       
    </header>
  )
}

export default Header