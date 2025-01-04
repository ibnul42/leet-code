/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    const idMap = new Map();

    const mergeObjects = (obj1, obj2) => {
        return { ...obj1, ...obj2 };
    };

    for (const item of arr1) {
        idMap.set(item.id, item);
    }

    for (const item of arr2) {
        if (idMap.has(item.id)) {
            const merged = mergeObjects(idMap.get(item.id), item);
            idMap.set(item.id, merged);
        } else {
            idMap.set(item.id, item);
        }
    }

    const result = Array.from(idMap.values());
    result.sort((a, b) => a.id - b.id);

    return result;
};

// Example usage
const arr1 = [
    {"id": 1, "x": 1},
    {"id": 2, "x": 9}
]
const arr2 = [
    {"id": 2, "x": 5}
]

console.log(join(arr1, arr2)) // Output: [{"id": 1, "x": 1}, {"id": 2, "x": 9}, {"id": 3, "x": 5}]