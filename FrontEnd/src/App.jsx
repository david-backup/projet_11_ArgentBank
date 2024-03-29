import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import User from "./pages/User";
import UserEditName from "./pages/UserEditName";
import Footer from "./components/Footer";
import SecureRoute from "./SecureRoute";
import { useDispatch } from "react-redux";

const App = () => {
  const basename =
    import.meta.env.MODE === "production" ? "/projet_11_ArgentBank" : "";
  return (
    <>
      <Router basename={basename}>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/user"
            element={
              <SecureRoute>
                <User />
              </SecureRoute>
            }
          />
          <Route
            path="/user_edit"
            element={
              <SecureRoute>
                <UserEditName />
              </SecureRoute>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
