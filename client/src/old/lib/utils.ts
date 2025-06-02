import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const formattedDate = (time: string) => {
    return new Date(time).toLocaleDateString("fr-FR", {
        day: "numeric",
        year: "numeric",
        month: "short",
    })

}

export const formatName = (name: string) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}