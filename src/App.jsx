import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Events from "./components/Events";
import Founders from "./components/Founders";
import Community from "./components/Community";
import Dashboard from "./Pages/Dashboard";
import Ecommerce from "./Pages/Ecommerce";
import OrderList from "./Pages/OrderList"; 
import Gmap from "./components/Gmap";
import Navbar from "./components/Navbar";
import Sponsors from "./components/Sponsors";
import Checkout from "./components/Checkout";
import Login from "./Pages/Login";
import AdminLogin from "./Pages/adminLogin";
import AdminSignUp from "./Pages/adminSignup";
import Signup from "./Pages/SignUp";
import Profile from "./Pages/Profile";

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes where Navbar should appear */}
        <Route path="/*" element={
          <>
            <Navbar />
            <Routes>
              {/* Home Page */}
              <Route path="/" element={
                <>
                  <Hero />
                  <About />
                  <Sponsors />
                  <Gallery />
                  <Events />
                  <Founders />
                  <Community />
                  <Gmap />
                </>
              } />

              {/* Other Pages with Navbar */}
              <Route path="/ecommerce" element={<Ecommerce />} />
              <Route path="/orders" element={<OrderList />} />
              <Route path="/checkout" element={<Checkout />} />

              {/* Auth Pages with Navbar */}
              <Route path="/login" element={<Login />} />
              <Route path="/adminlogin" element={<AdminLogin />} />
              <Route path="/adminsignup" element={<AdminSignUp />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
            <footer className="bg-black text-white text-center py-6 mt-10 text-sm">
              <p>© 2024 Tumus. All rights reserved.</p>
              <p className="mt-1">email@tumasinfo.com</p>
            </footer>
          </>
        } />

        {/* Routes without Navbar */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;

