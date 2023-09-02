"use client"

import { FileEditIcon, MoreHorizontalIcon, Trash2Icon } from "lucide-react";

import { useToast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


export function DataTableRowActions({ row }: { row: number }) {
    const { toast } = useToast();

    const updatePokemon = (row: number) => {
        // Add your api call
        toast({
            title: "Sucess",
            description: `Updated Pokémon: id ${row}`,
        })
    }

    const deletePokemon = (row: number) => {
        // Add your api call
        toast({
            title: "Sucess",
            description: `Deleted Pokémon: id ${row}`,
        })
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
                >
                    <MoreHorizontalIcon className="h-4 w-4" />
                    <span className="sr-only">Open menu</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[160px]">
                <DropdownMenuItem
                    onClick={() => updatePokemon(row)}
                >
                       <FileEditIcon width={14} height={14} />
                    Edit
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                    className="text-red-500 focus:text-red-500"
                    onClick={() => deletePokemon(row)}
                >
                    <Trash2Icon width={14} height={14} />
                    Delete
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}