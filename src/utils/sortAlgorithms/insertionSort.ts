import Data, { Column } from "../../types/Data";

const insertionSort = ( data: Data[], column: Column ): Data[] => {
    const newData = [...data];

    for (let i = 1; i < newData.length; i++) {
        const key = newData[i];
        let j = i - 1;
    
        while(j >= 0 && newData[j][column] > key[column]){
            newData[j +1] = newData[j];
            j--;
        }
        newData[j +1] = key;
    }

    return newData;
}

export default insertionSort;