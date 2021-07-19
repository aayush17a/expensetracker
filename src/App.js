
import './App.css';
import {Header} from "./components/Header";
import {Balance} from "./components/Balance";
import {Incomeexp} from "./components/Incomeexp";
import {Translist} from "./components/Translist";
import {Addtrans} from "./components/Addtrans";
import {GlobalProvider} from "./Context/globalState";

function App() {
  return (
    
      <GlobalProvider>
        <Header />

      <div className="container">
        <Balance />
        <Incomeexp />
        <Translist />
        <Addtrans />

      </div>
      </GlobalProvider>


      
      
      
    
  );
}

export default App;
