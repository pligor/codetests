/**
 * Created by student on 27/5/2016.
 */

console.log("go!")

/*function generator(count: number) {

 }*/

function solution(A:number[]) {
    var n = A.length;   //get length
    var L = new Array(n + 1);   //one more array

    L[0] = -1;  //-1 the first element

    var i;

    for (i = 0; i < n; i++) {
        L[i + 1] = A[i];
    }

    var count = 0;

    var pos = (n % 2 === 0) ? Math.floor((n + 1) / 2) : Math.floor((n + 1) / 2) - 1;  //we only changed this line to account for different case for even and odd numbers
//console.log("pos: " + pos)
    var candidate = L[pos === 0 ? 1 : pos]; //never select the first

    for (i = 1; i <= n; i++) {
        if (L[i] == candidate)
            count = count + 1;
    }
    if ((count > pos) || pos === 0) //if pos == 0 then this is the only one
        return candidate;
    return (-1);
}

(function () {
    var test = "0 0 0 1 1".split(" ").map(Number)   //error case fixed
    var sol = solution(test)
    console.log(sol)
})();

(function () {
    var test = "0 0 1".split(" ").map(Number)   //error case fixed
    var sol = solution(test)
    console.log(sol)
})();

(function () {
    var test = [0]              //error case fixed
    var sol = solution(test)
    console.log(sol)
})();

(function () {
    var test = "0 1".split(" ").map(Number)
    var sol = solution(test)
    console.log(test + ": " + sol)
})()

var test2 = "0 0".split(" ").map(Number)
var sol2 = solution(test2)
console.log(sol2)

var test1 = "0 0 0 0 1 1 1 1 1 1".split(" ").map(Number)
var sol1 = solution(test1)
console.log(sol1)

//27% correct only
//This is where we are left. Not sure I agree with all the answers
/*
 Correctness tests
 ▶ simple1
 values from a continuous range ✔OK
 ▶ simple2
 0s/1s only ✘WRONG ANSWER
 got -1 expected 1
 1. 0.163 s WRONG ANSWER,  got -1 expected 1
 2. 0.162 s OK
 ▶ single
 one element ✔OK
 ▶ two_values
 two different values ✘WRONG ANSWER
 got -1 expected 1
 1. 0.158 s OK
 2. 0.163 s WRONG ANSWER,  got -1 expected 1
 ▶ extreme_big_values
 min/max values only ✘WRONG ANSWER
 got -1 expected 2147483647
 ▶ medium_1
 small sequence repeated many times ✘WRONG ANSWER
 got -1 expected 5
 ▶ medium_2
 no leader and small sequence with values from a continuous range ✘WRONG ANSWER
 got -1 expected 4
 ▶ cyclic_sequence
 no leader and small sequence repeated many times ✘WRONG ANSWER
 got -1 expected 55555
 ▶ medium_random
 random sequences ✘WRONG ANSWER
 got -1 expected 4
 ▶ large
 two different values, length = ~100,000 ✔OK
 ▶ large_range
 values from a continuous range, length = ~100,000 ✘WRONG ANSWER
 got -1 expected 2147483647
 */