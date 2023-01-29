function cats(data) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    let catArray = [];

    for (let catData of data) {
        // let token = catData.split(" ");
        // let catName = token[0];
        // let catAge = token[1];
        let [catName, catAge] = catData.split(' ');
        let myCat = new Cat(catName, catAge);
        catArray.push(myCat);
        myCat.meow();
    }
}
cats(["Mellow 2", "Tom 5"]);
