// 'use strict'

function callOne(timer) {
    console.log(arguments.callee.name + ":At callOne")
    return new Promise(function(resolve, reject){
        return setTimeout(function(){
            console.log(arguments.callee.name + ": Done with callOne one Brah!");
            resolve(timer);
        }, timer);
    });
}

function callTwo(timer) {
    console.log(arguments.callee.name + ":At callTwo")
    return new Promise(function(resolve, reject){
        return setTimeout(function(){
            console.log(arguments.callee.name + ": Done with callTwo one Brah!");
            resolve(timer);
        }, timer);
    });
}

function master() {
    console.log(arguments.callee.name + ":Starting MASTER !")
    let startTime;

    // console.log("\n\n\n")
    // console.log("SCENARIO 1: 1st START With Promise Chaining Example!")
    // startTime = Date.now();
    // callOne(3000).then(function(param){
    //     console.log( "1st END =>" + param);
    // }).then(function(){ 
    //     console.log("2nd START !")
    //     callTwo(5000).then((param)=>{
    //         console.log( "2nd END =>" + param);
    //         console.log( "\n\n Total RUNTIME =>" + ( (Date.now() - startTime)/1000 ));
    //     });
    // });

    console.log("\n\n\n")
    console.log("SCENARIO 2: Parallel Promises")
    startTime = Date.now();    
    Promise.all(
        callOne(3000).then(function(param){
            console.log( "1st END =>" + param);
        }),
        callTwo(5000).then((param)=>{
            console.log( "2nd END =>" + param);
            console.log( "\n\n Total RUNTIME =>" + ( (Date.now() - startTime)/1000 ));
        })
    )
    console.log(":LESSE HOW THIS DOES!")
}

master();