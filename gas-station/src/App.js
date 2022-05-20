import './App.css';
import { Route, Routes } from 'react-router';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CreateUser from './components/CreateUser';
import LoginUser from './components/LoginUser';
import ProfileUser from './components/ProfileUser';
import ViewOrders from './components/ViewOrders';
import CreateOrder from './components/CreateOrder'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/new" element={<CreateUser />} />
        <Route path="/users/login" element={<LoginUser />} />
        <Route exact path='/users/:id' element={<ProfileUser />} />
        <Route path="/orders" element={<ViewOrders />} />
        <Route path="/orders/new" element={<CreateOrder authed={true} />} />
      </Routes>
    </div>
  );
}

export default App;
