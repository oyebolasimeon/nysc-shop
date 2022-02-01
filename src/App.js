import './App.css';
import Header from './component/header/Header'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Banner from './component/banner/Banner'
import Package from './component/package/Package';
import BasicPackage from './component/packageList/BasicPackage';
import Premium from './component/packageList/Premium';

function App() {
  return (

    <BrowserRouter>

      <div className="App">
      <Header />

      <Banner />

        <Switch>

            <Route exact path="/packages" component={Package} />   


        </Switch> 

        <Switch>

          <Route exact path="/basic-packages" component={BasicPackage} />

        </Switch>

        <Switch>

          <Route exact path="/premium-packages" component={Premium} />

        </Switch>

      
    
       

      </div>

    </BrowserRouter>
    
  );
}

export default App;
