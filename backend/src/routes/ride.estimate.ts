import { Router } from "express";
import { Client } from "@googlemaps/google-maps-services-js";
import axios from "axios";
import pool from "../db/config";

export const createRouterEstimate = Router();
const googleMapsClient = new Client();
const GOOGLE_API_KEY = "AIzaSyDOgNLmLRUQDvRJrSnRbr_5wtUn1jMCjqE";


createRouterEstimate.post("/ride/estimate", async (req, res) => {
  const { origin, destination, userId } = req.body;

    if (!origin || !destination || !userId) {
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

    try {
        
        const originGeo = await googleMapsClient.geocode({
            params: { address: origin, key: GOOGLE_API_KEY }
        });

        const destinationGeo = await googleMapsClient.geocode({
            params: { address: destination, key: GOOGLE_API_KEY }
        });

        const originCoordinates = originGeo.data.results[0].geometry.location;
        const destinationCoordinates = destinationGeo.data.results[0].geometry.location;


        const response = await axios.post(
            `https://routes.googleapis.com/directions/v2:computeRoutes?key=${GOOGLE_API_KEY}`,
            {
                origin: {
                    location: {
                        latLng: {
                            latitude: originCoordinates.lat,
                            longitude: originCoordinates.lng,
                        },
                    }
                },
                destination: {
                    location: {
                        latLng: {
                            latitude: destinationCoordinates.lat,
                            longitude: destinationCoordinates.lng,
                        }
                    }
                },
                travelMode: "DRIVE",
                routingPreference: "TRAFFIC_AWARE"
            },
            {
                headers: {
                    "X-Goog-FieldMask": "routes.distanceMeters,routes.duration,routes.polyline.encodedPolyline",
                },
            }
        );

        const distanceMeters = response.data.routes[0]?.distanceMeters;
        const durationSeconds = response.data.routes[0]?.duration;
        
        if (!distanceMeters || !durationSeconds) return res.status(500).json({ error: "Não foi possível calcular a distância ou o tempo da viagem." });

        const distanceKm = distanceMeters / 1000;
        const durationMin = (parseFloat(durationSeconds) / 60).toFixed(2);

        const driversQuery = "SELECT * FROM driver";
        const driversResult = await pool.query(driversQuery);
        
        const availableDrivers = driversResult.rows.filter((driver) => {
            const minKm = parseFloat(driver.minkm);
            return distanceMeters >= minKm * 1000;
        });


        const driversWithEstimates = availableDrivers.map((driver) => {
            const ratePerKm = parseFloat(driver.rateperkm);
            const totalCost = (distanceKm) * ratePerKm;
            return {
                id: driver.id,
                name: driver.name,
                description: driver.description,
                vehicle: driver.car,
                review: {
                    rating: driver.rating,
                    comment: driver.avalicao,
                },
                value: totalCost.toFixed(2),
            };
        });

        driversWithEstimates.sort((a, b) => parseFloat(a.value) - parseFloat(b.value));
      
        return res.json({
            origin: {
                latitude: originCoordinates.lat,
                longitude: originCoordinates.lng,
            },
            destination: {
                latitude: destinationCoordinates.lat,
                longitude: destinationCoordinates.lng,
            },
            distance: distanceKm,
            duration: durationMin,
            options: driversWithEstimates,
            routeResponse: response.data,
        });

    } catch (error) {
        res.status(500).json({ error });
    }
});
