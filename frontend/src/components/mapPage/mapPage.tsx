import { DirectionsService, DirectionsRenderer, GoogleMap, LoadScript, Marker, Polyline } from "@react-google-maps/api";
import { useCallback, useMemo, useState, useEffect, useContext } from "react";
import { ContextApi } from "@/useContext/contextApi";

export function MapPage() {
    const { origin, destination, encodedPolyline } = useContext(ContextApi); // Pegue `origin` e `destination` do contexto

    const [map, setMap] = useState<google.maps.Map | null>(null);
    const [response, setResponse] = useState<google.maps.DirectionsResult | null>(null);

    //@ts-ignore
    const directionServiceOptions = useMemo<google.maps.DirectionsRequest>(() => {
        if (origin && destination) {
            return {
                origin,
                destination,
                travelMode: "DRIVING",
            };
        }
        return null;
    }, [origin, destination]);

    //@ts-ignore
    const directionsCallback = useCallback((res) => {
        if (res && res.status === "OK") {
            setResponse(res);
        } else {
            console.error("Error fetching directions:", res);
        }
    }, []);

    const directionsRendererOptions = useMemo(() => {
        if (response) {
            return {
                directions: response,
            };
        }
        return null;
    }, [response]);

    const onMapLoad = (mapInstance: google.maps.Map) => {
        setMap(mapInstance);
    };


    useEffect(() => {
        if (map && origin) {
            map.panTo(origin);
        }
    }, [map, origin]);

    return (
        <div className="w-full h-96">
            <LoadScript
                id="script-load"
                googleMapsApiKey="AIzaSyDOgNLmLRUQDvRJrSnRbr_5wtUn1jMCjqE"
                libraries={["places", "geometry"]}
            >
                <GoogleMap
                    onLoad={onMapLoad}
                    mapContainerStyle={{ width: "100%", height: "100%" }}
                    center={ {lat: -23.51995, lng: -46.77121 }}
                    zoom={15}
                >
                    {origin && (
                        <Marker 
                            position={origin} 
                            options={{
                                label: {
                                    color: "#da0e0e",
                                    text: "Origem",
                                    className: "map__maker"
                                },

                            }}
                        />
                    )}
                    {destination && (
                        <Marker 
                            position={destination}
                            options={{
                                label: {
                                    color: "#da0e0e",
                                    text: "Destino",
                                    className: "map__maker"
                                },

                            }}
                        />
                    )},
                    {encodedPolyline && (
                        <Polyline
                            path={google.maps.geometry.encoding.decodePath(encodedPolyline)}
                            options={{
                                strokeColor: "#eed706",
                                strokeOpacity: 0.7,
                                strokeWeight: 4,
                            }}
                        />
                    )}
                    {directionServiceOptions && (
                        <DirectionsService
                            options={directionServiceOptions}
                            callback={directionsCallback}
                        />
                    )}
                    {directionsRendererOptions && (
                        <DirectionsRenderer options={directionsRendererOptions} />
                    )}
                </GoogleMap>
            </LoadScript>
        </div>
    );
}
