let collection = [];

// Write the queue functions below.
// Do not use built-in Array Methods.

function print() {
    return collection;
}

function enqueue(element) {
    collection[collection.length] = element;
    return collection;
}

function dequeue() {
    let dequeuedCollection = [];
    for(let i = 1; i < collection.length; i++) {
        dequeuedCollection[dequeuedCollection.length] = collection[i];
    }

    collection = dequeuedCollection
    return dequeuedCollection;
}

function front() {
    return collection[0];
}

function size() {
    return collection.length;
}

function isEmpty() {
    console.log(collection);
    if(collection.length == 0) {
        return true;
    } else {
        return false;
    }
}

module.exports = {
    collection,
    print,
    enqueue,
    dequeue,
    front,
    size,
    isEmpty
};