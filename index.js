
const filePaths = [
    // To store all the sounds file path
    "./sounds/tom-1.mp3",
    "./sounds/tom-2.mp3",
    "./sounds/tom-3.mp3",
    "./sounds/tom-4.mp3",
    "./sounds/snare.mp3",
    "./sounds/kick-bass.mp3",
    "./sounds/crash.mp3",
];

document.querySelectorAll(".drum").forEach((e) => {
    // For each HTML elements add a listener
    e.addEventListener("click", () => {
        // Get the attribute string then wait for callback functions
        soundsDecider("w drum", "a drum", "s drum", "d drum", "j drum", "k drum", "l drum", e.getAttribute("class"));

        // Get a character in the class name
        animation(e.getAttribute("class").substring(0, 1));
    });
});

document.addEventListener("keypress", (e) => {
    // If user click keyboard instead
    // Get e object properties of key
    soundsDecider("w", "a", "s", "d", "j", "k", "l", e.key);
    animation(e.key);
});

const animation = (e) => {
    // This function its to set animation depending on what user have click or enter
    const event = document.querySelector(`.${e}`);
    event.classList.add("pressed")
    setTimeout(() => {
        event.classList.remove("pressed")
    }, 100);
    // 0.100 sec
};

function triggerSounds(path) {
    // This function allows user to trigger the sound from the file path
    let audio = new Audio(path);
    audio.play();
}

function soundsDecider(key1, key2, key3, key4, key5, key6, key7, event) {
    // This function allows the program decide which sounds to trigger 
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
