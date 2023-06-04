import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateNote from "./pages/CreateNote";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <div className="max-w-6xl mx-auto pt-2 space-y-6 font-poppins">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-note" element={<CreateNote />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
