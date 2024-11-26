import { ReactNode } from "react"

type SubContainerProps = {
    children: ReactNode
    variant?: string
}
export function SubContainer ({children, variant}:SubContainerProps) {
    return (
        <>
            <div className={`
                control_scroll flex flex-col gap-4 
                justify-between w-full min-h-96 py-6 
                px-6  bg-sky-950 ${variant}
            `}>
                {children}
            </div>
        </>
    )
}