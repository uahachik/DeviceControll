import { BrowserRouter, Routes, Route } from "react-router-dom";
import useReplyData from '../hooks/useReplyData';
import Login from '../pages/user/login/Login';
import Home from '../pages/home/Home';
import Profile from '../pages/profile/Profile';
import Device from '../pages/device/Device';
import About from '../pages/about/About';

const AppRoutes = () => {
  const { user } = useReplyData('user', {}).data;
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" index element={<About />} />
        <Route path="/login" element={<Login />} />
        {user.id ? (
          <>
            <Route path="/profile" element={<Profile />} />
            <Route path="/device" element={<Device />} />
          </>
        ) : null}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;