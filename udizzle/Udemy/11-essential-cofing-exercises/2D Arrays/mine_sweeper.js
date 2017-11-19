'use strict'

/* 
    Example: 
        mine_sweeper([[0,0], [0,1]], 3, 4) 
        i.e 
        Bombs = [
            [0,0], 
            [0,1]
        ]
        row = 3 
        col = 4

    Returns
    [
        [ -1, -1, 1, 0 ]
        [  2,  2, 1, 0 ]
        [  0,  0, 0, 0 ]
    ]

*/

let isMineAt = (arr, minesLoc) => {
    if (searchForArray(minesLoc, arr)) {
        return 1;
    } else {
        return 0;
    }

}

function searchForArray(haystack, needle) {
    var i, j, current;
    for (i = 0; i < haystack.length; ++i) {
        if (needle.length === haystack[i].length) {
            current = haystack[i];
            for (j = 0; j < needle.length && needle[j] === current[j]; ++j);
            if (j === needle.length)
                return true;
        }
    }
    return false;
}



let mine_sweeper = (bombs, num_rows, num_cols) => {
    let field = [];
    debugger
    // ADD MINES
    for (let i = 0; i < num_rows; i++) {
        let thisCol = [];
        for (let j = 0; j < num_cols; j++) {
            let isMine = false;
            bombs.forEach(element => {
                if (element[0] === i && element[1] === j) {
                    isMine = true;
                }
            });
            if (isMine) {
                thisCol.push(-1);
            } else {
                thisCol.push(0);
            }
        }
        field.push(thisCol);
    }

    // ADD MINE COUNTS
    for (let i = 0; i < num_rows; i++) {
        for (let j = 0; j < num_cols; j++) {
            if (field[i][j] === -1) {
                console.log("Mine Found at I => " + i + " / J => " + j);
                continue;
            } else {
                // field[i][j] = isMineAtNorth(i,j) + isMineAtSouth(i,j) + isMineAtEast(i,j) + isMineAtWest(i,j);
                field[i][j] = isMineAt([i, j + 1], bombs) +
                    isMineAt([i, j - 1], bombs) +
                    isMineAt([i + 1, j], bombs) +
                    isMineAt([i - 1, j], bombs) +
                    isMineAt([i + 1, j + 1], bombs) +
                    isMineAt([i + 1, j - 1], bombs) +
                    isMineAt([i - 1, j + 1], bombs) +
                    isMineAt([i - 1, j - 1], bombs);
            }
        }
    }
    return field;
}

let config1 = {
    bombs: [
        [0, 0],
        [0, 1]
    ],
    num_rows: 3,
    num_cols: 4
}

console.log(JSON.stringify(mine_sweeper(config1.bombs, config1.num_rows, config1.num_cols), null, 2));


// TODO : Implement CLICK and expose the connected cells