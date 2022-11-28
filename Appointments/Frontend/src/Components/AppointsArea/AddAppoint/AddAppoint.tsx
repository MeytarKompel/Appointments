import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AppointmentsModel from "../../../Models/AppointmentsModel";
import TeamsModel from "../../../Models/TeamsModel";
import companyService from "../../../Services/CompanyService";
import "./AddAppoint.css";

function AddAppoint(): JSX.Element {
    const [teams, setTeams]= useState<TeamsModel[]>([]);
    const {register, handleSubmit}= useForm<AppointmentsModel>();
    const navigate= useNavigate();

    useEffect(()=> {
        companyService.getAllTeams()
        .then(teams => setTeams(teams))
        .catch(err => alert(err.message));
    },[]);


    async function send(appoint: AppointmentsModel){
        try {
            await companyService.addAppointment(appoint);
            alert("New Appointment has been Added!");
            navigate("/appoints");
        }
        catch (err: any) {
            alert(err.message);
        }
    }

    return (
        <div className="AddAppoint">
			<form onSubmit={handleSubmit(send)}>
                <h1>Add Appointment</h1>
            <label>Team: </label>
                <select defaultValue="" {...register("teamId")} required>
                    <option disabled value="">Select Team...</option>
                    {teams.map(t => <option key={t.teamId} value={t.teamId}>{t.teamName}</option>)}
                </select>

                <label>Description: </label>
                <input type="text" {...register("description")} required />

                <label>Start Time: </label>
                <input type="datetime-local" {...register("startDate")} required />

                <label>End Time: </label>
                <input type="datetime-local" {...register("endDate")} required />

                <label>Room: </label>
                <input type="string" {...register("appointRoom")} required />

                <button>Add</button>
            </form>
            <NavLink to="/appoints">Back</NavLink>
        </div>
    );
}

export default AddAppoint;
