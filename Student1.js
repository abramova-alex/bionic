function Man(name, age) {
    this.name = name;
    this.age = age;
}

Man.prototype.live = function() {
    console.log(this.name + " live " + this.age + " years!");
};

var ivan = new Man("Ivan", 15);

ivan.live();

function Student(name, age) {
    Man.call(this, name, age);
}

Student.prototype = Object.create(Man.prototype);

Student.prototype.study = function() {
    console.log(this.name + " study");
};

var ira = new Student("ira", 22);

ira.live();

ira.study();

function duckType(obj) {
    var type = 'n/a';

    for (var key in obj) {
        if (key === 'live') {
            type = "Man";
        } else if (key === 'study') {
            type = "Student";
            break;
        }
    }

    return type;
}


console.log(duckType(ira));
console.log(duckType(ivan));

function duckType2() {
    var type = 'n/a';

    for (var key in this) {
        if (key === 'live') {
            type = "Man";
        } else if (key === 'study') {
            type = "Student";
            break;
        }
    }

    return type;
}


console.log(duckType2.call(ira));
console.log(duckType2.call(ivan));


