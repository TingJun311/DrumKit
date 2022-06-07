const filePaths = [
    "./sounds/tom-1.mp3",
    "./sounds/tom-2.mp3",
    "./sounds/tom-3.mp3",
    "./sounds/tom-4.mp3",
    "./sounds/snare.mp3",
    "./sounds/kick-bass.mp3",
    "./sounds/crash.mp3",
];

document.querySelectorAll(".drum").forEach((e) => {
    e.addEventListener("click", () => {
        soundsDecider("w drum", "a drum", "s drum", "d drum", "j drum", "k drum", "l drum", e.getAttribute("class"));
    });
});

document.addEventListener("keypress", (e) => {
    soundsDecider("w", "a", "s", "d", "j", "k", "l", e.key);
});

function triggerSounds(path) {
    let audio = new Audio(path);
    audio.play();
}

function soundsDecider(key1, key2, key3, key4, key5, key6, key7, event) {
    switch (event) {
        case key1:
            triggerSounds(filePaths[6]);
            break;
        case key2:
            triggerSounds(filePaths[5]);
            break;
        case key3:
            triggerSounds(filePaths[4]);
            break;
        case key4:
            triggerSounds(filePaths[3]);
            break;
        case key5:
            triggerSounds(filePaths[2]);
            break;
        case key6:
            triggerSounds(filePaths[1]);
            break;
        case key7:
            triggerSounds(filePaths[0]);
            break;
        default:
            console.log(event);
    }
}
