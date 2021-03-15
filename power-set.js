// this solution is derived from an answer in this thread: https://codereview.stackexchange.com/questions/7001/generating-all-combinations-of-an-array
function getPowerSet(strats) {
    var fn = function (active, rest, a) {
        if (!active && !rest.length)
            return;
        if (!rest.length) {
            a.push(active);
        } else {
            fn((active.length ? active + "," : active) + rest[0], rest.slice(1), a);
            fn(active, rest.slice(1), a);
        }
        return a;
    }
    const results = fn("", strats, [])

    return results;
}


function test(expected, actual) {
    let success = false;
    for (let i=0; i < expected.length; i++) {
        success = expected[i] === actual[i];
    }

    if (success && expected.length === actual.length) {
        console.log("success!");
    } else {
        console.log('actual: ', actual);
        console.log("---------------------");
        console.log('expected: ', expected);
    }
}

const strategies = ["a", "b", "c", "d"];

const expected = [
    "a,b,c,d",

    "a,b,c",
    "a,b,d",
    "a,c,d",
    "b,c,d",

    "a,b",
    "a,c",
    "a,d",
    "b,c",
    "b,d",
    "c,d",

    "a",
    "b",
    "c",
    "d",
];

test(expected, getPowerSet(strategies))
