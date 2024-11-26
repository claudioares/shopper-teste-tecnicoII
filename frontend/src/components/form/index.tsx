import { Button } from "../button";
import { Input } from "../input";
import { Label } from "../label";
import { useForm, SubmitHandler } from "react-hook-form";

type FormData = {
    origin: string;
    destination: string;
    userId: number
};
interface IForm {
    func: React.Dispatch<React.SetStateAction<FormData | undefined>>;
}
export function Form ({func}:IForm) {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    
    const onSubmit: SubmitHandler<FormData> = (data) => {
        func(data)
    };
   

    return(
        <>
            <form 
                onSubmit={handleSubmit(onSubmit)}
                className="flex w-full h-auto py-6 px-6 justify-evenly items-center bg-sky-950"
            >
                <div className="flex flex-1 flex-col gap-1">
                    <div className="flex flex-col h-20 gap-1">
                        <Label htmlFor={"userid"} >Id de usuário</Label>
                        <Input 
                            id="userid"
                            type={"number"} 
                            placeholder={"Ex: 00000"}
                            register={register("userId", {required: "A Id de usuário é obrigatório"})}
                        />
                        {errors.userId && <p className="text-red-500 text-sm">{errors.userId?.message}</p>}
                    </div>
                    <div className="flex flex-col h-20">
                        <Label htmlFor={"origin"} >Origin</Label>
                        <Input 
                            id="origin" 
                            type={"text"} 
                            placeholder={"Ex: Copacabana, Rio de Janeiro, RJ"}
                            register={register("origin", {required: "A origem é obrigatório"})}
                        />
                        {errors.origin && <p className="text-red-500 text-sm">{errors.origin?.message}</p>}
                    </div>
                    <div className="flex flex-col h-20">
                        <Label htmlFor={"destination"} >Destino</Label>
                        <Input 
                            id="destination" 
                            type={"text"} 
                            placeholder={"Ex: Barra da Tijuca, Rio de Janeiro, RJ"}
                            register={register("destination", {required: "O destino é obrigatório"})}
                        />
                        {errors.destination && <p className="text-red-500 text-sm">{errors.destination?.message}</p>}
                    </div>
                </div>
                <div className="py-6 w-auto h-full flex flex-1 flex-col items-end justify-end gap-2">
                    <Button type="submit" labelName="Escolha o(a) motorista" />
                </div>
            </form>
        </>
    )
}