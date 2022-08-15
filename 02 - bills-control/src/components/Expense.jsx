import { dateFormat } from "../helpers";

import IconSave from '../img/saving_icon.svg'
import IconHouse from '../img/house_icon.svg'
import IconFood from '../img/food_icon.svg'
import IconExpenses from '../img/expenses_icon.svg'
import IconHobbie from '../img/hobbie_icon.svg'
import IconHealth from '../img/health_icon.svg'
import IconSubscriptions from '../img/subscriptions_icon.svg'

const dictionaryIcons = {
    saving: IconSave,
    food: IconFood,
    house: IconHouse,
    hobbie: IconHobbie,
    expenses: IconExpenses,
    health: IconHealth,
    subscription: IconSubscriptions
}


const Expense = ({ expense }) => {

    const { category, name, quantity, id, date } = expense;

  return (
    <div className="expense shadow">
        <div className="content-expense">

            {/* IMAGE */}

            <img 
                src={dictionaryIcons[category]}
                alt="Icons" 
            />

            <div className="description-expense">
                <p className="category">{category}</p>
                <p className="name-expense">{name}</p>
                <p className="date-expense">
                    Added at: {''}
                    <span>{dateFormat(date)}</span>
                </p>
            </div>
        </div>
        <p className="quantity-expense">${quantity}</p>
    </div>
  )
}

export default Expense