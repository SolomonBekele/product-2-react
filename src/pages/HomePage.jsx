import Body from "../components/Body";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";
import { HiH1 } from "react-icons/hi2";
import BreakoutGame from "../components/Breakgame.jsx";
import { Provider } from "react-redux";
import appStore from "../store/appStore.jsx";


const HomePage =()=>{
const isOnline = useOnlineStatus()
return !isOnline ? (
    <div>
<h1>check yoour connection</h1>
<BreakoutGame/>
</div>
) : (
    <Provider store={appStore}>
    <div className="app container mx-auto font-serif py-2">
    <Header/>
    <Outlet/>
    </div>
    </Provider>
)
}
export default HomePage;