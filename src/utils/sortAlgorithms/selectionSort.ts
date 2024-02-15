import Data, { Column } from "../../types/Data";
import swap from "./swap";

const selectionSort = (data: Data[], column: Column): Data[] => {
    const newData = [...data];
    for (let i = 0; i < data.length; i++) {
        const current = newData[i];
        let currentLowest = newData[i];

        for (let j = i +1; j < data.length; j++) {
            const next = newData[j];

            if(currentLowest[column] > next[column]) currentLowest = next;
        }

        swap(newData, current, currentLowest);
    }
    return newData;
}

export default selectionSort;