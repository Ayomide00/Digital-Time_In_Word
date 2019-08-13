let globalHour;
let globalMinute;

if(!document.querySelector('#switch').checked){
    time()
}

function time() {  
    document.querySelector('.time').style.fontSize =  "100px";
    let date = new Date()
    globalHour = date.getHours();
    globalMinute = date.getMinutes();
    if(globalHour.toString().length === 1){
        globalHour =  '0'+globalHour;
    }
    if(globalMinute.toString().length === 1){
        globalMinute =  '0'+globalMinute.toString();
    }
    document.querySelector('.time').innerHTML = `${globalHour} : ${globalMinute}`;
let day = date.getDay();
let mon = date.getMonth();
let num = date.getDate();
switch (day) {
    case 0: day = 'Sun'   
    break;
    case 1: day = 'Mon'   
    break;
    case 2: day = 'Tue'   
    break;
    case 3: day = 'Wed'   
    break;
    case 4: day = 'Thu'   
    break;
    case 5: day = 'Fri'   
    break;
    case 6: day = 'Sat'
    break;
    default:
        break;
}
switch (mon) {
    case 0: mon = 'January'   
    break;
    case 1: mon = 'February'   
    break;
    case 2: mon = 'March'   
    break;
    case 3: mon = 'April'   
    break;
    case 4: mon = 'May'   
    break;
    case 5: mon = 'June'   
    break;
    case 6: mon = 'July'   
    break;
    case 7: mon = 'August'   
    break;
    case 8: mon = 'September'   
    break;
    case 9: mon = 'October'   
    break;
    case 10: mon = 'November'   
    break;
    case 11: mon = 'December'   
    break;
    default:
        break;
}
document.querySelector('#date').innerHTML = `${day} ${mon}  ${num}`
}



// document.querySelector('input').addEventListener('click', 
function word(){
    let date = new Date()
    globalHour = date.getHours();
    globalMinute = date.getMinutes();
    document.querySelector('.time').style.fontSize =  "50px";
    document.querySelector('.time').style.paddingTop =  "30px";

    const variable = {
        1:'one', 2:'two', 3:'three', 4:'four', 5:'five', 6:'six', 7:'seven', 8:'eight', 9:'nine', 10:'ten', 11:'eleven', 12:'twelve', 13:'thirteen', 14:'fourteen', 15:'fifteen', 16:'sixteen', 17:'seventeen', 18:'eighteen', 19:'nineteen', 20:'twenty', 21:'twenty-one', 22:'twenty-two', 23:'twenty-three', 24:'twenty-four', 25:'twenty-five', 26:'twenty-six', 27:'twenty-seven', 28:'twenty-eight', 29:'twenty-nine', 30:'thirty'
    };
    if(globalMinute == 00){document.querySelector('.time').innerHTML = `${variable[globalHour]} O'Clock`}
    if(globalMinute == 15){document.querySelector('.time').innerHTML = `Quuarter Past ${variable[globalHour]}`}
    if(globalMinute == 45){document.querySelector('.time').innerHTML = `Quuarter To ${variable[globalHour]}`}
    if(globalMinute == 30){document.querySelector('.time').innerHTML = `Half Past ${variable[globalHour]}`}
    if(globalMinute == 1){document.querySelector('.time').innerHTML = `One Minute Past ${variable[globalHour]}`}
    if(globalMinute == 59){document.querySelector('.time').innerHTML = `One Minute to ${variable[globalHour]}`}
    if(globalMinute < 30 && globalMinute != 1){document.querySelector('.time').innerHTML = `${variable[globalMinute]} Minutes Past ${variable[globalHour]}`}
    if(globalMinute > 30 && globalMinute != 59){document.querySelector('.time').innerHTML = `${variable[globalMinute]} Minutes to ${variable[globalHour]}`}
    
};

document.querySelector('input').addEventListener('click', function(){
    if(document.querySelector('input').checked){
        word()
    }else{
        time()
    }
});