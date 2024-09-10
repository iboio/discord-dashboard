    import {Routes, Route} from "react-router-dom";
    import Default from "./Views/Default";
    import Dashboard from "./Views/Dashboard";
    import BotSettings from "./Views/BotSettings";
    import ServerSettings from "./Views/ServerSettings";

    export default function Router() {
        return (
            <Routes>
                <Route path={"/"} element={<Default/>}></Route>
                <Route path={":id/dashboard/*"} element={<Dashboard/>}></Route>
                <Route path={"/bot"} element={<BotSettings/>}></Route>
                <Route path={"/server"} element={<ServerSettings/>}></Route>
            </Routes>
        )
    }