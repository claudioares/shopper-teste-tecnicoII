import express, { Application } from "express";
import cors from "cors"
import { createRouterEstimate } from "./routes/ride.estimate";
import { createRouterComfirm } from "./routes/ride.confirm";
import { rideHistory } from "./routes/ride.history";
import pool from "./db/config";
import { driverList } from "./routes/drivers.all";


export class App {

    private app:Application;
    constructor (){
        this.app = express();
    };

    async listen(){
        await pool.connect();
        const PORT= 8080;

        this.app.listen(PORT, ()=>{
            console.log(`Server running in the port ${PORT}!!`)
        })
    };

    register(){
        this.app.use(cors());
        this.app.use(express.json({ limit: '10mb' }));
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(createRouterEstimate);
        this.app.use(createRouterComfirm);
        this.app.use(rideHistory);
        this.app.use(driverList);
    }
}