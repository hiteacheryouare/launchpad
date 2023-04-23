import { decodeData } from "@typescript/decode";
export default function View({ params }: {params: {data: string}}) {
    const data = decodeData(params.data);
    return (
        <div>
            Hello, {data.name}, 
        </div>
    )
};