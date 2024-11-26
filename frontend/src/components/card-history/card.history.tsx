import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { IPropsInforRides } from "./interface"
import { formatDateRide } from "../../../utils-functions/formate.data";



export function CardHistory (data:IPropsInforRides) {

    const dateAndHoourRide = formatDateRide(String(data.dateAndhour));
    
    return(
        <>
            <Card className="h-72">
                <CardHeader>
                    <CardTitle className="flex">
                        <div className="flex gap-1 justify-between">
                            <h1>Motorista:</h1><p className="text-green-900">{data.driveName}</p>
                        </div>
                    </CardTitle>
                    <CardDescription>{dateAndHoourRide}</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="w-full h-full flex flex-col">
                        <div className="flex gap-1 items-center">
                            <h1 className="font-medium">Origem:</h1>
                            <p className="text-green-900 text-sm">{data.origin}</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <h1 className="font-medium">Destino:</h1>
                            <p className="text-green-900 text-sm">{data.destination}</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <h1 className="font-medium">Distância:</h1>
                            <p className="text-green-900 text-sm">{data.distance}</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <h1 className="font-medium">Tempo:</h1>
                            <p className="text-green-900 text-sm">{data.duration}</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <h1 className="font-medium">Valor:</h1>
                            <p className="text-green-900 text-sm">{data.value}</p>
                        </div>
                    </div>
                </CardContent>
                <CardFooter>
                    <span className="w-full font-medium text-xs flex items-center gap-1 justify-end">
                        Id do usuário:
                        <span><p className="text-green-900">{data.userId}</p></span>
                    </span>
                </CardFooter>
            </Card>
        </>
    )
}