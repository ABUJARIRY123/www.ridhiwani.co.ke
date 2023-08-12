function popup() {
    alert('Are you sure you want to continue?');
}
document.addEventListener('DOMContentLoaded',function(){
    document.querySelector('form').onsubmit = function values() {
    const name = document.querySelector('#lastname').value;
    alert(`Thank you ${name} for your submission`);
};
});
let counterValue = 0;
const value = document.querySelector('h4');
function count () {
    counterValue++;
    value.innerHTML = counterValue;
    if (counterValue % 5 === 0){
        alert(`You have currently reached ${counterValue}`);
    }
    document.addEventListener('DOMContentLoaded', function(){
     fetch('https://api.echangeratesapi.io/latest?base=USD')
     .then(response => response.json())
    .then(data => {
        console.log(data);
    }) ;   
    });
}
