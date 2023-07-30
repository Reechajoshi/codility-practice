// https://app.codility.com/c/run/training5JCXRQ-6QY/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // Implement your solution here

    const lenA = A.length;  // so we don't have to calculate length everytime
    if(lenA < 0 || lenA > 1000000) {
        throw new Error();
    }

    if(lenA < 1)  return 1;
    const sortedA = A.sort(function(a, b) {
        return a - b;
    });

    for(var arrCounter = 0; arrCounter < A.length; arrCounter++) {
        if(sortedA[arrCounter] !== arrCounter+1) {
            return arrCounter+1;
        }
    }

    return (sortedA[lenA-1] + 1);
}
