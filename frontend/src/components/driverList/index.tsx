import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "../button";
import { useContext } from "react";
import { ContextApi } from "@/useContext/contextApi";
import { IDriver } from "@/useContext/interfaces";


export function DriverList() {
  const { drivers, confirmedTrip } = useContext(ContextApi);
  const driveList:IDriver[] = drivers as IDriver[];

  return (
    <>
      {driveList ? 
        <div className="flex flex-col text-white w-full">
          {driveList.map((infoDriver, index) => (
            <Accordion key={index} type="single" collapsible >
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger>{infoDriver.name}</AccordionTrigger>
                <AccordionContent>
                  <dl className="space-y-2">
                    <div>
                      <dt className="font-semibold">Descrição:</dt>
                      <dd>{infoDriver.description}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold">Avaliação:</dt>
                      <dd>{infoDriver.review.comment}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold">Carro:</dt>
                      <dd>{infoDriver.vehicle}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold">Nota:</dt>
                      <dd>{infoDriver.review.rating}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold">Tarifa por KM:</dt>
                      <dd>R$ {Number(infoDriver.value).toFixed(2)}</dd>
                    </div>
                  </dl>
                  <Button labelName="Escolher" funClick={()=>confirmedTrip(infoDriver)}/>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      : (
        <p>Carregando...</p>
      )}
    </>
  );
}
