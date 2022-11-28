class AppointmentsModel {
  public appointId: number;
  public teamId: number;
  public startDate: string;
  public endDate: string;
  public description: string;
  public appointRoom: string;

  public constructor(appointment: AppointmentsModel) {
    this.appointId = appointment.appointId;
    this.teamId = appointment.teamId;
    this.startDate = appointment.startDate;
    this.endDate = appointment.endDate;
    this.description = appointment.description;
    this.appointRoom = appointment.appointRoom;
  }
}

export default AppointmentsModel;
