//Definition:-Filter out the object from the array whose id matches the id of object data.

let data = {
    completed: false,
    id: 258.17893760893185,
    text: "ffdddddddddd"
};



var arr = [
    { text: 'hhhhhhhhhhh', completed: false, id: 633.3054254537956 },
    { text: 'ffdddddddddd', completed: false, id: 258.17893760893185 },
    { text: 'wwwwwwwwwww', completed: false, id: 641.3958500980676 },
    { text: 'ggggg', completed: false, id: 49.8930117741847 },
    { text: 'ttttttttttttttttttt', completed: false, id: 384.2 },
];
// console.log(arr.slice(2));

const filteredArray = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === data.id) {
        console.log(arr[i]);
    }
    else{
        filteredArray.push(arr[i])
    }
}
////------------array.filter()---------////



//////////--------------array.slice()
////here i learned that 
 const sliceArr = arr.slice(2);
//console.log(sliceArr);

///////////------Splice--------///////
const spliceArr = arr.splice(1, 0, 'erererer');
console.log(spliceArr);

////------------ArrayFind

