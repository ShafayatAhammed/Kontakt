import App from "../App.jsx";
import Auth from "../components/auth.jsx";
import Spinner from "../components/spinner.jsx";
import { useAuth } from "../contexts/auth-context.jsx";
import { Navigate } from "react-router-dom";

const Protect = ({ page }) => {
  const { isAuth } = useAuth();

  return isAuth !== null ? (
    isAuth ? (
      page === "home" ? (
        <App />
      ) : (
        <Navigate to="/" replace />
      )
    ) : page === "home" ? (
      <Navigate to="/auth/signup" replace />
    ) : page === "signup" ? (
      <Auth type="signup" />
    ) : (
      <Auth type="signin" />
    )
  ) : (
    <Spinner />
  );
};

export default Protect;
