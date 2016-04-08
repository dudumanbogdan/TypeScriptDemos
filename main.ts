// tsc helloworld.ts
interface Person {
    fullName: string;
    age: number;
}

class HelloManager {
    name: string;
    sayHello() {
        console.log("Hi" + name);
    }
}

function sortByName(a:Person[]) {
    var result = a.slice(0);
    result.sort(
        (x,y) => {
        //function(x, y) {
        // return x.name.localCompare(y.name);
        return x.fullName.localeCompare(y.fullName);
    });
    
    return result;
}

sortByName([{fullName: "Joe", age: 42}]);