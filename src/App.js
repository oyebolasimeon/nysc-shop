import './App.css';
import Header from './component/header/Header'
import { BrowserRouter, Switch} from 'react-router-dom'
import Banner from './component/banner/Banner'

function App() {
  return (

    <BrowserRouter>

      <div className="App">
      <Header />

      <Banner />

        <Switch>

      {/* <Route exact path="/" component ="{}"></Route>         */}

          
        </Switch>      
       

      </div>

    </BrowserRouter>
    
  );
}

export default App;
