import React from 'react'
import ControlBudget from './ControlBudget'
import NewBudget from './NewBudget'

const Header = ({ 
                  expenses,
                  setExpenses,
                  header,  
                  budget, 
                  setBudget, 
                  isValidBudget, 
                  setIsValidBudget}) => {
  return (

    <header>
        <h1>Expense Planner</h1>

        {isValidBudget ? (
            
            <ControlBudget
                expenses={expenses}
                setExpenses={setExpenses}
                header={header}
                budget={budget}
                setBudget={setBudget}
                setIsValidBudget={setIsValidBudget}
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