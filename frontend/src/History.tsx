import { useContext, useEffect, useState } from "react";
import { Input } from "./components/input";
import { Label } from "./components/label";
import { SubContainer } from "./components/sub-container/sub-container";
import Select from "./components/select/select";
import { Button } from "./components/button";
import { CardHistory } from "./components/card-history/card.history";
import { ContextApi } from "./useContext/contextApi";
import { IAllDrivers, ICustomerRides, IRide } from "./useContext/interfaces";
import { SubmitHandler, useForm } from "react-hook-form";
import { api } from "./api/axios.config";


type FormData = {
    origin: string;
    destination: string;
    userId: number
};

export function HistoryPage () {
  const { allDrivers, lastCustumeId } = useContext(ContextApi);
  const [ arrDrivers, setArrDrivers ] = useState<string[]>([]);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const [selectOptionDrive, setSelectOptionDrive] = useState<string | null>();
  const [rides, setRides] = useState<ICustomerRides[]>([
      { customer_id: "", rides: [] }
  ]);

  useEffect(()=>{
    getCostumerRides(lastCustumeId);
  }, [lastCustumeId]);

  async function getCostumerRides (id: number) {
      const driverOption: IAllDrivers | undefined = allDrivers?.find(
          (driver: { name: string | null | undefined; }) => driver.name === selectOptionDrive
      );
      
      try {
         const response = await api.get(
            driverOption?.id
                ? `ride/${id}?driver_id=${driverOption?.id}`
                : `ride/${id}`
        );

        setRides([]);
        setRides((prevRides) => {
          const updatedRides = [...prevRides, response.data];
          return updatedRides;
        });

        console.log(rides)
        return
      } catch (error) {
          return console.log(error);
      }
  }
  const handleSelectChange = (value: string) => {
    setSelectOptionDrive(value);
  };

  const onSubmit: SubmitHandler<FormData> = (data) => {
    getCostumerRides(data.userId);
  };

  useEffect(()=>{
    if (allDrivers) {
      setArrDrivers(allDrivers?.map((driver:IAllDrivers) => driver.name));
    }
  }, [allDrivers])

  return (
      <>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-4 pt-4 justify-center items-center">
          <div className="w-full flex justify-between items-center px-10">
            <h1 className="text-center text-2xl font-semibold">Histórico de viagens</h1>
            <div className="flex justify-end">
              <Button labelName={"Filtrar"} type="submit"/>
            </div>
          </div>
          <SubContainer>
            <div className="w-full flex flex-1 justify-between items-center text-black">
              <section>
                <Label htmlFor={"userid"} >Id de usuário</Label>
                <Input 
                    id="userid"
                    type={"number"} 
                    placeholder={"Ex: 00000"}
                    register={register("userId", {required: "A Id de usuário é obrigatório"})}
                />
                {errors.userId && <p className="text-red-500 text-sm">{errors.userId?.message}</p>}
              </section>
             
              <section className="mt-3 text-black">
                <Select
                  options={arrDrivers}
                  onChange={handleSelectChange}
                  placeholder="Escolha um(a) motorista"
                />
              </section>
            </div>

            <section className="w-full h-screen flex flex-wrap gap-4 justify-center">
               <>
                  {rides[0].rides.length > 0 ? (
                    rides.map((customerRide: ICustomerRides) =>
                        customerRide.rides.map((ride: IRide) => (
                            <CardHistory
                                key={ride.id}
                                dateAndhour={ride.date}
                                driveName={ride.driver?.name || "Desconhecido"}
                                origin={ride.origin}
                                destination={ride.destination}
                                distance={ride.distance}
                                duration={ride.duration || "0"}
                                value={ride.value || "0"}
                                userId={customerRide.customer_id}
                            />
                        ))
                    )
                ) : (
                  <div className="w-full h-screen flex justify-center items-center">
                    <p>Nenhum registro encontrado.</p>
                  </div>
                )}
                </>
            </section>
          </SubContainer>
        </form>
      </>
  );
}
