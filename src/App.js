import './App.css';
import {Switch, Route} from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component';
import HatsPage from './pages/hats/hats.component'
import SneakersPage from './pages/sneakers/sneakers.component'
import JacketsPage from './pages/jackets/jackets.component'
import WomensPage from './pages/womens/womens.component'
import MensPage from './pages/mens/mens.component'


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/hats' component={HatsPage} />
        <Route path='/sneakers' component={SneakersPage} />
        <Route path='/jackets' component={JacketsPage} />
        <Route path='/womens' component={WomensPage} />
        <Route path='/mens' component={MensPage} />
      </Switch>
    </div>
  );
}

export default App;
