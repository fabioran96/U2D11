class user{
    constructor(firstName, lastName, age, location){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }

    compareAge(otherUser){
        if(this.age > otherUser.age){
            return this.firstName + " è più vecchio di " + otherUser.firstName;
        } else if (this.age < otherUser.age) {
          return this.firstName +" è più giovane di " + otherUser.firstName;
        } else {
          return this.firstName + "e" + otherUser.firstName + " hanno la stessa età";
        }
        
    }
    
}

const user1 = new user("Francesco","Bagnaia", 27, "Torino")
const user2 = new user("Marc", "Marquez", 31, "Cervera")
const user3 = new user("Jorge", "Martin", 26, "Madrid")

console.log(user1.compareAge(user2));
console.log(user3.compareAge(user1));
console.log(user2.compareAge(user3))

