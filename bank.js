var frontSide = document.getElementsByClassName("front-face")[0],
    backSide = document.getElementsByClassName("back-face")[0],
    card = document.getElementsByClassName("card")[0],
    turnBut = document.getElementById("turnBut");

//turn the card
function turnCard() {
    if (backSide.style.opacity === "1") {
        turnCardFront();
    }
    else {
        turncardBack();
    }
}

//turn the bank card to back function
function turncardBack() {
    card.style.transform = "rotatey(180deg)";
    backSide.classList.add("transitionClass");
    backSide.style.opacity = "1";
}

//turn bank card to front function
function turnCardFront() {
    card.style.transform = "rotatey(0deg)";
    backSide.classList.add("transitionClass");
    backSide.style.opacity = "0";
}
//turn the card on click the turn button
turnBut.onclick = turnCard;

//change the card of theme
var themeDiv = document.getElementsByClassName("theme"),
    themeArray = Array.from(themeDiv),
    icon = document.createElement("i");
icon.classList.add("fa");
icon.innerHTML = "&#xf058";
//if body hase no class of theme
function theme() {
    if (document.body.classList.length == 0) {
        document.body.classList.add("red");
        themeDiv[0].appendChild(icon);
    }
}
theme();

//change theme onclick the theme buttons 
for (i = 0; i < themeArray.length; i++) {
    themeArray[i].onclick = function () {
        backSide.classList.remove("transitionClass");
        document.body.classList.remove("red", "yellow", "gray", "green", "blue");
        document.body.classList.add(this.getAttribute("data-color"));
        this.appendChild(icon);
    }
}

//set user informatin inputs
var put = document.getElementsByTagName("input"),
    frontNumber = document.getElementById("frontNumber"),
    frontName = document.getElementById("name"),
    frontDate = document.getElementById("date"),
    cvcNumber = document.getElementById("cvc"),
    sorryDiv = document.createElement("div");

//function for user NAME
put[0].oninput = function test() {
    //setInterval(() => {  
    if (put[0].value.length == "0") {
        frontName.innerHTML = "---- ----"
    } else if (typeof put[0].value === Number) {
        //if name of character more than 13 character change border color of input
        put[0].style.borderColor = "red";
    } else {
        frontName.innerHTML = put[0].value;
        put[0].style.borderColor = "";
        console.log(typeof put[0].value)
    }
    //},)    
}
//turn the bank kard to front on focus the name input
put[0].onfocus = function () {
    turnCardFront();
}

//function for credit card number
put[1].oninput = function () {
    if (put[1].value.length == "0") {
        frontNumber.innerHTML = "---- ---- ---- ----";
        put[1].style.borderColor = "";
    } else {
        put[1].setAttribute("value", put[1].value);
        put[1].value = put[1].getAttribute("value").slice(0, 19).replace(/ /g, '');
        this.value = put[1].value.replace(/\B(?=(\d{4})+(?!\d))/g, " ");
        if (!/[^a-zA-Z]/.test(this.value)) {
            put[1].style.borderColor = "red";
        } else {
            frontNumber.innerHTML = this.value;
            put[1].style.borderColor = "";
        }

    }
}
//turn the bank kard to front on focus the front number input
put[1].onfocus = function () {
    turnCardFront();
}

//funciton for expiry year and month
put[2].oninput = function () {
    turnCardFront();
    //setInterval(() => {
    if (put[2].value.length == "0") {
        frontDate.innerHTML = "--/--"
        put[2].style.borderColor = "";
    } else {
        put[2].setAttribute("value", this.value);
        this.value = put[2].getAttribute("value").slice(0, 7).replace(/^(\d\d)(\d)$/g, '$1 / $2');
        if (this.value[0] > 1) {
            this.value = "0" + this.value;
            frontDate.innerHTML = this.value;
        } else if (this.value[0] == 1) {
            if (this.value[1] > 2) {
                this.value = "12";
                frontDate.innerHTML = this.value;
            } else {
                this.value = this.value;
                frontDate.innerHTML = this.value;
            }
        } else {
            frontDate.innerHTML = this.value;
        }
    }
    //},);
}
//turn the bank kard to front on focus the date input
put[2].onfocus = function () {
    turnCardFront();
}


put[3].oninput = function () {
    //setInterval(() => {
    if (put[3].value.length == "0") {
        cvcNumber.innerHTML = "---";
    } else {
        put[3].setAttribute("value", put[3].value.slice(0, 3));
        put[3].value = put[3].getAttribute("value");
        cvcNumber.innerHTML = put[3].value;
    }
    //},)
}
//function for credit card cvc
put[3].onfocus = function () {
    turncardBack();
}



//start functions for person info section
var nextBut = document.getElementById("nextBut"),
    userInfo = document.getElementsByClassName("person-info")[0],
    userControl = document.getElementsByClassName("person-control")[0],
    turnBut = document.getElementsByClassName("add")[0];

//next Buttton functions
//next button onclick set person-info of opacity "0" and person control of opacity 1
nextBut.onclick = function () {
    //turn 
    turnCardFront();
    userControl.style.left = "50%";
    userInfo.style.left = "-150%";
}

//return to persotn info section if user want edit anytheing
turnBut.onclick = function () {
    userControl.style.left = "150%";
    userInfo.style.left = "50%";
}

//set user info  in user control panel
var userName = document.getElementById("userName");
var cardNo = document.getElementById("cardNo");
var expiry = document.getElementById("expiry");
var CvC0 = document.getElementById("CvC");

nextBut.addEventListener("click", function () {
    userName.innerHTML = frontName.innerHTML;
    cardNo.innerHTML = frontNumber.innerHTML;
    expiry.innerHTML = frontDate.innerHTML;
    CvC.innerHTML = cvcNumber.innerHTML;
})

