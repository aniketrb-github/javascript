const user = {
    name: "Roger",
    age: 45,
    gender: "Male",
    assets: ["car", "house", "office", "farmhouse", "island", "bunglow", "penthouse"],
  
    printAssets : function() {
        console.log(this.assets);   // 'this' refers to the object reference at the time of invocation which is written to the left of the dot(.)  ex: user.name | this == user
    },
  
    printName: function() {
        console.log(`Name: ${this.name}`);  // find this method invocation, then see what is the object reference at the left of the dot(.) ex: user.printName(); | this == user
    }
}

// printing 'this' refers to 'window' object
console.log(this);

// here, we print the user object
console.log(user);
console.log(user.name);

user.printName();   // the object reference "user" refers to "this" in the above declared methods in the const 'user'
user.printAssets();

const assetsArray = user.assets;
console.log("Print array using WHILE loop: ");
var i = 0;
while(i < assetsArray.length){
    console.log(i+") "+assetsArray[i]);
    i++;
}

// Modern new way
console.log(`It's cool to print array using FOR-EACH loop: `);
assetsArray.forEach(asset => {
    console.info(asset);
});

console.log("Print array using FOR loop: ");
for(var i=0; i<assetsArray.length; i++) {
    console.log(i+") "+assetsArray[i]);
}
