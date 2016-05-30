/**
 * Created by student on 27/5/2016.
 */

class IntListNode {
    value:number

    next:IntListNode

    constructor(val: number) {
        this.value = val
    }
}

class IntList {
    head:IntListNode = null

    static createNum(count = 0):IntList {
        var list = new IntList()

        //let curNode:IntListNode = null

        function rec(count, curNode: IntListNode = null) {
            if(count == 0) {
                return;
            } else {
                if(list.head) {
                    curNode.next = new IntListNode(count)

                    rec(count-1, curNode.next)
                } else {
                    list.head = new IntListNode(count)

                    rec(count-1, list.head)
                }
            }
        }

        rec(count)

        /*for (let i = 0; i < count; i++) {
            if (list.head) {
                curNode = new IntListNode()
                list.head = curNode
            } else {
                if (curNode) {
                    curNode.next = new IntListNode()
                    curNode = curNode.next
                } else {
                    throw new Error("what the fuck")
                }
            }

            curNode.value = i
        }*/

        return list
    }
}

function solution(L:IntListNode) {
    let count = 0

    let curNode = L

    while (curNode != null) {
        count += 1

        curNode = curNode.next
    }

    return count
}


let mylist = IntList.createNum(0)
console.log(mylist)
console.log(solution(mylist.head))

let mylist1 = IntList.createNum(1)
console.log(mylist1)
console.log(solution(mylist1.head))

let mylist2 = IntList.createNum(2)
console.log(mylist2)
console.log(solution(mylist2.head))

let mylist3 = IntList.createNum(3)
console.log(mylist3)
console.log(solution(mylist3.head))

let mylist5000 = IntList.createNum(5000)
console.log(solution(mylist5000.head))