
const filePaths = [
    "./sounds/tom-1.mp3",
    "./sounds/tom-2.mp3",
    "./sounds/tom-3.mp3",
    "./sounds/tom-4.mp3",
    "./sounds/snare.mp3",
    "./sounds/kick-bass.mp3",
    "./sounds/crash.mp3"
]

document.querySelectorAll(".drum").forEach((e) => {
    e.addEventListener("click", () => {
        switch (e.getAttribute("class")) {
            case "w drum":
                triggerSounds(filePaths[6]);
                break;
            case "a drum":
                triggerSounds(filePaths[5]);    
                break;
            case "s drum":
                triggerSounds(filePaths[4]);
                break;
            case "d drum":
                triggerSounds(filePaths[3]);
                break;
            case "j drum":
                triggerSounds(filePaths[2]);
                break;
            case "k drum":
                triggerSounds(filePaths[1]);
                break;
            case "l drum":
                triggerSounds(filePaths[0]);
                break;        
            default:
                console.log("class name error");    
        }
        console.log(e.getAttribute("class"));
    });
});

function triggerSounds (path) {
    let audio = new Audio(path);
    audio.play();
}