




const chocolate = {
    hasChocolate : () => true
}

const caramel = {
    hasCaramel: () => true
}

const iceCream = Object.assign({}, chocolate, caramel);


let choco = {
    hasChoco() {
        return true
    }
}






/* 

    animal
        herbivore
            rabbit
            v-human
        carnivore
            tiger 
            homosapian

*/

function Animal() {
    this.poop = true;
    this.eat = function(){
        console.log("Animal Eating!")
    }
}

function Herbivore() {
    this.prototype = new Animal();
}

let h1 = new Herbivore();