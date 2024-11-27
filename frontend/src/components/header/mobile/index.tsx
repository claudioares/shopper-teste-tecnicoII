import { useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export function HeaderMobile () {
  const location = useLocation().pathname;

    return(
        <>
            <div>
                <DropdownMenu>
                <DropdownMenuTrigger className="bg-green-900 px-8 rounded-sm py-1 text-sm">
                    Menu
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <a href="/" className={`hover:text-green-400 transition ${location === '/' && "text-green-500"}`}>
                            Home
                        </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <a href="destinations" className={`hover:text-green-400 transition ${location === '/destinations' && "text-green-500"}`}>
                            Destinos
                        </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <a href="about" className={`hover:text-green-400 transition ${location === '/about' && "text-green-500"}`}>
                            Sobre
                        </a>
                    </DropdownMenuItem>
                </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </>
    )
}