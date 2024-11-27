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
                w-full h-auto py-6 
                md:px-6  bg-sky-950 ${variant}
            `}>
                {children}
            </div>
        </>
    )
}