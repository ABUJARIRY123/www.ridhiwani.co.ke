//These are my js codes
    console.log('Welcome to js ninja');
    let firstName = 'Sufyaan';
    let lastName = 'Ridhwaan';
    console.log(firstName,lastName);
    let name = lastName + ' ' + firstName;
    console.log(name);
let age = 23;
let arrow = 17;
age = 10;
sum = age + arrow;
givenAge = null;
console.log(sum);
let individual = {
    age : 34,
    name : 'Ade'
};
individual.name = 'Abu Sufyaan';
console.log(individual.age);
console.log(individual.name);
let myColors = ['red', 'black', 'white', 'green'];
console.log(myColors[1]);
myColors[4] = 'New_Home';
console.log(myColors[4]);
console.log(myColors.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase(), name);
let email = 'maroridhiwani@gmail.com'
let index = email.indexOf('w');
console.log(email);
console.log(index);
let results = email.slice(4, 8);
console.log(results);
let works = email.substr(4, 8);
console.log(works);
const  website = 'www.ridhiwani.co.ke';
let likes = 0;
likes++;
console.log(likes);
let article = `
The website by the name ${website} has got ${likes} likes
`;
console.log(article);
let outCome = myColors.join(' ');
console.log(outCome);
for(let i = 0; i <= 5; i++)
{
console.log(i);
}
console.log('end of the loop');

const workers = ['Sufyaan', 'Ayuub', 'Ridhwaan', 'Ade'];
for (let i = 0; i < workers.length; i++) {
    console.log(workers[i]); 
}

const password = 'pawss$123rd';
if (password.length >= 9 && password.includes('$')) {
    console.log('Strong password!');
}
else if (password.length = 8 || password.includes('@', '#', '$') && password.length > 5){
    console.log('Not that bad');
}
else{
    console.log('Enter a strong password chief!');
}
let grade = 'moss mos';
switch (grade) {
    case 'A':
        console.log('Excellent');
        break;
    case 'B':
        console.log('Very Good');
        break;
    case 'C':
        console.log('Good');
        break;
    case 'C':
        console.log('Fair');
        break;
    case 'E':
        console.log('Work hard');
        break;
        default:
            console.log('Enter a valid grade');
}

let greetings = function(name = 'Mwanamisi Hamisi', time = 'Afternoon', age = '27')
{
console.log(`Welcome you ${name} it is now in the ${time} and your age is ${age}`);
};
greetings();
const calcArea = function(radius){
    let area = 3.14 * radius **2;
    return area;
}
const area = calcArea(10);
console.log(area);