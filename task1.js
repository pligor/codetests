console.log("task1")

//X integer
//A array (N integers)

//X==A[i]
//X!=A[i]

//K 0 ... N

//K = 0 no equal elements
//
//We want K which splits A
//before K we have equals to X
//from K and after we have NOT equals to X

function solution(X, A) {
    var len = A.length

    if (len > 0) {
        var curIndex = 0;

        for (var i = 0; i < len; i++) {
            if (A[i] === X) {
                //nop
            } else {
                curIndex += 1
            }
        }

        return (curIndex >= len) ? null : curIndex;
    } else {
        return null
    }
}

A = []
A[0] = 5
A[1] = 5
A[2] = 1
A[3] = 7
A[4] = 2
A[5] = 3
A[6] = 5
//right solution is: 4 //tested ok
console.log(
    solution(5, A) === 4
)

B = [5, 0, 3, 4, 2, 3, 0]
//right solution is: 6 //tested ok
console.log(
    solution(5, B) === 6
)

C = [2, 0, 5, 5, 2, 5, 0]
//right solution is: 4
console.log(
    solution(5, C) === 4
)

D = [2, 0, 5, 5, 2, 5, 5]
//right solution is: 3  //(3,5)
console.log(
    solution(5, D) === 3
)

E = [5]

console.log(
    solution(5, E) === 0
)

F = [0]

console.log(
    solution(5, E) === 0
)

G = [0, 1, 2, 3, 4, 0, 6]

console.log(
    solution(5, G) === null
)

H = []

console.log(
    solution(5, H) === null
)

console.log("starting creating big array")
I = []
for (var m = 0; m < 100000000; m++) {
    I[m] = parseInt(Math.random() * 10)
}
console.log("starting calculating")
var startTime = new Date().getTime()
console.log(
    solution(5, I)
)
var duration = new Date().getTime() - startTime;
console.log("duration for 100 million elements: " + duration) //258 msec