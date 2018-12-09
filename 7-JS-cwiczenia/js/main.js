// 1 rozwiazanie

// var arr = Array('11','22','13','13','4','78','33','1','1'),
// biggest = -Infinity,
// next_biggest = -Infinity;

// for (var i = 0, n = arr.length; i < n; ++i) {
//     var nr = +arr[i]; //

//     if (nr > biggest) {
//         next_biggest = biggest; 
//         biggest = nr;
//     } else if (nr < biggest && nr > next_biggest) {
//         next_biggest = nr; 
//     }
// }

// console.log(next_biggest);

// 2 rozwiązanie


// function Second_Greatest_Lowest(arr_num)
// {
//   arr_num.sort(function(x,y)
//            {
//            return x-y;
//            });
//   var uniqa = [arr_num[0]];
//   var result = [];
  
//   for(var j=1; j < arr_num.length; j++)
//   {
//     if(arr_num[j-1] !== arr_num[j])
//     {
//       uniqa.push(arr_num[j]);
//     }
//   }
//     result.push(uniqa[1],uniqa[uniqa.length-2]);
//   return result.join(',');
//   }

// console.log(Second_Greatest_Lowest([11,22,13,4,78,1,1,1]));

// 3 rozwiązanie


// getSecondLargest = (array) => {
//     // sortujemy
//     let sortedArray = array.sort((a, b) => {
//         return b - a;
//     });
// // filtrujemy
// let filterArray = sortedArray.filter((a, b, tablica) => {
//     return tablica.indexOf(a) === b;
// });
//         return filterArray[1];
// }

// getSecondLargest([11,22,13,4,78,1,1,1]);

// 4 zadanie

// let array = [1, 2, 3, 4].map(number => {
//     return number * number;

// });

// console.log(array);

// 4.1 zadanie

let example = [1, 2, 3, 4].forEach(element => {
    element = Math.pow(element, 2);
    console.log(element); 
})
