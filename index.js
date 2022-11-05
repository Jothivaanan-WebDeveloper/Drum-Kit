let clickAlert = document.querySelectorAll(".drum").length;

for (let index = 0; index < clickAlert; index++) {
    document.querySelectorAll(".drum")[index].addEventListener("click", function() {        
        let buttonletter = this.innerHTML;
        makeSound(buttonletter);
        buttonAnimation(buttonletter);
    });
}

document.addEventListener('keydown', function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {
        switch (key) {

            case 'w':
            let soundW = new Audio ("sounds/tom-1.mp3");
            soundW.play();
            break;

            case 'a':
                let soundA = new Audio ("sounds/tom-2.mp3");
                soundA.play();
                break;
            
            case 's':
            let soundS = new Audio ("sounds/tom-3.mp3");
            soundS.play();
            break;

            case 'd':
            let soundD = new Audio ("sounds/tom-4.mp3");
            soundD.play();
            break;

            case 'j':
            let soundJ = new Audio ("sounds/snare.mp3");
            soundJ.play();
            break;

            case 'k':
            let soundK = new Audio ("sounds/kick-bass.mp3");
            soundK.play();
            break;

            case 'l':
            let soundL = new Audio ("sounds/crash.mp3");
            soundL.play();
            break;

        default:
            console.log(buttonSound);
        
    }
}

function buttonAnimation(key) {
    let activeButton = document.querySelector("."+key);
    activeButton.classList.add('pressed');
    setTimeout(function() {
    activeButton.classList.remove('pressed');
    },100);
}

function ObjectConstructor(name, age, hasPermit, workingPlaces) {
    this.name = name;
    this.age = age;
    this.hasPermit = hasPermit;
    this.workingPlaces = workingPlaces;
}

let detailsOfTimmy = new ObjectConstructor ('Timmy', '22', true, ['Corridor','Hall']);
console.log(detailsOfTimmy.name);