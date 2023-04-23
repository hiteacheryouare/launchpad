'use client'
import { useSearchParams } from "next/navigation";
export default function View() {
    const params = useSearchParams();
    const name = params.get("name");
    return (
        <div>
            Hello, {name || "World"}!
        </div>
    )
}