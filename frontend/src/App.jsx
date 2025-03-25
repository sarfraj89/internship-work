import { Routes, Route } from "react-router-dom";  // ✅ Import Routes & Route
import HomePage from "./pages/Homepage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import Navbar from "./components/Navbar";
import AdminDashboard from "./components/AdminDashboard";
import Hero from "./components/Hero";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />

      <Routes>  {/* ✅ Routes work only inside BrowserRouter */}
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />  {/* ✅ Handle unknown routes */}
      </Routes>
    </div>
  );
}

export default App;
