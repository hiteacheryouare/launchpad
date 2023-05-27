import { encode } from 'js-base64';
import { Data } from './types';

export const encodeData = (data: Data) => {
	let encodedString = encode(JSON.stringify(data));
	while (encodedString.endsWith('=')) {
		encodedString = encodedString.slice(0, -1);
	}
	while (encodedString.includes("/")) {
		encodedString = encodedString.replace("/", "");
	}
	return encodedString;
};
export default encodeData;
