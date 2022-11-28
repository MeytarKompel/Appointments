import AppointmentsModel from "../../../Models/AppointmentsModel";
import "./AppointCard.css";

interface AppointCardProps{
    appoint: AppointmentsModel;
}

function AppointCard(props: AppointCardProps): JSX.Element {


    return (
        <div className="AppointCard">
			<span>Description: {props.appoint.description}</span>
            <br />
			<span>Start Time: {props.appoint.startDate}</span>
            <br />
			<span>End Time: {props.appoint.endDate}</span>
            <br />
			<span>Room: {props.appoint.appointRoom}</span>
        </div>
    );
}

export default AppointCard;
