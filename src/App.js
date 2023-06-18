import './App.css';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Navbar from './components/navbar'
import Footer from './components/footer'
import Homepage from './components/homepage'
import About from './components/about'
import Contact from './components/contact';
import MealBox from './components/meal-box'
import Grocery from './components/grocery'
import Cart from './components/cart'
import SignUp from './components/signUp'
import Login from './components/login'
import Logout from './components/logout'
import Account from './components/account'
import Career from './components/career'
import FrequentSearch from './components/freqSearched'
import Menu from './components/menu'
import Saved from './components/saved'
import Sidebar from './components/sidebar'
import Payment from './components/payment';
import Tabs from './components/tabs'
import Test from './components/test'
import { ErrorBoundary } from "react-error-boundary";
import NotFoundError from "./components/errors/notFound"



function App() {
  return (
    <ErrorBoundary
    fallbackRender =  {({error, resetErrorBoundary, componentStack}) => (
      <div>
      <h1>An error occurred: {error.message}</h1>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )}>
    <Router>
      <Routes>
            <Route exact path='/' exact element={<Homepage />} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/meal-box' element={<MealBox/>} />
            <Route path='/grocery' element={<Grocery/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/sign-up' element={<SignUp/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/logout' element={<Logout/>} />
            <Route path='/payment' element={<Payment/>} />
            <Route path='/account' element={<Account/>} />
            <Route path='/career' element={<Career/>} />
            <Route path='/menu' element={<Menu/>} />
            <Route path='/saved' element={<Saved/>} />
            <Route path='/sidebar' element={<Sidebar/>} />
            <Route path='/test' element={<Test/>} />
            <Route path='/searched-elements' element={<FrequentSearch/>} />
            <Route path='*' element={<NotFoundError/>} />
         

      </Routes>
    </Router>
    </ErrorBoundary>
    
  );
}

export default App;
