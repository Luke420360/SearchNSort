import Data from "../../types/Data";

function swap(array: Data[], value1: Data, value2: Data) {
    try {
        const value1Index = array.indexOf(value1);
        const value2Index = array.indexOf(value2);
        array[value1Index] = value2;
        array[value2Index] = value1;
    } catch (error) {
        console.log("Error swaping values in array");
    }
}

export default swap;