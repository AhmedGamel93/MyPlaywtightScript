import path from 'path'
import fs from 'fs'
import { readCSVFile } from '../utils/csvReader'
import { readExcelFile } from '../utils/ExcelReader'
import { error } from 'console';

export function readData(filepath : string , sheetName? : string)
{
    const ext = path.extname(filepath).toLowerCase();

    switch(ext)
    
    {
     case ".csv" :
     return  readCSVFile(filepath);

     case ".xlsx" :

     return readExcelFile(filepath ,sheetName = 'Sheet1')

     case ".json" :
        const JSONData = fs.readFileSync(filepath , 'utf-8')

        return JSON.parse(JSONData);

        default : 
        throw new Error(`Unspported file type ${ext}`);
    }
    
}