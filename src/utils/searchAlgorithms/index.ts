import Data, { Column } from "../../types/Data";
import SearchAlgorithm from "../../types/SearchAlgorithm";
import linearSearch from "./linearSearch";

function searchData(data: Data[], column: Column, searchAlgorithm: SearchAlgorithm, searchParam: string, strict: boolean) {
    let searchedData: Data[];
    const startTime = performance.now();
    switch(searchAlgorithm) {
        case "LinearSearch": searchedData =  linearSearch(data, column, searchParam, strict)
        break;
        case "BinarySearch": searchedData = data;
    }
    const endTime = performance.now();
    const duration = endTime - startTime;
    console.log("SearchDuration:", duration);
    return searchedData
}

export default searchData;