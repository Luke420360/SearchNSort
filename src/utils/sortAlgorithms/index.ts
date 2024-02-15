import Data, { Column } from "../../types/Data";
import SortAlgorithm from "../../types/SortAlgorithm";
import bubbleSort from "./bubbleSort";
import insertionSort from "./insertionSort";
import quickSort from "./quickSort";
import selectionSort from "./selectionSort";

function sortData(sortAlgorithm: SortAlgorithm, data: Data[], column: Column): Data[] {
    let sortedData;
    const startTime = performance.now();
    switch (sortAlgorithm) {
        case "BubbleSort": sortedData = bubbleSort(data, column)
            break;
        case "SelectionSort": sortedData = selectionSort(data, column)
            break;
        case "InsertionSort": sortedData = insertionSort(data, column)
            break;
        case "QuickSort": sortedData = quickSort(data, 0, data.length - 1, column)
    }

    const endTime = performance.now();
    const duration = endTime - startTime;
    console.log("SortDuration: ",duration);
    return sortedData;
}

export default sortData;