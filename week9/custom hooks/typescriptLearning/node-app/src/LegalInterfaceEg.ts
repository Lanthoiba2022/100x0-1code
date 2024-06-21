
interface User {
    firstName: string;
    lastName: string;
    age: number;
    email?: string; //optional
};


function isLegal1(user: User) {
    if(user.age > 18){
        return true;
    } else {
        return false;
    }
} 

function greet1(user: User){
    console.log("hi there " + user.firstName);
}

const user = {
    firstName: "lanthoiba",
    lastName: "Meitei",
    age: 20

}

console.log(isLegal1(user));
greet1(user);