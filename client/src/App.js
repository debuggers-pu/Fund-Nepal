import "./App.css";
import { Route, Routes} from 'react-router-dom';
import Login from "./components/Login";
import Signup from "./components/Signup"
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import HeroSection from "./pages/HeroSection";
import {Toaster} from "react-hot-toast";


function App() {
	return (
		<>
		<Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          className: "font-bold text-sm",
        }}
      />

			<Navbar />
			<Routes>
				<Route path ="/" element={<HomePage/>}/>
				<Route path ="/herosection" element={<HeroSection/>}/>
				<Route path="/auth/login"  element={<Login/>}/>
				<Route path="/auth/signup" element={<Signup/>}/>
			</Routes>
		</>
	);
}


export default App;
 