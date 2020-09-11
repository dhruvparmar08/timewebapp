// JavaScript source code
var person = "";
function name() {
    person = prompt("Please enter your name", "Dhruv");
}
function realtimeClock() {
    var d = new Date();
    var hours = d.getHours();
    var minutes = d.getMinutes();
    var seconds = d.getSeconds();
    var date1 = d.getDate();
    var month = (d.getMonth() + 1);
    var year = d.getFullYear();
    var days = [];
    days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    var ampm = (hours < 12) ? "AM" : "PM";

    var zon;
    var images;
    switch (hours) {
        case 1: hours = 1;
            zon = "Good Night";
            images = "Images/4.jpg";
            break;

        case 2: hours = 3;
            zon = "Good Night";
            images = "Images/4.jpg";
            break;

        case 3: hours = 3;
            zon = "Good Night";
            images = "Images/4.jpg";
            break;

        case 4: hours = 4;
            zon = "Good Night";
            images = "Images/4.jpg";
            break;

        case 5: hours = 5;
            zon = "Good Night";
            images = "Images/4.jpg";
            break;

        case 6: hours = 6;
            zon = "Good Morning";
            images = "Images/3.jpg";
            break;

        case 7: hours = 7;
            zon = "Good Morning";
            images = "Images/3.jpg";
            break;

        case 8: hours = 8;
            zon = "Good Morning";
            images = "Images/3.jpg";
            break;

        case 9: hours = 9;
            zon = "Good Morning";
            images = "Images/3.jpg";
            break;

        case 10: hours = 10;
            zon = "Good Morning";
            images = "Images/3.jpg";
            break;

        case 11: hours = 11;
            zon = "Good Morning";
            images = "Images/3.jpg";
            break;
        case 12: hours = 12;
            zon = "Good Afternoon";
            images = "Images/1.jpg";
            break;
        case 14: hours = 14;
            zon = "Good Afternoon";
            images = "Images/1.jpg";
            break;
        case 15: hours = 15;
            zon = "Good Afternoon";
            images = "Images/1.jpg";
            break;
        case 16: hours = 16;
            zon = "Good Afternoon";
            images = "Images/1.jpg";
            break;
        case 17: hours = 17;
            zon = "Good Evening";
            images = "Images/2.jpg";
            break;
        case 18: hours = 18;
            zon = "Good Evening";
            images = "Images/2.jpg";
            break;
        case 19: hours = 19;
            zon = "Good Evening";
            images = "Images/2.jpg";
            break;
        case 20: hours = 20;
            zon = "Good Evening";
            images = "Images/2.jpg";
            break;
        case 21: hours = 21;
            zon = "Good Night";
            images = "Images/4.jpg";
            break;
        case 22: hours = 22;
            zon = "Good Night";
            images = "Images/4.jpg";
            break;
        case 23: hours = 23;
            zon = "Good Night";
            images = "Images/4.jpg";
            break;
        case 24: hours = 24;
            zon = "Good Night";
            images = "Images/4.jpg";
            break;
        case 13: hours = 13;
            zon = "Good Afternoon";
            images = "Images/3.jpg";
            break;
    }

    var t = setTimeout(realtimeClock, 500);
    hours = (hours > 12) ? hours - 12 : hours;

    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);

    if(person == "" || person == null) {
        name();
    } else {
        document.getElementById('zone').innerHTML = zon +" <sub>"+ person +"</sub>";
    }
    
    document.getElementById("clock").innerHTML = hours + " : " + minutes + " : " + seconds + " " + ampm;
    document.getElementById('img-background').src = images;
    document.getElementById('clock1').innerHTML = date1 + "/" + month + "/" + year + " <sub>" + days[d.getDay()] +"</sub>";

}
/*
    images = new Array();
    images[0] = "2.jpg";
    images[1] = "3.jpg";
    images[2] = "4.jpg";
    images[3] = "1.jpg";

    setInterval(function () {
        changeImage()
    }, 5000);
    x = 0;
        function changeImage() {
        document.getElementById("img-background").src = images[x];
        if (x < 3) {
            x++;
        } else if (x = 4) {
            x = 0;
        }
    }
    */