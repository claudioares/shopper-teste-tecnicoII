import { UseFormRegisterReturn } from "react-hook-form";

interface IInputProps {
  type: string;
  placeholder: string;
  id: string;
  register?: UseFormRegisterReturn;
  value?: string
}


export function Input ({type, placeholder, id, register, value}:IInputProps) {
    return(
        <>
            <div>
                <input 
                    type={type} 
                    placeholder={placeholder} 
                    id={id}
                    {...register}
                    className={`
                        py-1 px-4  w-60 rounded-md placeholder:text-gray-500
                        focus:outline-none  focus:border-green-700 focus:ring-2 focus:ring-green-700 
                        transition text-gray-900
                        
                        sm:w-80

                    `}
                    value={value}
                />
            </div>
        </>
    )
}
