function tap() {
    var waterElement = document.getElementById("water");
    var currentState = waterElement.style.animationPlayState;
    var tapwater = document.getElementById("tapwater");
    var currentState = tapwater.style.animationPlayState; tap
    var tap = document.getElementById("tap");

    if (currentState === "running" || tapcurrentState === "running") {
        waterElement.style.animationPlayState = "paused";
        tapwater.style.animationPlayState = "paused";
        tap.style.backgroundColor="red"
        tapwater.style.backgroundColor="white";
    } else {
        tap.style.backgroundColor="green"
        waterElement.style.animationPlayState = "running";
        tapwater.style.animationPlayState = "running"; 
        tapwater.style.backgroundColor="#008cff";
    }
}