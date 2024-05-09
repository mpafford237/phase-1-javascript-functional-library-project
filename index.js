function myEach(collection, callback) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            callback(collection[i], i, collection);
        }
    } else {
        for (let key in collection) {
            callback(collection[key], key, collection);
        }
    }
    return collection;
}

function myMap(collection, callback) {
    const newArray = [];
    myEach(collection, (value, key, coll) => {
        newArray.push(callback(value, key, coll));
    });
    return newArray;
}

function myReduce(collection, callback, acc) {
    let initializing = acc === undefined;
    myEach(collection, (value, key, coll) => {
        if (initializing) {
            acc = value;
            initializing = false;
        } else {
            acc = callback(acc, value, key, coll);
        }
    });
    return acc;
}

function myFind(collection, predicate) {
    for (let key in collection) {
        if (predicate(collection[key])) {
            return collection[key];
        }
    }
    return undefined;
}

function myFilter(collection, predicate) {
    const filtered = [];
    myEach(collection, (value) => {
        if (predicate(value)) {
            filtered.push(value);
        }
    });
    return filtered;
}

function mySize(collection) {
    return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
}

function myFirst(array, n) {
    return n === undefined ? array[0] : array.slice(0, n);
}

function myLast(array, n) {
    return n === undefined ? array[array.length - 1] : array.slice(-n);
}

function myKeys(object) {
    return Object.keys(object);
}

function myValues(object) {
    return Object.values(object);
}
