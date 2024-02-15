import Data, { Column } from "../../types/Data";
import swap from "./swap";

const bubbleSort = ( data: Data[], column: Column ): Data[] => {
    const newData = [...data];
    for (let i = newData.length; i > 0; i--) {
        for (let j = 0; j < i -1; j++) {
            const current = newData[j];
            const next = newData[j + 1];
            if (current[column] > next[column]) swap(newData, current, next)
        }
    }

    return newData;
}

export default bubbleSort;