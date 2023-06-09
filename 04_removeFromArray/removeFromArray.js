const removeFromArray = function(items, ...args) {
    for (const arg of args) {
        while (items.includes(arg)) {
            items.splice((items.indexOf(arg)),1)
        }
    }
    return items
};

// Do not edit below this line
module.exports = removeFromArray;
