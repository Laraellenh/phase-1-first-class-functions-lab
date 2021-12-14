// Code your solution in this fconst returnFirstTwoDrivers = (array) => {
//     const returnFirstTwoDrivers = (array) => {
//         return array.slice(0,2);
// };

// const returnLastTwoDrivers = (array) => {

//     return array.splice(-2);
// };

function returnFirstTwoDrivers(array){
    return array.slice(0,2);
}

    function returnLastTwoDrivers(array){
        return array.slice(-2);
    }
    const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (fareMultiplier) {
    return function(value) {
        return fareMultiplier * value;
    }
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (array, selectionType) =>
{return selectionType(array);}

