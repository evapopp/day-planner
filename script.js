const date = moment().format('LL');
const currentTime = moment().get('hour')
const showDate = document.getElementById('currentDay');
const hourEl = document.getElementsByClassName('hour');



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
 
// Sets Local storage for each hour block

// === 9am ===
$('.saveBtn').on('click', function(){
    var text9 = $('#9').val().trim()
    $('<textarea>').append(text9)
    localStorage.setItem('9am', text9)
})

function load9(){
    document.getElementById('9').innerHTML = localStorage.getItem('9am')
}

// === 10am ===
$('.saveBtn').on('click', function(){
    var text10 = $('#10').val().trim()
    $('<textarea>').append(text10)
    localStorage.setItem('10am', text10)
})

function load10(){
    document.getElementById('10').innerHTML = localStorage.getItem('10am')
}

// === 11am ===
$('.saveBtn').on('click', function(){
    var text11 = $('#11').val().trim()
    $('<textarea>').append(text11)
    localStorage.setItem('11am', text11)
})

function load11(){
    document.getElementById('11').innerHTML = localStorage.getItem('11am')
}

// === 12pm ===
$('.saveBtn').on('click', function(){
    var text12 = $('#12').val().trim()
    $('<textarea>').append(text12)
    localStorage.setItem('12pm', text12)
})

function load12(){
    document.getElementById('12').innerHTML = localStorage.getItem('12pm')
}

// === 1pm ===
$('.saveBtn').on('click', function(){
    var text1 = $('#13').val().trim()
    $('<textarea>').append(text1)
    localStorage.setItem('1pm', text1)
})

function load1(){
    document.getElementById('13').innerHTML = localStorage.getItem('1pm')
}

// === 2pm ===
$('.saveBtn').on('click', function(){
    var text2 = $('#14').val().trim()
    $('<textarea>').append(text2)
    localStorage.setItem('2pm', text2)
})

function load2(){
    document.getElementById('14').innerHTML = localStorage.getItem('2pm')
}

// === 3pm ===
$('.saveBtn').on('click', function(){
    var text3 = $('#15').val().trim()
    $('<textarea>').append(text3)
    localStorage.setItem('3pm', text3)
})

function load3(){
    document.getElementById('15').innerHTML = localStorage.getItem('3pm')
}

// === 4pm ===
$('.saveBtn').on('click', function(){
    var text4 = $('#16').val().trim()
    $('<textarea>').append(text4)
    localStorage.setItem('4pm', text4)
})

function load4(){
    document.getElementById('16').innerHTML = localStorage.getItem('4pm')
}

// === 5pm
$('.saveBtn').on('click', function(){
    var text5 = $('#17').val().trim()
    $('<textarea>').append(text5)
    localStorage.setItem('5pm', text5)
})

function load5(){
    document.getElementById('17').innerHTML = localStorage.getItem('5pm')
}

// Loads saved planner entries if window is refreshed

load9();
load10();
load11();
load12();
load1();
load2();
load3();
load4();
load5();
