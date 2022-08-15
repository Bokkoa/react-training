import { useState } from 'react'
import Header from './components/Header'
import ListExpenses from './components/ListExpenses';
import Modal from './components/Modal';

import { generateId  } from './helpers';
import IconNewExpense from './img/new_expense.svg'

function App() {

  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget ] = useState(false);

  const [ modal, setModal ] = useState(false);
  const [ modalAnimate, setModalAnimate ] = useState(false);


  const [ expenses, setExpenses ] = useState([]);

  const handleNewExpense = () => {
    
    
    setModal(true);

    setTimeout(() => {
              setModalAnimate(true);
    }, 500);

  }

  const saveNewExpsense = expense => {
    console.log(expense);
    expense.id = generateId();
    expense.date = Date.now();

    setExpenses([...expenses, expense]);
  }

  return (
    <div className={modal && 'fixed' }>
      <Header 
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />

      {isValidBudget && (

        <>
            <main>
              <ListExpenses 
                expenses={expenses}
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
                />}

    </div>
  )
}

export default App
