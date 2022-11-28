import express, { NextFunction, Request, Response } from "express";
import AppointmentsModel from "../4-models/appointments-model";
import appointmentsLogic from "../5-logic/appointments-logic";
import logic from "../5-logic/appointments-logic";

const router = express.Router();

// GET http://localhost:3001/api/teams/
router.get("/api/teams/", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const teams= await appointmentsLogic.getAllTeams();
        response.json(teams);
    }
    catch (err: any) {
        next(err);
    }
});


router.get("/api/appointments-by-team/:teamId", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const teamId= +request.params.teamId;
        const appointments= await appointmentsLogic.getAllAppointsByTeamId(teamId);
        response.json(appointments);
    }
    catch (err: any) {
        next(err);
    }
})



router.post("/api/appointments/", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const appointment= new AppointmentsModel(request.body);
        const addedAppointment= await appointmentsLogic.addAppointment(appointment)
        response.status(201).json(addedAppointment);
    }
    catch (err: any) {
        next(err);
    }
});



export default router;
