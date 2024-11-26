import { Router } from "express";
import pool from "../db/config";

export const rideHistory = Router();

rideHistory.get("/ride/:customer_id", async (req, res) => {
    const { customer_id } = req.params;
    const { driver_id } = req.query;

    if (!customer_id) {
        return res.status(400).json({ 
            error_code: "INVALID_CUSTOMER",
            error_description: "O ID do cliente é obrigatório"
        });
    }

    try {
        let driverIdFilter: number | undefined = undefined;

        if (driver_id) {
            const driverQuery = await pool.query('SELECT * FROM driver WHERE id = $1', [driver_id]);
            if (driverQuery.rowCount === 0) {
                return res.status(400).json({ 
                    error_code: "INVALID_DRIVER",
                    error_description: "Motorista inválido"
                });
            }
            driverIdFilter = Number(driver_id); 
        }

        const ridesQuery = `
            SELECT r.id, r.createdAt AS date, r.origin, r.destination, r.distance, r.duration, r.value, 
                   d.id AS driver_id, d.name AS driver_name
            FROM ride r
            LEFT JOIN driver d ON r.driver_id = d.id
            WHERE r.customer_id = $1
            ${driverIdFilter ? "AND r.driver_id = $2" : ""}
            ORDER BY r.createdAt DESC;
        `;

        const ridesParams = driverIdFilter ? [customer_id, driverIdFilter] : [customer_id];
        const ridesResult = await pool.query(ridesQuery, ridesParams);

        const formattedRides = ridesResult.rows.map((ride) => ({
            id: ride.id,
            date: ride.date, // Corrigido para usar o alias "date" corretamente
            origin: ride.origin,
            destination: ride.destination,
            distance: ride.distance,
            duration: ride.duration,
            driver: {
                id: ride.driver_id || null,
                name: ride.driver_name || null,
            },
            value: ride.value,
        }));

        return res.json({
            customer_id,
            rides: formattedRides,
        });

    } catch (error) {
        console.error("Erro ao buscar viagens:", error);
        return res.status(500).json({ error: "Erro ao buscar as viagens realizadas." });
    }
});
