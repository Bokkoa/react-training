import React from 'react'
import Expense from './Expense'

const ListExpenses = ({
    setExpenseEdit, 
    expenses, 
    deleteExpense,
    filter,
    filteredExpenses}) => {

  return (
    <div className='list-expenses container'>
        {
          filter ? (
            <>
             <h2>{filteredExpenses.length ? 'Expenses' : 'There\'s not expenses in this category yet.'}</h2>
              {filteredExpenses.map( expense => (
                <Expense 
                    key={expense.id}
                    expense={expense}
                    setExpenseEdit={setExpenseEdit}
                    deleteExpense={deleteExpense}
                />
              ))}
            </>

          ) : (
            <>
             { expenses.map( expense => (
                  <Expense 
                      key={expense.id}
                      expense={expense}
                      setExpenseEdit={setExpenseEdit}
                      deleteExpense={deleteExpense}
                      />
                ))}
             </>
          )
        }

    </div>
  )
}

export default ListExpenses