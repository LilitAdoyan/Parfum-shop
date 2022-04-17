import './App.css';
import  Homepage  from './pages/Homepage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProductInfo from './pages/ProductInfo';
import Cartpage from './pages/Cartpage';
import './stylesheets/layout.css';
import './stylesheets/parfums.css';
import './stylesheets/authentication.css';
function App() {
  return (
    <div className="App">
<BrowserRouter>
<Routes>
  <Route path='/' element={<Homepage/>}/>
  <Route path='/login' element={<LoginPage/>}/>
  <Route path='/register' element={<RegisterPage/>}/>
  <Route path='/productinfo/:parfumid' element={<ProductInfo/>}/>
  <Route path='/cart' element={<Cartpage/>}/>

</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
