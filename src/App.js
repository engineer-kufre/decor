import './App.css';
import {Route} from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component';

const ItemPage = () => (
  <div>
    <h1>ITEM PAGE</h1>
  </div>
)

function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
      <Route path='/chairs' component={ItemPage} />
    </div>
  );
}

export default App;
