import Data, { Column } from "../../types/Data";
import SearchAlgorithm from "../../types/SearchAlgorithm";
import sortData from "../sortAlgorithms";
import binarySearch from "./binarySearch";
import linearSearch from "./linearSearch";

function searchData(data: Data[], column: Column, searchAlgorithm: SearchAlgorithm, searchParam: string, strict: boolean) {
    let searchedData: Data[];
    const startTime = performance.now();
    switch(searchAlgorithm) {
        case "LinearSearch": searchedData =  linearSearch(data, column, searchParam, strict)
        break;
        case "BinarySearch": {
            let newData = [...data];
            console.log("sort...");
            newData = sortData("QuickSort", data, column);
            console.log("search...");
            searchedData = binarySearch(newData, column, searchParam, strict);
            console.log("ready...")
        }
    }
    const endTime = performance.now();
    const duration = endTime - startTime;
    console.log("SearchDuration:", duration);
    return searchedData
}

export default searchData;