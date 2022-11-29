import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import ListProperty from "./components/ListProperty";
import TopNavbar from './components/TopNavbar';
import CreateAccount from './components/CreateAccount';
import LogIn from './components/LogIn';
import StateProvider from './StateProvider';
import MyProfile from './components/MyProfile';
import SearchProperty from './components/SearchProperty';
import ResetPassword from './components/ResetPassword';



function App() {

  return (
    <div className="App">
      <StateProvider>
        <BrowserRouter>
          <TopNavbar />
          <LogIn />
          <CreateAccount />
          <ResetPassword />
          <Routes>
            <Route path='/StudentApartment' element={<Home />} />
            <Route path="/StudentApartment/listProperty" element={<ListProperty />} />
            <Route path="/StudentApartment/createAccount" element={<CreateAccount />} />
            <Route path="/StudentApartment/propertiesForRent" element={<SearchProperty />} />
            <Route path="/StudentApartment/propertiesForRent/:value" element={<SearchProperty />} />
            <Route path="/StudentApartment/myProfile" element={<MyProfile />} />
          </Routes>
        </BrowserRouter>
      </StateProvider>
    </div>
  );
}

export default App;
