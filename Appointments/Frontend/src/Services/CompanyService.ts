import axios from "axios";
import AppointmentsModel from "../Models/AppointmentsModel";
import TeamsModel from "../Models/TeamsModel";
import config from "../Utils/Config";

class CompanyService{

public async getAllTeams(): Promise<TeamsModel[]>{
    const response= await axios.get<TeamsModel[]>(config.teamsUrl);
    const teams= response.data;
    return teams;
}

public async getAppointsByTeamId(teamId: number): Promise<AppointmentsModel[]>{
    const response= await axios.get<AppointmentsModel[]>(config.appointsByTeamUrl + teamId);
    const appointments= response.data;
    return appointments;

}

public async addAppointment(appointment: AppointmentsModel): Promise<void>{
    await axios.post<AppointmentsModel>(config.appointsUrl, appointment);
}


}


const companyService= new CompanyService();

export default companyService;
