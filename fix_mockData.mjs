import fs from 'fs';
const data = fs.readFileSync('src/data/mockData.ts', 'utf8');

const regex = /\{\s*"id":\s*"english_u1",\s*"title":\s*"Aþama 1"[\s\S]*?(?=\{\s*"id":\s*"english_u2")/;

const newStr = '{ "id": "english_u1", "title": "Aþama 1", "description": "Temeller 1: Kelimeden Cümleye", "icon": "??", "color": "#58CC02", "levels": [ { "id": "eng_u1_l1", "name": "Kelime Öðrenimi", "icon": "??", "type": "lesson" }, { "id": "eng_u1_l2", "name": "Cümle Kurma", "icon": "??", "type": "lesson" }, { "id": "eng_u1_l3", "name": "Konuþma Pratiði", "icon": "???", "type": "lesson" }, { "id": "eng_u1_checkpoint", "name": "AI ile Rol Yapma", "icon": "??", "type": "story" } ] },\n      ';

const replaced = data.replace(regex, newStr);
fs.writeFileSync('src/data/mockData.ts', replaced);
console.log('done');
