import fs from 'fs';

// Lee el contenido del archivo JSON
const rawData = fs.readFileSync('./dictionaries/es.json');
const jsonData = JSON.parse(rawData.toString());

export type JSONKeys = keyof typeof jsonData;

export interface DictInterface extends Record<JSONKeys, typeof jsonData[keyof typeof jsonData]> {}