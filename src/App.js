import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import {Switch} from 'react-router-dom'
import LoginComponent from './components/LoginComponent'

function App() {
  
  return (
    <div>
           <Router>
      
          <Switch>      
            <Route path="/" exact component={LoginComponent}/>
           
          </Switch>
        
      </Router>
    </div>
  );
}

export default App;
