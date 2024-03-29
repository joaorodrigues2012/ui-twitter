import {Sidebar} from "../components/Sidebar.tsx";
import {Outlet} from "react-router-dom";
import './Default.css'

export function Default(){
    return (
        <div className="layout">
            <Sidebar/>
            <div className="content">
                <Outlet />
            </div>
        </div>
    )
}