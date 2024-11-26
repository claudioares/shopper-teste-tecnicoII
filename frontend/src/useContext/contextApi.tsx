/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { api } from "@/api/axios.config";
import { ReactNode, createContext, useEffect, useState } from "react";
import { IAllDrivers, IContextProps, IDriver, IFormData, ILocationsProps, IResponseApiProps } from "./interfaces";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';


export const ContextApi = createContext<IContextProps>({} as IContextProps);


export default function ContextProvider ({children}: {children: ReactNode}) {
    const [formDataLocation, setFormDataLocation] = useState<IFormData>();
    const [responseApi, setResponseApi] = useState<IResponseApiProps>()
    const [origin, setOrigin] = useState<ILocationsProps>();
    const [destination, setDestination] = useState<ILocationsProps>();
    const [encodedPolyline, setEncodedPolyline] = useState<string>("");
    const [drivers, setDrivers] = useState<IDriver[]>();

    const [allDrivers, setAllDrivers] = useState<IAllDrivers[]>();
    const [lastCustumeId, setLastCustumeId] = useState<string>("")
   

    useEffect(()=>{
        async function getLocations() {
           try {
                if(formDataLocation){
                    const response = await api.post('ride/estimate', {
                        origin: formDataLocation?.origin,
                        destination: formDataLocation?.destination,
                        userId: formDataLocation?.userId,
                    });
                    setResponseApi(response.data);
                    setOrigin({
                        lat: response.data.origin.latitude,
                        lng: response.data.origin.longitude
                    });
                    setDestination({
                        lat: response.data.destination.latitude,
                        lng: response.data.destination.longitude
                    });
                    setEncodedPolyline(response.data.routeResponse.routes[0].polyline.encodedPolyline)
                    
                    setDrivers(
                        response.data.options.map((option: any) => ({
                            id: option.id,
                            custumer_id: String(formDataLocation?.userId),
                            origin: formDataLocation?.origin || "",
                            destination: formDataLocation?.destination || "",
                            name: option.name,
                            distance: response.data.distance,
                            duration: response.data.duration,
                            description: option.description,
                            review: {
                            comment: option.review.comment,
                            rating: option.review.rating,
                            },
                            vehicle: option.vehicle,
                            value: option.value,
                        }))
                    );

                }
                
           } catch (error) {
            console.log(error)
           }
        };
        getLocations();
    }, [formDataLocation])

    const navigate = useNavigate();
    async function confirmedTrip (driver: IDriver) {
        try {
            const confirmedTrip = await api.post("ride/confirm", {
                customer_id: driver.custumer_id,
                origin: driver.origin,
                destination: driver.destination,
                distance: driver.distance,
                duration: driver.duration,
                driver: {
                    id: driver.id,
                    name: driver.name
                },
                value: driver.value,
            });

            navigate("/destinations");
            setLastCustumeId(driver.custumer_id);
            return confirmedTrip.data;

        } catch (error) {
            return console.log(error)
        };

    };

    const location = useLocation().pathname;

    async function getDriversAll () {
        try {
            const driversAll:IAllDrivers[] = await (await api.get('drivers')).data.drivers;
            setAllDrivers(driversAll);
        } catch (error) {
            return console.log(error)
        }
    }

    useEffect(()=>{
        if(location === "/destinations") {
            getDriversAll();
        };
    }, [location]);

    return(
        <ContextApi.Provider value={{
            formDataLocation, setFormDataLocation,
            origin, destination, responseApi, 
            setResponseApi, encodedPolyline, drivers,
            confirmedTrip, allDrivers, lastCustumeId
        }}>
            {children}
        </ContextApi.Provider>
    )
}