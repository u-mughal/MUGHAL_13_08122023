import { Navigate } from "react-router-dom";
import { accountService } from "@/_Services/AccountService";
import PropTypes from "prop-types";

const AuthGuard = ({children}) => {

  if (!accountService.isLogged()) {
      return <Navigate to="/login"/>
  }

  return children
};

AuthGuard.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthGuard;