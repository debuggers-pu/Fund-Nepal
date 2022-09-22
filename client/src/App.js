import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import { Toaster } from "react-hot-toast";
import CreatePost from "./pages/CreatePost";
import { useSelector } from "react-redux";
import Footer from "./pages/Footer";
import AboutUs from "./pages/AboutUs";
import HowItWorks from "./pages/HowItWorks";
import PostDescription from "./pages/PostDescription";

function App() {
  const modal = useSelector((state) => state.modal.postModal);
  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          className: "font-bold text-sm",
        }}
      />
      {modal ? <CreatePost /> : ""}
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
		    <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/howitworks" element={<HowItWorks />} />
        <Route path="/postdescription" element={<PostDescription />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<Signup />} />
      </Routes>
	  <Footer />
    </>
  );
}

export default App;
