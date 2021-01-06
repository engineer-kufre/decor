import React from 'react'
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
import SignInPage from './pages/sign-in/sign-in.component'
import SignUpPage from './pages/sign-up/sign-up.component'
import {auth, createUserProfileDocument} from './firebase/firebase.utils'

class App extends React.Component {
  constructor() {
    super()
  
    this.state = {
       currentUser : null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      } else {
        this.setState({currentUser: userAuth})
      }
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  
  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/hats' component={HatsPage} />
          <Route path='/sneakers' component={SneakersPage} />
          <Route path='/jackets' component={JacketsPage} />
          <Route path='/womens' component={WomensPage} />
          <Route path='/mens' component={MensPage} />
          <Route path='/mens' component={MensPage} />
          <Route path='/signin' component={SignInPage} />
          <Route path='/signup' component={SignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
