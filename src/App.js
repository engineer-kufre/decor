import React from 'react'
import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
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
import {setCurrentUser} from './redux/user/user.actions'

class App extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount(){
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        setCurrentUser(userAuth)
      }
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  
  render(){
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
          <Route path='/mens' component={MensPage} />
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInPage />)} />
          <Route path='/signup' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignUpPage />)} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
