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
import PostDescription from "./pages/PostDescription";
import AboutUs from "./pages/AboutUs";
import HowitWorks from "./pages/HowItWorks";

function App() {
	const modal = useSelector(state => state.modal.postModal);
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
				<Route path="/auth/login" element={<Login />} />
				<Route path="/auth/signup" element={<Signup />} />
				<Route path="/about-us" element={<AboutUs />} />
				<Route path="/how-it-works" element={<HowitWorks />} />
				<Route path="/:id" element={<PostDescription />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
