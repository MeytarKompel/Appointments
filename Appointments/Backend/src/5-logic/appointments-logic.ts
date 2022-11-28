import { OkPacket } from "mysql";
import dal from "../2-utils/dal";
import AppointmentsModel from "../4-models/appointments-model";
import TeamsModel from "../4-models/teams-model";

async function getAllTeams(): Promise<TeamsModel[]> {
  const sql = "SELECT * from devTeams";
  const teams = await dal.execute(sql);
  return teams;
}

async function getAllAppointsByTeamId(teamId: number): Promise<AppointmentsModel[]> {
  const sql = `SELECT * from appointments
               WHERE appointments.teamId= ${teamId}`
  const appoints = await dal.execute(sql);
  return appoints;
}

async function addAppointment(appointment: AppointmentsModel): Promise<AppointmentsModel> {
  const sql = `INSERT INTO appointments VALUES(
        DEFAULT,
        ${appointment.teamId},
        '${appointment.startDate}',
        '${appointment.endDate}',
        '${appointment.description}',
        '${appointment.appointRoom}'
    )`;
  const result: OkPacket = await dal.execute(sql);
  appointment.appointId = result.insertId;
  return appointment;
}

export default {
  getAllTeams,
  getAllAppointsByTeamId,
  addAppointment,
};
