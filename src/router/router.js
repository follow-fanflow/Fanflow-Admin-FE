import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BirthdayCafe } from "../pages/birthdayCafe";
import { Login } from "../pages/login";
import { Schedule } from "../pages/schedule";
import { Header } from "../components/header";

export const Router = () => { 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path='/map' element={<BirthdayCafe />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/header" element={<Header />} />
      </Routes>
    </BrowserRouter>
  );
};
