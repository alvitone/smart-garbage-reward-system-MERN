import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import VerifyEmail from "./pages/VerifyEmail.jsx";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import ProtectedRoute from "./components/ProtectedRoute";
import RewardSection from "./components/rewards/RewardSection.jsx";
import WasteCollectionSection from "./components/waste/WasteCollectionSection.jsx"
import PlantingTreesSection from "./components/trees/PlantingTreesSection.jsx"
import ManureSection from './components/manure/ManureSection.jsx'
import UserProfile from "./pages/user.jsx";
import Shop from "./pages/shop.jsx"
import Checkout from "./pages/Checkout.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/rewards" element={<RewardSection />} />
        <Route path="/waste-collection" element={<WasteCollectionSection />} />
        <Route path="/planting-trees" element={<PlantingTreesSection />} />
        <Route path="/manure-production" element={<ManureSection />} />
        <Route path="/user" element={<UserProfile/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/checkout" element={<Checkout />} />


        {/* ✅ PROTECTED ROUTE (THIS IS THE FIX) */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
