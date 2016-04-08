var HelloManager = (function () {
    function HelloManager() {
    }
    HelloManager.prototype.sayHello = function () {
        console.log("Hi" + name);
    };
    return HelloManager;
}());
function sortByName(a) {
    var result = a.slice(0);
    result.sort(function (x, y) {
        //function(x, y) {
        // return x.name.localCompare(y.name);
        return x.fullName.localeCompare(y.fullName);
    });
    return result;
}
sortByName([{ fullName: "Joe", age: 42 }]);
