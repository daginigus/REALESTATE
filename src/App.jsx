import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

export default function App() {
  return <BrowserRouter>
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/sign-in" element={<Signin />} />
  <Route path="/sign-up" element={<Signup />} />
  <Route path="/about" element={<About />} />
  <Route path="/profile" element={<Home />} />

  </Routes>
  </BrowserRouter>;
}
