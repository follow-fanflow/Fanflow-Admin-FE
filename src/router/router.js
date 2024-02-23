import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { BirthdayCafe } from "../pages/birthdayCafe";
import { Login } from "../pages/login";
import { Schedule } from "../pages/schedule";
import { Header } from "../components/header";
import { Marker } from "../components/birthdayCafe/marker";

export const Router = () => { 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path='/map' element={<BirthdayCafe />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/header" element={<Header />} />
        <Route path="/" element={<Navigate replace to="/schedule" />} />
        <Route path="/marker" element={<Marker /> } />
      </Routes>
    </BrowserRouter>
  );
};
