import { encode } from "js-base64";
import { Data } from "./types";

export const encodeData = (data: Data) => encode(JSON.stringify(data));
export default encodeData;