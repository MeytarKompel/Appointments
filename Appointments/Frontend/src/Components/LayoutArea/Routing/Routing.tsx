import { Navigate, Route, Routes } from "react-router-dom";
import About from "../../AboutArea/About/About";
import AddAppoint from "../../AppointsArea/AddAppoint/AddAppoint";
import AppointsList from "../../AppointsArea/AppointsList/AppointsList";
import Home from "../../HomeArea/Home/Home";
import PageNotFound from "../PageNotFound/PageNotFound";
import "./Routing.css";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
            <Routes>
                <Route path="/appoints" element={<AppointsList />} />
                <Route path="/appoints/new" element={<AddAppoint />} />
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </div>
    );
}

export default Routing;
