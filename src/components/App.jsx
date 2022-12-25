import Header from './Header';
import "../index.css"
import Balance from './Balance';
import IncExp from './IncExp';
import TransactionList from './TransactionList';
import AddTransaction from './AddTransaction';
import { GlobalProvider } from '../context/GlobaLState';

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className="container">
        <Balance/>
        <IncExp/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </GlobalProvider>
  );
}

export default App;
