/**
 * Created by student on 27/5/2016.
 */

console.log("codility")

//we want the count of multiplicate pairs
//N 0...100.000
//A: [0...1000]
//B: 0...999.999    divided by /1.000.000

var A = []
var B = []

/*A[0] = 0; B[0] = 500000;
A[1] = 1; B[1] = 500000;
A[2] = 2;B[2] = 0;
A[3] = 2;B[3] = 0;
A[4] = 3;B[4] = 0;
A[5] = 5;B[5] = 20000;*/

A[0] = 0; B[0] = 500000;
A[5] = 1; B[5] = 500000;
A[2] = 2;B[2] = 0;
A[3] = 2;B[3] = 0;
A[4] = 3;B[4] = 0;
A[1] = 5;B[1] = 20000;


var dividor = 1000000.0

function C(a, b) {
    return a + (b / dividor)
}

function isMultiplicative(c_p, c_q) {
    return (c_p * c_q) >= (c_p + c_q);
}


//var j = 0;

function solutionSimple(A, B) {

    var count = 0;
    var len = A.length

    for (var p = 0; p < len; p++) {

        var Cp = C(A[p], B[p])

        var startPos = p + 1;
        for (var q = startPos; q < len; q++) {
            console.log([p, q])

            var Cq = C(A[q], B[q])

            if (isMultiplicative(Cp, Cq)) {
                count += 1;
            } else {
                //just continue
            }
        }
    }

    return count;
}

function getC(A, B) {
    var c = []

    for(var i = 0; i< A.length; i ++) {
        c[i] = C(A[i], B[i])
    }

    c.sort()

    return c
}

/**
 * http://stackoverflow.com/questions/25750240/how-to-find-pairs-with-product-greater-than-sum
 * @param A
 * @param B
 * @returns {number}
 */
function oNsolution(A, B) {
    var result = 0;

    var C = getC(A, B)

    var len = C.length;

    if (len > 1)
    {
        var lo_index;
        var hi_index = len - 1;

        // Skip all C[i] less than 1
        for (lo_index = 0; lo_index < len; lo_index++)
        {
            if (C[lo_index] > 1)
                break;
        }

        while (hi_index > lo_index)
        {
            var v = C[hi_index] / (C[hi_index] - 1);

            while (lo_index < hi_index && C[lo_index] < v)
            {
                lo_index++;
            }

            if (lo_index == hi_index)
                break;

            result += (hi_index - lo_index);

            hi_index--;
        }
    }
    return result;
}

console.log("count: " + solutionSimple(A, B))

console.log(getC(A,B))

console.log("count O(N): " + oNsolution(A, B))