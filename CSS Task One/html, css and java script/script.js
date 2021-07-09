// const user = {
//     name: 'emeka',
//     username: 'emeka12345',
//     email: 'emake@gmail.com',
//     age: 30,
// blog: [
//     'this is my first post', 'hello guys','how are you doing'],
//     Greet(){
    
//     },
//     logIn(){
//         console.log(`${this.name} is logged in`)
//     },
//     logOut(){
//         console.log(
//             'you are logged out'
//         )
//     }

// }
// console.log(user.logOut)

// class user{
//     constructor(username,age,email){
//         this.username = username;
//         this.age = age;
//         this.email = email;
//     }
// }

// const userOne = new user( 'flexy', 56, 'flexy@gmail.com'

// ) 
// console.log(userOne);
 
const uiii = document.getElementById('users');

fetch('https://randomuser.me/api/?results=10')

.then((resp) =>  resp.json())
.then((data) => {
    let users = data.results;
    return users.map((user) => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        const p = document.createElement('p');

        uiii.appendChild(li);
        let paragraph = li.appendChild(p);
        let image = li.appendChild(img);
        let firstName = user.name.first;
        let lastName = user.name.last;
        paragraph.innerHTML = `${firstName} ${lastName}`;
        image.src = user.picture.large;
})
})
.catch((error) => console.log(error));