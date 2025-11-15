
import ReactDOM from "react-dom/client";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./components/About";
import ContactPage from "./components/Contact";
import NotFound from "./pages/ErrorPage";

const App =() =>{
  return (
     <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
export default App;










