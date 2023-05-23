import pkg from '../../package.json';

const year = new Date().getFullYear();

export const name = 'Launchpad';
export const description = 'Launch your social media presence to the moon in no time.';
export const { version } = pkg;
export const url = 'https://launchpadapp.vercel.app';
export const parentCompany = 'Launchpad Labs';
export const banner = `
******************************
${name} v${version}
Copyright (c) 2023-${year}, 
${parentCompany}, 
Ryan Mullin, 
and contributors
******************************
`;
