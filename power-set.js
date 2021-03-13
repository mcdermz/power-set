function getStrategyPowerSet(strats) {
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
    console.log('results: ', results);
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

// const strategies = ["a", "b", "c", "d"];

// const expected = [
//     "a,b,c,d",

//     "a,b,c",
//     "a,b,d",
//     "a,c,d",
//     "b,c,d",

//     "a,b",
//     "a,c",
//     "a,d",
//     "b,c",
//     "b,d",
//     "c,d",

//     "a",
//     "b",
//     "c",
//     "d",
// ];
const strategies = ["recently_viewed_snowplow_mvp", "also_carted_graph", "fbt_similar", "top_hits_site_wide"];

const expected = [
    "also_carted_graph,fbt_similar,recently_viewed_snowplow_mvp,top_hits_site_wide",

    "also_carted_graph,fbt_similar,recently_viewed_snowplow_mvp",
    "also_carted_graph,fbt_similar,top_hits_site_wide",
    "also_carted_graph,recently_viewed_snowplow_mvp,top_hits_site_wide",
    "fbt_similar,recently_viewed_snowplow_mvp,top_hits_site_wide",

    "also_carted_graph,fbt_similar",
    "also_carted_graph,recently_viewed_snowplow_mvp",
    "also_carted_graph,top_hits_site_wide",
    "fbt_similar,recently_viewed_snowplow_mvp",
    "fbt_similar,top_hits_site_wide",
    "recently_viewed_snowplow_mvp,top_hits_site_wide",

    "also_carted_graph",
    "fbt_similar",
    "recently_viewed_snowplow_mvp",
    "top_hits_site_wide",
];
test(expected, getStrategyPowerSet(strategies))
