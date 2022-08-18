type Point = {
    x: number;
    y: number;
  };
   
  // Exactly the same as the earlier example
  function printCoord(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
  }
   
  // printCoord({ x: 200, y: 200 });

  interface Point1 {
    x: number;
    y: number;
  }
   
  function printCoord1(pt: Point1) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
  }
   
  // printCoord1({ x: 100, y: 100 });

  function identity<Type>(arg: Type): Type {
    return arg;
  }

  function identity1<Type>(arg: Type[]): Type[] {
    console.log(arg.length)
    return arg;
  }

  function loggingIdentity<Type>(arg: Array<Type>): Array<Type> {
    console.log(arg.length); // Array has a .length, so no more error
    return arg;
  }

  // console.log("ID " + loggingIdentity<string>(['Apple', 'Orange', 'Banana', 'chery']))


  identity<string>('test String')
  let myIdentity: <Type>(arg: Type) => Type = identity
  // myIdentity<string>('test String')
  identity<string>('test String')
  console.log(myIdentity)