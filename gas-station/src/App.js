import './App.css';
import { Route, Routes } from 'react-router';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CreateUser from './components/CreateUser';
import LoginUser from './components/LoginUser';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/new" element={<CreateUser />} />
        <Route path="/users/login" element={<LoginUser />} />
      </Routes>
    </div>
  );
}

export default App;
