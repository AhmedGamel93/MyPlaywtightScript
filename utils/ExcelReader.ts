import * as XLSX from 'xlsx';
import path from 'path';


export type LoginData  = {
  username : string , 
  password : string,
  expected : string,
  run : string
}

export function readExcelFile(filePath: string, sheetName : string):LoginData [] {
  const fullPath = path.resolve(filePath);
  const workbook = XLSX.readFile(fullPath);
  const sheet = workbook.Sheets[sheetName];
  if (!sheet) {
    return [];
  }
  const data: LoginData[] = XLSX.utils.sheet_to_json<LoginData>(sheet);
  return data;

  

}