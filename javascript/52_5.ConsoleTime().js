// console.time() = tool that allows you to measure the time it tkes
//                  for a section of code or process to execute
//                  Great for identifying performance "bottlenecks"

// console.time("label");
// console.timeEnd("label");

console.time("test");

for(let i = 0; i < 100000; i++){
    // do some code
}

console.timeEnd("test");

function loadData(){

    console.time("loadData"); 
    for(let i = 0; i < 1000000000; i++){
        // pretend to load data
    }
    console.timeEnd("loadData");
}

function processData(){

    console.time("processData"); 
    for(let i = 0; i < 1000000; i++){
        // pretend to load data
    }
    console.timeEnd("processData");
}

loadData();
processData();