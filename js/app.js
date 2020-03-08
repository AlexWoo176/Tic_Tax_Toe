let isX = true;

function myFunction(item) {
    if (isX) {
        item.innerHTML = "X";
        isX = false;
    } else {
        item.innerHTML = "O";
        isX = true;
    }
}

document.querySelectorAll("td").forEach(item => {
        console.log(item);
        item.addEventListener("click", () => {
            if (item.innerHTML === "") {
                myFunction(item);
                check();
            }
        });
    }
);

function check() {
    for (let y = 1; y < 4; y++) {
        let arr = [];
        for (let x = 1; x < 4; x++) {
            let a = document.getElementById(`${x}${y}`).innerHTML;
            if (a === "") {
                continue;
            } else {
                arr.push(a);
            }
            if (arr[0] === arr[1] && arr[1] === arr[2]) {
                if (arr[0] === "X") {
                    alert("X won");
                }
                if (arr[0] === "O") {
                    alert("O won");
                }
            }
        }
    }

    for (let y = 1; y < 4; y++) {
        let arr = [];
        for (let x = 1; x < 4; x++) {
            let a = document.getElementById(`${x}${y}`).innerHTML;
            if (a === "") {
                continue;
            } else {
                arr.push(a)
            }
            if (arr[0] === arr[1] && arr[1] === arr[2]) {
                if (arr[0] === "X") {
                    alert("X won");
                }
                if (arr[0] === "O") {
                    alert("O won");
                }
            }
        }
    }

    arr = [];
    for (let x = 1; x < 4; x++) {
        let a = document.getElementById(`${x}${x}`).innerHTML;
        if (a === "") {
            continue;
        } else {
            arr.push(a)
        }
        if (arr[0] === arr[1] && arr[1] === arr[2]) {
            if (arr[0] === "X") {
                alert("X won");
            }
            if (arr[0] === "O") {
                alert("O won");
            }
        }
    }

    arr = [];
    for (let x = 1; x < 4; x++) {
        let a = document.getElementById(`${x}${4 - x}`).innerHTML;
        if (a === "") {
            continue;
        } else {
            arr.push(a);
            console.log(arr);
        }
        if (arr[0] === arr[1] && arr[1] === arr[2]) {
            if (arr[0] === "X") {
                alert("X won");
            }
            if (arr[0] === "O") {
                alert("O won");
            }
        }
    }
}
