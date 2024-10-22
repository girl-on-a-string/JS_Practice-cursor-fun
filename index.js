// create a cursor that leaves a trail of dots, going from white (closest to cursor) to rainbow (farthest to cursor)

((e) => {
    console.log("working");

    let x = e.clientX;
    let y = e.clientY;

    // document.addEventListener("mousemove", (e) => {
    //     console.log(x, y);
    // })

    onmousemove = (
        function (e) {
            console.log("mouse location:", e.clientX, e.clientY);
        }
    )
});

function cursorEffect () { // factory function returns an object
    let colors = [
        "#e30022", //cadmium red
        "#ff8c00", //dark orange
        "#ffd800", //school bus yellow
        "#138808", //india green
        "#0000ff", //blue
        "#7851a9" //royal purple
    ]

    return {

    }
}

console.log("here");