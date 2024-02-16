import Data, { Column } from "../../types/Data";

const binarySearch = (data: Data[], column: Column, searchParam: string, strict: boolean): Data[] => {
    let left = 0;
    let right = data.length -1;
    if(strict) console.log("NAdann")
    while(left <= right) {
        const mid = Math.floor((left + right) / 2);
        const comparisonResult = data[mid][column].toString().localeCompare(searchParam);
        
        if(comparisonResult === 0) {
            return [data[mid]]; // Wenn das Element gefunden wird, gib ein Array mit dem gefundenen Element zurück
        } else if (comparisonResult < 0) { // Wenn das gesuchte Element alphabetisch nach dem mittleren Element liegt
            left = mid + 1; // Verschiebe den linken Index nach rechts
        } else { // Wenn das gesuchte Element alphabetisch vor dem mittleren Element liegt
            right = mid - 1; // Verschiebe den rechten Index nach links
        }
    }
    return [];
}

export default binarySearch;