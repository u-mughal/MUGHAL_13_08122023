import { Route, Routes } from "react-router-dom"
import Error from "../Error";
import Login from "./Login";

const AuthRouter = () => {
    return (
        <Routes>
            <Route index element={<Login />}/>
            <Route path="login" element={<Login />}/>
            <Route path="*" element={<Error />}/>
        </Routes>
    );
};

export default AuthRouter;