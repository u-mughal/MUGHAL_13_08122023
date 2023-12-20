import { Routes, Route } from "react-router-dom";
import Error from "../Error";
import User from "./User/User";

const AdminRouter = () => {
    return (
        <Routes>
            <Route path="/user" element={<User />}/>
            <Route path="*" element={<Error/>}/>
        </Routes>
    );
};

export default AdminRouter;