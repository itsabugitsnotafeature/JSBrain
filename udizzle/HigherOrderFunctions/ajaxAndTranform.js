'use strict'
const fetch = require('node-fetch');
const INPUT_ENDPOINT = "https://api.myjson.com/bins/oxdix";
const TS_ENDPOINT = "https://api.myjson.com/bins/13lwj5";
const REQ_TYPE = 'GET';
/*
    let testData = [
        {
            "Timestamp": "1/10/17 0:00",
            "Plant1BranPercent": 15,
            "FryerTemp1": 141.1,
            "MoisturePercentage1": 2.67767,
            "FatPercentage1": 20.7775,
            "Plant1FlourAdded": 245.019,
            "Plant1WaterAdded": 68.9807,
            "Plant1MoistureContent": 14.4,
            "Plant1ProteinPercent": 8.8,
            "RollerSpeed1": 22.6,
            "Plant1WABS": 51.9,
            "BlockWeight1": 91.1899
        },
        {
            "Timestamp": "1/10/17 0:10",
            "Plant1BranPercent": 15,
            "FryerTemp1": 141.95,
            "MoisturePercentage1": 2.87344,
            "FatPercentage1": 20.4925,
            "Plant1FlourAdded": 246.205,
            "Plant1WaterAdded": 68.5983,
            "Plant1MoistureContent": 14.4,
            "Plant1ProteinPercent": 8.8,
            "RollerSpeed1": 22.55,
            "Plant1WABS": 51.9,
            "BlockWeight1": 91.3923
        },
        {
            "Timestamp": "1/10/17 0:20",
            "Plant1BranPercent": 15,
            "FryerTemp1": 143.75,
            "MoisturePercentage1": 2.91167,
            "FatPercentage1": 22.8215,
            "Plant1FlourAdded": 246.039,
            "Plant1WaterAdded": 68,
            "Plant1MoistureContent": 14.4,
            "Plant1ProteinPercent": 8.8,
            "RollerSpeed1": 22.65,
            "Plant1WABS": 51.9,
            "BlockWeight1": 91.6415
        },
        {
            "Timestamp": "1/10/17 0:30",
            "Plant1BranPercent": 15,
            "FryerTemp1": 144.3,
            "MoisturePercentage1": 2.97133,
            "FatPercentage1": 21.85,
            "Plant1FlourAdded": 246,
            "Plant1WaterAdded": 68,
            "Plant1MoistureContent": 14.4,
            "Plant1ProteinPercent": 8.8,
            "RollerSpeed1": 22.5,
            "Plant1WABS": 51.9,
            "BlockWeight1": 92.3875
        }
    ];
*/
/* 
        // Browser Implementation
    let myReq = new XMLHttpRequest();
    myReq.onreadystatechange = () =>{
        if((this.readyState === 4) && (this.status === 200)){
            extractTsData(myReq.responseText);
        }
    }
*/

fetch(INPUT_ENDPOINT).then((res) => {
    return res.json();
}).then((json) => {
    extractTsData(json);
});

let extractTsData = (data) => {
    let allKeys = Object.keys(data[0]);
    let timeTagIndex = allKeys.indexOf("Timestamp");
    allKeys.splice(timeTagIndex.index, 1);

    let tsTemplate = {
        tags: []
    }
    
    let tsObj = allKeys.map((eachKey)=>{
        let tagObj = {
            tagId: eachKey,
            data: null,
            errorCode: "0",
            errorMessage: "",
        };
        tagObj.data = data.reduce((prev, current, index, arr) => {
            let item = {
                ts: (new Date(current.Timestamp)).getTime(),
                v: current[eachKey],
                q: "1"
            };
            prev.push(item);
            return prev;
        }, []);
        tsTemplate.tags.push(tagObj)
    });
    console.log(JSON.stringify(tsTemplate, null, 2));
    return tsTemplate;
}
