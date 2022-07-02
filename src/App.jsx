import './App.scss';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/Expenses/NewExpense/NewExpense';

const App = () => {
  const expenses = [
    {
      title: 'Car Insurance', ammount: 110, date: new Date(2022, 7, 28)
    },
    {
      title: 'Insurance', ammount: 260, date: new Date(2022, 7, 28)
    },
    {
      title: 'House', ammount: 250, date: new Date(2022, 6, 28)
    },
  ]
  return (

    <div>
      <NewExpense />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
