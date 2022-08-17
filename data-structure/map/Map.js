const map = new Map([['ahmed', 123], ['mohamed', 1231]])

console.log(map);

map.set('Something', 'something value');

console.log(map);

console.log(map.get('ahmed'));

console.log(map.has('mohamed'));

console.log(map.size);

map.set('Latest', 'Latest Value');

console.log(map.delete('ahmed'));

console.log(map.get('Latest'));

console.log('##########################')

for(value of map) {
    console.log(`${value}`);
}