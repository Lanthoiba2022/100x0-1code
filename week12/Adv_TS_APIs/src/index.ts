// interface User {
//     name: string;
//     age: number;
// };

// function sumOfAge(user1: User, user2: User){
//     return user1.age + user2.age;
// }

// const age = sumOfAge({name: 'Taro', age:20}, {name:'Jiro', age:30});
// console.log(age);

interface User {
    id: string;
    name: string;
    age: string;
    email: string;
    password: string;
};

type UpdateProps = Pick<User, 'name' | 'age' | 'email'>

function updateUser(updatedProps: UpdateProps){
    
}