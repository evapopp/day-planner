const date = moment().format('LL');
const currentTime = moment().get('hour')
const showDate = document.getElementById('currentDay');
const hourEl = document.getElementsByClassName('hour');
const textArea = document.getElementsByTagName('textarea')
const saveBtn = document.querySelectorAll('.saveBtn')

// Displays current date on page header
showDate.textContent = 'Today is ' + date.toString();

// Adds CSS properties to the appropriate elements based on current time
for(let i = 9; i < 18; i++){
    if(i === currentTime){
        const presentEl = document.getElementById(`${i}`);
        presentEl.classList = 'present col-8';
    }else if(i < currentTime){
        const pastEl = document.getElementById(`${i}`);
        pastEl.classList = 'past col-8';
    }else if(i > currentTime){
        const futureEl = document.getElementById(`${i}`)
        futureEl.classList = 'future col-8'
    }
}
 






