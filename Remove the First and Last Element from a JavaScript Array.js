const firstandendremove = arr => {
    if (arr.length >= 6) {
        return arr.slice(1, -1);
    } else {
        return ('yall need more Practice')
    }
}

firstandendremove[1, 2, 3, 4, 5, 6,]




console.log(firstandendremove([1, 2, 3, 4, 5, 6, 7]))


const removeFirstAndLast = arr => {
    if (arr.length >= 3) {
        return arr.slice(1, -1);
    } else {
        throw new error("You need at least three elements in the array");
    }
};

removeFirstAndLast([1, 2, 3, 4]); //?
// removeFirstAndLast(["<h1>", "Some content", "</h1>"]); //?
// removeFirstAndLast(["Some content", "</h1>"]); //?