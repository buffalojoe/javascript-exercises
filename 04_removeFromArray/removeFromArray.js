const removeFromArray = function(array, ...inputs) {
    
    for (let input of inputs) {
        if (array.includes(input)) {
            do {
                array.splice(array.indexOf(input), 1);
            } while (array.includes(input));
        }       
    }
       
    console.log(array);
    return array;
    
};

removeFromArray([1, 3, 3, 5], 1, 5);
// Do not edit below this line
module.exports = removeFromArray;