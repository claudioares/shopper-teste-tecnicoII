import { Router } from "express";
import pool from "../db/config";

export const driverList = Router();

driverList.get("/drivers", async (_, res) => {
    try {
        const query = "SELECT id, name, description, car, rating, ratePerKm FROM Driver";
        const result = await pool.query(query);

        if (result.rowCount === 0) {
            return res.status(404).json({
                error_code: "NO_DRIVERS",
                error_description: "Não há motoristas cadastrados"
            });
        };


        return res.json({
            drivers: result.rows
        });
    } catch (error) {
        console.error("Erro ao buscar motoristas:", error);
        return res.status(500).json({
            error: "Erro ao buscar motoristas"
        });
    }
});
