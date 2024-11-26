import { Router } from "express";
import pool from "../db/config";

export const createRouterComfirm = Router();


createRouterComfirm.post("/ride/confirm", async (req, res) => {
    const { customer_id, origin, destination, distance, duration, driver, value } = req.body;

    console.log("Entrou na rota de comfimação")

    if (!customer_id || !origin || !destination || !distance || !duration || !driver || !value) {
        return res.status(400).json({ 
            error_code: "INVALID_DATA",
            error_description: "Os dados fornecidos são inválidos!"
        });
    };

    if (origin === destination) {
        return res.status(400).json({ 
            error_code: "INVALID_DATA",
            error_description: "Os dados fornecidos são inválidos!"
        });
    };

    const driverQuery = await pool.query('SELECT * FROM driver WHERE id = $1', [driver.id]);

    if (driverQuery.rowCount === 0) {
        return res.status(404).json({ 
            error_code:"DRIVER_NOT_FOUND",
            error_description: "Motorista não encontrado"
        });
    };

     const selectedDriver = driverQuery.rows[0];

    if (distance < selectedDriver.minKm) {
        return res.status(400).json({ 
            error_code:"INVALID_DISTANCE",
            error_description: "Quilometragem inválida para motorista"
        });
    };

    try {

        const insertRideQuery = `
            INSERT INTO ride (customer_id, origin, destination, distance, duration, driver_id, value)
            VALUES ($1, $2, $3, $4, $5, $6, $7)
        `;

        await pool.query(insertRideQuery, [
            customer_id,
            origin,
            destination,
            distance,
            duration,
            selectedDriver.id,
            value
        ]);

        return res.status(200).json({ "success": true });
        
    } catch (error) {
        console.error("Erro ao salvar a viagem:", error);
        return res.status(500).json({ error: error });
    }
})