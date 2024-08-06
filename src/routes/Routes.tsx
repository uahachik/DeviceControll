import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../pages/user/login/Login';
import Home from '../pages/home/Home';
import Profile from '../pages/profile/Profile';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;