import Body from "../components/Body";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";
import { HiH1 } from "react-icons/hi2";
import BreakoutGame from "../components/Breakgame.jsx";

const HomePage =()=>{
const isOnline = useOnlineStatus()
return !isOnline ? (
    <div>
<h1>check yoour connection</h1>
<BreakoutGame/>
</div>
) : (
    <div className="app container mx-auto font-serif py-2">
    <Header/>
    <Outlet/>
    </div>
)
}
export default HomePage;