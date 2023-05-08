'use client';
import { useState } from "react";
import Link from "next/link";
import Navbar from "../../components/nav";
export default () => {
    const [id, setId] = useState<string>("");
    return (
        <>
        <div className="no-underline">
            <Navbar />
        </div>
            <h3 className="text-center p-4">
                Enter the ID of the card to view:
            </h3>
            <div className="flex content-center justify-center px-4">
                <input type="text" className="form-control" placeholder="Enter ID" onChange={(e) => setId(e.target.value)} />
            </div>
            <div className="flex content-center justify-center p-4">
                <Link href={`/view/${id}`}><button className="btn btn-primary">View</button></Link>
            </div>
        </>
    )
}