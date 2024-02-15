import Data, { Column } from "../../types/Data";

const linearSearch = (data: Data[], column: Column, searchParam: string, strict: boolean) => {
    const newData: Data[] = [];
    if(strict) {
        for (let index = 0; index < data.length; index++) {
            const element = data[index];
            if(element[column].toString() === searchParam) {
                newData.push(element);
            }
        }
    }
    else {
        for (let index = 0; index < data.length; index++) {
            const element = data[index];
            if(element[column].toString().includes(searchParam)) {
                newData.push(element);
            }
        }
    }
    return newData;
}

export default linearSearch;