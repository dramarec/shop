// // 3 per  page
// let requestFilms = [
//     { id: 1, name: 'Film_1' },
//     { id: 2, name: 'Film_2' },
//     { id: 3, name: 'Film_3' },
//     { id: 4, name: 'Film_4' },
//     { id: 5, name: 'Film_5' },
//     { id: 6, name: 'Film_5' },
//     { id: 7, name: 'Film_5' },
//     { id: 8, name: 'Film_5' },
//     { id: 9, name: 'Film_5' },
//     { id: 10, name: 'Film_5' },
// ]

// requestFilms.

// let dataToPagination = [...requestFilms];
// let pages = requestFilms.length / 3;
// if ((pages % 3) == 0) {
//     pages = Math.floor(requestFilms.length / 3);
// } else {
//     pages = Math.ceil(requestFilms.length / 3);
// }


// console.log(pages);


// // let [chunk_1, chunk_2, chunk_3, ...restArr] = requestFilms;

// // console.log(chunk_1);
// // console.log(chunk_2);
// // console.log(chunk_3);

// // console.log('restArr', restArr);

// // let [chunk_4, chunk_5, chunk_6, ...restArr] = restArr;



// function chunkArr(arr) {
//     let [chunk_1, chunk_2, chunk_3, ...restArr] = arr;
//     // return {
//     //     chunk_1,
//     //     chunk_2,
//     //     chunk_3,
//     //     restArr
//     // }
//     // console.log(chunk_1)

//     let chunk_set_1 = [];
//     chunk_set_1.push(chunk_1, chunk_2, chunk_3);

//     // console.log(chunk)
//     return {
//         chunk_set_1: chunk_1, chunk_2, chunk_3,
//         restArr
//     }
// }

// // let chunk_set_1 = chunkArr(requestFilms);
// // let chunk_set_2 = chunkArr(chunk_set_1.restArr);

// console.log(chunkArr(requestFilms));
// // console.log(chunkArr(requestFilms.restArr));
// // console.log(chunk_set_1.restArr);



Object.defineProperty(Array.prototype, 'chunk', {
    value: function (chunkSize) {
        var temporal = [];
        for (var i = 0; i < this.length; i += chunkSize) {
            temporal.push(this.slice(i, i + chunkSize));
        }
        return temporal;
    }
});
// Split in group of 3 items
var result = [{ id: 1, name: 'Film_1' },
{ id: 2, name: 'Film_2' },
{ id: 3, name: 'Film_3' },
{ id: 4, name: 'Film_4' },
{ id: 5, name: 'Film_5' },
{ id: 6, name: 'Film_5' },
{ id: 7, name: 'Film_5' },
{ id: 8, name: 'Film_5' },
{ id: 9, name: 'Film_5' },
{ id: 10, name: 'Film_5' },].chunk(3);
// Outputs : [ [1,2,3] , [4,5,6] ,[7,8] ]
console.log(result[1]);

