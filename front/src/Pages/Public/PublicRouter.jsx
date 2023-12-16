import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../../Layout/Layout';
import { Home, User, Login, Error } from './index';

const PublicRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
};

export default PublicRouter;
