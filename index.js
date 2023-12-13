const data = [[{name: 'John', age: 25}, {name: 'Jane', age: 30}], [{name: 'Jack', age: 20}, {name: 'Jill', age: 22}]];

const names = data.flatMap(innerArray => innerArray.map(obj => obj.name));

console.log(names);
// Output: ['John', 'Jane', 'Jack', 'Jill']
