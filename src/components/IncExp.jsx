import React , {useContext} from 'react'
import { GlobalContext } from '../context/GlobaLState'


const IncExp = () => {
  const {transactions} = useContext(GlobalContext);

  const income = transactions.map((transaction) => transaction.amount > 0 ? transaction.amount : 0)
  const incomeTot = income.reduce((acc,item)=> (acc+=item) ,0).toFixed(2);
  
  const expense = transactions.map((transaction) => transaction.amount < 0 ? transaction.amount : 0)
  const expenseTot = expense.reduce((acc,item)=> (acc+=item) ,0).toFixed(2);

  return (
    <div className='inc-exp-container'>
      <div>
        <h4>Income</h4>
        <p className='money plus'>{incomeTot}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className='money minus'>{expenseTot}</p>
      </div>
    </div>
  )
}

export default IncExp
