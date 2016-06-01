/**
 * Created by student on 27/5/2016.
 */

//N integers

//triplet: (P Q R)

//A[P], A[P+1] ... A[Q] decreasing

//A[Q], A[Q+1] ... A[R] increasing


//find deepest pit

var A = []

A[0] = 0
A[1] = 1
A[2] = 3
A[3] = -2
A[4] = 0
A[5] = 1
A[6] = 0
A[7] = -3
A[8] = 2
A[9] = 3

console.log(A)

//pit that is deepest

//start from first element and go deep (decrease)
//and then increase, as you increase, count the depth,
//keep the depthm and the three numbers

//next as you decrease if smaller than max depth then go to next (from the minimum found)

//if the depth x2 (yes twice) is larger than the remaining items in the array then quit

function solution(array) {
    var curDepth = -1
    var goDeepDepth = -1

    //var curTriplet: [number, number, number] = [-1,-1,-1]  //invalid
    var curP = -1
    var curQ = -1
    var curR = -1
    var curStep = -1

    var bestDepth = -1
    var bestP = -1
    var bestQ = -1
    var bestR = -1
    var bestStep = -1

    function makeCurrentPitBest() {
        //console.log("makeCurrentPitBest")
        //console.log(curR)

        bestP = curP
        bestQ = curQ
        bestR = curR
    }

    var i = 0;

    var current = function () {
        return i in array ? array[i] : null
    }

    var next = function () {
        return (i + 1) in array ? array[i + 1] : null
    }

    function check() {
        return (current() !== null) && (next() !== null) && (typeof current() != "undefined") && (typeof next() != "undefined")
    }


    function skipRemainingInClimbing() {
        while (check() && (current() < next())) {
            i = i + 1
        }
    }

    function goDeep() {
        curP = i

        while (check() && (current() > next())) {
            i = i + 1
        }

        curQ = i
        //console.log(curQ)

        //console.log(array[curP])
        //console.log(array[curQ])

        return curP === curQ ? -1 : array[curP] - array[curQ]
    }

    //suppose you have the go deep depth
    function climb() {
        curDepth = -1

        //console.log("curP: " + curP)
        //console.log("curQ: " + curQ)
        //console.log("current: " + current())
        //console.log("next: " + next())

        var qValue = array[curQ]

        while (check() && (current() < next())) {
            //console.log("mpainw")
            //console.log("curDepth")
            //console.log(curDepth)

            curDepth = next() - qValue

            i = i + 1

            if (curDepth >= goDeepDepth) {
                curDepth = goDeepDepth
                break;
            }
        }

        skipRemainingInClimbing()

        curR = i

        return curQ === curR ? -1 : curDepth
    }

    var len = array.length

    while (true) {
        goDeepDepth = goDeep()

        curDepth = climb()

        /*if (goDeepDepth > bestDepth) {
            bestDepth = goDeepDepth
            makeCurrentPitBest()

            skipRemainingInClimbing()
        } else {
            curDepth = climb()

            if (curDepth > bestDepth) {
                bestDepth = curDepth
                makeCurrentPitBest()
            }
        }*/

        if (curDepth > bestDepth) {
            bestDepth = curDepth
            makeCurrentPitBest()
        }

        curStep = Math.min(curQ - curP, curR - curQ)
        if(curStep > bestStep) {
            bestStep = curStep
        }

        console.log("curR: "+ curR)

        if (((bestStep * 2) >= (len - curR + 1)) ||    //it is not the best depth it count something else
            (i + 1 == len)) {
            break;
        }

        //i = i + 1

        //break;
    }

    //console.log(goDeepDepth)

    console.log(bestP)
    console.log(bestQ)
    console.log(bestR)

    return bestDepth;
    /*//goDeep()
     console.log(goDeepDepth)
     console.log(i)

     climb()
     console.log(i)

     console.log(curP)
     console.log(curQ)
     console.log(curR)
     console.log(curDepth)*/
}

console.log(
    solution(A)
)

//cover corner cases