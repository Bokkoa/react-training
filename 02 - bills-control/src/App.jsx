import { useState, useEffect } from 'react'
import Filters from './components/Filters';
import Header from './components/Header'
import ListExpenses from './components/ListExpenses';
import Modal from './components/Modal';

import { generateId  } from './helpers';
import IconNewExpense from './img/new_expense.svg'

function App() {

  const [ expenses, setExpenses ] = useState(
    localStorage.getItem('expenses') ? JSON.parse(localStorage.getItem('expenses')) : []
  );

  const [budget, setBudget] = useState( 
    Number(localStorage.getItem('budget')) ?? 0 
  );  // get from local or start at 0

  const [isValidBudget, setIsValidBudget ] = useState(false);

  const [ modal, setModal ] = useState(false);
  const [ modalAnimate, setModalAnimate ] = useState(false);

  const [ expenseEdit, setExpenseEdit ] = useState({});

  const [ filter, setFilter ] = useState('');
  const [ filteredExpenses, setFilteredExpenses ] = useState([]);


  useEffect( () => {
    console.log('Component ready')

    // check that expenseEdit is not empty
    if( Object.keys(expenseEdit).length > 0 ){
        setModal(true);

        setTimeout(() => {
                  setModalAnimate(true);
        }, 500);
    }

  }, [expenseEdit]);

  // save budget on ls
  useEffect( () => {

    localStorage.setItem('budget', budget ?? 0);

  }, [budget]);

  // save on ls expenses
  useEffect( () => {

    localStorage.setItem('expenses', JSON.stringify(expenses));

  }, [expenses]);

  // filtring
  useEffect(() => {
    
    if(filter){
        const filteredExpenses = expenses.filter( expense => expense.category === filter);
        setFilteredExpenses(filteredExpenses);
    }

  }, [filter])

  useEffect( () => {
    const budgetFromLS =Number( localStorage.getItem('budget'))  ?? 0;

    // a valid local storage budget
    if(budgetFromLS > 0 ){

      // avoid first view
      setIsValidBudget(true);
    }
  }, []);

  const handleNewExpense = () => {
    
    // reset expense for edit state
    setExpenseEdit({});
    setModal(true);

    setTimeout(() => {
              setModalAnimate(true);
    }, 500);

  }

  const saveNewExpsense = expense => {
    console.log(expense);

    // edition
    if( expense.id ){
      // updating in state
      const expensesUpdated = expenses.map( 
                                            expenseState => 
                                            expenseState.id === expense.id 
                                            ? expense : expenseState );

      setExpenses(expensesUpdated)
      setExpenseEdit({});  // clear expenseEdit state

    // new expense
    } else {

      expense.id = generateId();
      expense.date = Date.now();
  
      setExpenses([...expenses, expense]);

    }

    setModalAnimate(false);

    setTimeout(() => {
      setModal(false);
    }, 500)
   
  }

  const deleteExpense = (id) => {
    const expensesFiltered = expenses.filter( expense => expense.id !== id )

    setExpenses(expensesFiltered);
  }

  return (
    <div className={modal ? 'fixed' : ''}>
      <Header 
        expenses={expenses}
        setExpenses={setExpenses}
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />

      {isValidBudget && (

        <>
            <main>

              <Filters 
                filter={filter}
                setFilter={setFilter}
              />

              <ListExpenses 
                expenses={expenses}
                setExpenseEdit={setExpenseEdit}
                deleteExpense={deleteExpense}
                filter={filter}
                filteredExpenses={filteredExpenses}
              />
            </main>
            <div className='new-expense'>
              <img src={IconNewExpense} 
                alt="New expense"
                onClick={handleNewExpense} />
            </div>
        </>
      )}



      {modal && <Modal 
                  setModal={setModal}
                  modalAnimate={modalAnimate}
                  setModalAnimate={setModalAnimate}
                  saveNewExpsense={saveNewExpsense}
                  expenseEdit={expenseEdit}
                  setExpenseEdit={setExpenseEdit}
                />}

    </div>
  )
}

export default App
