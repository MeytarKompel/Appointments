import { SyntheticEvent,  useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import AppointmentsModel from "../../../Models/AppointmentsModel";
import TeamsModel from "../../../Models/TeamsModel";
import companyService from "../../../Services/CompanyService";
import AppointCard from "../AppointCard/AppointCard";
import "./AppointsList.css";

function AppointsList(): JSX.Element {
    const [teams, setTeams]= useState<TeamsModel[]>([]);

    const [appoints, setAppoints] = useState<AppointmentsModel[]>([]);

    useEffect(() =>{
        companyService.getAllTeams()
        .then(teams => setTeams(teams))
        .catch(err => alert(err.message));
    },[]);


    async function getAppoints(args: SyntheticEvent) {
        try {
            const select = args.target as HTMLSelectElement;
            const teamId = +select.value;
            const appoints = await companyService.getAppointsByTeamId(teamId);
            setAppoints(appoints);
        }
        catch (err: any) {
            alert(err.message);
        }
    }



    return (
        <div className="TeamsList">
            <NavLink to="/appoints/new" className="addAppoint">➕</NavLink>
			
            <label>Teams: </label>
            <select defaultValue="" onChange={getAppoints}>
                <option disabled value="">Select Team</option>
                {teams.map(t => <option key={t.teamId} value={t.teamId}>{t.teamName}</option>)}
            </select>
            <br />
            <br />
            
            {appoints.map(a => <AppointCard key={a.appointId} appoint={a} />)}

        </div>

    );
}

export default AppointsList;
