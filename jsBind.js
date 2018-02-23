// let user = {
//     get name() {
//         return this._name;
//     },
//     set name(newValue) {
//         document.getElementById("foo").value = newValue;
//         this._name = newValue;
//     }
// };
let user = {};
// single bind
Object.defineProperty(user, 'name', {
    get: function () {
        return this._name
    },
    set: function (newValue) {
        document.getElementById("foo").value = newValue;
        this._name = newValue;
    },
    configurable: true
});

// two way bind
Object.defineProperty(user, 'age', {
    get: function () {
        document.getElementById("foo").value;
    },
    set: function (newValue) {
        document.getElementById("foo").value = newValue;
    },
    configurable: true
});

function show() {
    alert(user.name);
}

function changeName() {
    user.name = Math.random() * 100 + 1;
}