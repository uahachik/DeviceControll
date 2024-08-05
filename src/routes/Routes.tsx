import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../pages/user/login/Login';
import Profile from '../pages/user/profile/Profile';
import Home from '../pages/home/Home';

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