import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, createContext, useEffect } from "react";
import Home from "./components/Homepage";
import MainLayout from "./components/MainLayout";
import Prediction from "./components/Prediction";


export const Store = createContext();



function App() {
  const [isAuth, setisAuth] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("salon_user_token");
    if (token) {
      setisAuth(token); // Restore authentication state
    }
  }, []);

  return (
    <BrowserRouter>
      <Store.Provider value={{ isAuth, setisAuth }}>
        <Routes>
          <Route to="/" element={<MainLayout />}>
             <Route path="/"  element={<Home />} />
             <Route path="/prediction"  element={<Prediction />} />
          
         
          </Route>
        </Routes>
      </Store.Provider>
    </BrowserRouter>
  );
}

export default App;
