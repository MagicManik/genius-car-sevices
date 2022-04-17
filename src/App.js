import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Pricing from './Pages/Pricing/Pricing';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/pricing' element={
          <RequireAuth>
            <Pricing></Pricing>
          </RequireAuth>
        }></Route>
        <Route path='/pricing' element={<Pricing></Pricing>}></Route>
      </Routes>
    </div>
  );
}

export default App;
