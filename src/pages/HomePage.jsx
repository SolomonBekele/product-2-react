import Body from "../components/Body";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const HomePage =()=>{
return (
    <div className="app font-serif p-2">
    <Header/>
    <Outlet/>
    </div>
)
}
export default HomePage;