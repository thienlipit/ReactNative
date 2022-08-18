// Exactly the same as the earlier example
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
function printCoord1(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
// printCoord1({ x: 100, y: 100 });
function identity(arg) {
    return arg;
}
function identity1(arg) {
    console.log(arg.length);
    return arg;
}
function loggingIdentity(arg) {
    console.log(arg.length); // Array has a .length, so no more error
    return arg;
}
// console.log("ID " + loggingIdentity<string>(['Apple', 'Orange', 'Banana', 'chery']))
identity('test String');
var myIdentity = identity;
// myIdentity<string>('test String')
identity('test String');
console.log(myIdentity);
