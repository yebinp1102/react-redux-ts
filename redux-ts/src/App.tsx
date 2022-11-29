import './App.css';
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators, State } from './state';
import { useSelector } from 'react-redux';

function App() {

  const dispatch = useDispatch();

  const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(actionCreators, dispatch)
  const amount = useSelector((state: State) => state.bank)

  return (
    <div className="App">
      <div>
        <h1>{amount}</h1>
        <div className='btns'>
          <button onClick={()=>depositMoney(1000)}>Deposit</button>
          <button onClick={()=>withdrawMoney(500)}>Withdraw</button>
          <button onClick={()=>bankrupt()}>Bankrupt</button>
        </div>
      </div>
    </div>
  );
}

export default App;
