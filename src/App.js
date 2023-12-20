import './App.css';
import Checkbox from './Checked';
import MyContextProvider from './MyContextProvider';

function App() {
  return (
    <div className="App">
    <MyContextProvider>
    <Checkbox />
    </MyContextProvider>
      
  
    </div>
  );
}

export default App;
