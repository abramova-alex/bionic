var Man = {
    constructor : function(name) {
        this.name = name;

        return this;
    },
    live : function() {
        console.log("live " + this.name);
    }
};

var Student = Man.constructor("vasia");

Student.study = function() {
    console.log(this.name + " study");
};

Student.study();