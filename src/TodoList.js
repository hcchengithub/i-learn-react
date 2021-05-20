// import React from 'react'
import Todo from './todo'

// 改寫來觀察 map 產生的東西
export default function TodoList({todos}) {
    var components = todos.map(todo => (<Todo todo={todo} />));
    debugger;
    return components
}

// 原來的寫法
// export default function TodoList({todos}) {
//     return (
//         todos.map(todo => {
//             return <Todo todo={todo} />
//         })
//     )
// }

/*
	Understanding the JavaScript Array.map() function
	> dropall <js>
	a = [1,2,3];  // a is an array  
	b = a.map(x => x*x);  // a.map 套用 lambda to all cells of the array
	push(a)
	push(b)
	</js> .s
	      0: 1,2,3 (array)
	      1: 1,4,9 (array)  // 結果是泡製過的新 array 
	 OK 
*/

