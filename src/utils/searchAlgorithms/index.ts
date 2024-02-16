import Data, { Column } from "../../types/Data";
import SearchAlgorithm from "../../types/SearchAlgorithm";
import sortData from "../sortAlgorithms";
import binarySearch from "./binarySearch";
import linearSearch from "./linearSearch";

function searchData(data: Data[], column: Column, searchAlgorithm: SearchAlgorithm, searchParam: string, strict: boolean) {
    let searchedData: Data[];
    switch(searchAlgorithm) {
        case "LinearSearch": searchedData =  linearSearch(data, column, searchParam, strict)
        break;
        case "BinarySearch": {
            let newData = [...data];
            newData = sortData("QuickSort", data, column);
            searchedData = binarySearch(newData, column, searchParam, strict);
        }
    }
    
    return searchedData
}

export default searchData;