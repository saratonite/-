
/**
 * Get uniqu items from an array of objects (ES6)
 */
let data = [{id:1, v:1},{ id:1, v:1}, {id:2,v:2},{id:1,v:2}]

var result = data.reduce((unique, o) => {
    if(!unique.find(obj => obj.id === o.id && obj.v === o.v)) {
    unique.push(o);
    }
    return unique;
},[]);


console.log(result);