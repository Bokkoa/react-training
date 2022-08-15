import React from 'react'
import Expense from './Expense'

const ListExpenses = ({expenses}) => {
  return (
    <div className='list-expenses container'>
        <h2>{expenses.length ? 'Expenses' : 'There\'s not expenses yet.'}</h2>


        {expenses.map( expense => (
            <Expense 
                key={expense.id}
                expense={expense}
            />
        ))}
    </div>
  )
}

export default ListExpenses