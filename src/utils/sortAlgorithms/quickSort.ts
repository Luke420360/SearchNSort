import Data, { Column } from "../../types/Data"
import swap from "./swap";

const partition = (data: Data[], left: number, right: number, column: Column) => {
    const pivot = data[Math.floor((right + left) / 2)];
    let i = left;
    let j = right;

    while(i <= j) {

        while(data[i][column] < pivot[column]) {
            i++;
        }

        while(data[j][column] > pivot[column]) {
            j--;
        }

        if(i <= j) {
            swap(data, data[i], data[j]);
            i++;
            j--;
        }
    }
    return i;
}

const quickSort = (data: Data[], left: number, right: number, column: Column): Data[] => {
    let index;
    const newData = [...data];

    if(newData.length > 1) {
        index = partition(newData, left, right, column);

        if(left < index - 1) {
            quickSort(newData, left, index -1, column);
        }

        if( index < right) {
            quickSort(newData, index, right, column);
        }
    }
    return newData;
}

export default quickSort;