// const tinderUser = new Object() - This is a Singleton
const tinderUser = {}
tinderUser.id = "abs123"
tinderUser.name = "gram"
tinderUser.isLoggedIn = false 

// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstName : "ISRO",
            lastName : "Harsh"
        }
    }
}
// console.log(regularUser.fullname.userfullname.lastName);

const obj1 = {
    1 : "a",
    2 : "b"
}

const obj2 = {
    3 : "a",
    4 : "b"
}

const obj4 = {
    5 : "a",
    6 : "b"
}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)
const obj3 = {...obj1, ...obj2, ...obj4}

// console.log(obj3);

const users = [{
    id : 1,
    email : "random@outlook.com"
}]

users[0].email
console.log(tinderUser)
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
