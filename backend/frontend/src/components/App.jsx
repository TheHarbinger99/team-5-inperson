import '../styles/App.css';
import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import BasicsNavbar from "./navigation/Navbar.jsx";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import MainSearch from './MainSearch';
import Login from './Login';
import Registration from './Registration';




function App() {

  return (
    <div className="app">
      <ChakraProvider>

        <BrowserRouter>
          <BasicsNavbar />
          <Routes>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/home' element={<MainSearch />}></Route>
            <Route path='/registration' element={<Registration />}></Route>
          </Routes>
        </BrowserRouter>


      </ChakraProvider>
    </div>
  );
}

export default App;
