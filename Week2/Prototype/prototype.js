//**Prototype inheritance 

var parent = {
    value: "parentValue",
    obj: {
        objValue: "parentObjValue"
    },
    walk: function () {
        console.log("walking!");
    }

};

var child = Object.create(parent);
console.log("CHILD - child.value =", child.value);
console.log("CHILD - child.obj.objValue =", child.obj.objValue);
console.log("PARENT - parent.value = ", parent.value);
console.log("PARENT - parent.obj.objValue = ", parent.obj.objValue);
console.log("CHILD - child = ", child);
console.log("PARENT - parent = ", parent);

child.value = "childValue";
child.obj.objValue = "childObjeValue";
console.log("CHILD - **CHANGED child.value = childValue**");
console.log("CHILD - **CHANGED child.obj.objValue = childObjeValue**");
console.log("CHILD - child.value =", child.value);
console.log("CHILD - child.obj.objValue =", child.obj.objValue);
console.log("PARENT - parent.value = ", parent.value);
console.log("PARENT - parent.obj.objValue = ", parent.obj.objValue);
console.log("CHILD - child = ", child);
console.log("PARENT - parent = ", parent);

console.log("child.obj===parent.obj ?", child.obj === parent.obj)

var grandChild = Object.create(child);
console.log("grandChild = ", grandChild);
grandChild.walk();

//**function Constructor 
 function Dog(name) {
     this.name = name;
     console.log("'This' is :", this);
 }

 var mydog = new Dog("MAx");
 console.log("mydog is :", mydog)

 Dog("puppy");