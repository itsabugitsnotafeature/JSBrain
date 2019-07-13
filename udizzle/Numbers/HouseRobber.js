/* 
    Source : http://www.crazyforcode.com/house-robber-dynamic-programming/

*/

let conductRobbery = () => {
    debugger
    let houses = [1, 25, 1, 1, 24, 55, 77, 1, 4, 76, 43, 999];
    let timesProfit = 2;
    
    let loot = [];
    
    let maxHouse = houses[0];
    let maxHouseIndex = 0;
    
    let minHouse = houses[0];
    let minHouseIndex = 0;
    
    // Find Max Value House
    for( let i = 0 ; i < houses.length ; i++ ) {
        if(houses[i] > maxHouse){
            maxHouse = houses[i];
            maxHouseIndex = i;
        }
        if(houses[i] < minHouse){
            minHouse = houses[i];
            minHouseIndex = i;
        }
    }
    
    loot.push(maxHouse);
    let goinUp = maxHouseIndex + 2 ;
    let goinLo = maxHouseIndex - 2;
    
    // Add Lootable neighborhood to the potential loot list
    while( (goinUp < houses.length) || (goinLo >= 0) ){
        if (goinUp < houses.length) {
            /* 
                add to LOOT array
            */
            loot.push(houses[goinUp]);
            // console.log(goinUp);
            goinUp += 2;
        }
        if (goinLo >= 0) {
            loot.push(houses[goinLo]);
            // console.log(goinLo);
            goinLo -= 2;
        }   
    }

    // Traverse through Loot List to remove less lucrative houses
    /* 
        Option 1:
            Sort array 
            Splice off from point where drop % is less than 2 times
        Option 2:
            create newLoot List 
            add maxHouse to newLoot
            Traverse and calc %drop from max vaue
                if % > reasonable limit
                    add house to newLoot
    */
    return loot;
}    

console.log(conductRobbery());



