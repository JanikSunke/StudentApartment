import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import  Home  from "./components/Home";
import ListProperty  from "./components/ListProperty";
import TopNavbar from './components/TopNavbar';
import CreateAccount from './components/CreateAccount';
import LogIn from './components/LogIn';
import StateProvider, { StateContext } from './StateProvider';



function App() {

  return (
    <div className="App">
      <StateProvider>
        <TopNavbar />
        <LogIn />
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/listProperty" element={<ListProperty />} />
            <Route path="/createAccount" element={<CreateAccount />} />
          </Routes>
        </BrowserRouter>
      </StateProvider>
    </div>
  );
}

export default App;
