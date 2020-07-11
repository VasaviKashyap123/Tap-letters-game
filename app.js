const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.letter');
let score = 0;

var timeLeft = 10;

var downTimer = setInterval(function () {
    if (timeLeft < 0) {
        clearInterval(downTimer);
        alert("GAME OVER")

    }
    else {
        document.getElementById("Timer").innerText = timeLeft;
    }
    timeLeft -= 1;
}, 1000)





function btn(i) {
    let arr = []

    arr.unshift(document.getElementById("li1"));
    arr.unshift(document.getElementById("li2"));
    arr.unshift(document.getElementById("li3"));
    arr.unshift(document.getElementById("li4"));
    arr.unshift(document.getElementById("li5"));

    switch (i) {
        case 'C':
            // for (k = 0; k < arr.length; k++) {
            //     let res = arr[k].innerText;
            //     console.log(res)
            //     for (j = 0; j < res.length; j++) {
            //         console.log(res[j])
            //         if (res[j] === i) {
            //             //arr[k].innerHTML = arr[k].innerText.replace(res[j], '<span style="color : red">' + res[j] + '</span>');
            //             //       arr[k].innerHTML = arr[k].innerHTML.replace(arr[k].innerHTML, '<span style="color : red">' + arr[k] + '</span>');
            //             arr[k].innerHTML = arr[k].innerHTML.replace(arr[k].innerHTML, '<span style="color : red">' + arr[k].innerHTML + '</span>');
            //         }
            //     }
            // }
            document.querySelectorAll("#C").forEach((value) => value.style.color = "red");
            //document.getElementById("C").style.color = "red";


            break;
        case 'A':
            // for (k = 0; k < arr.length; k++) {
            //     let res = arr[k].innerText;
            //     console.log(res)
            //     for (j = 0; j < res.length; j++) {
            //         console.log(res[j])
            //         if (res[j] === i) {
            //             arr[k].innerHTML = arr[k].innerText.replace(res[j], '<span style="color : red">' + res[j] + '</span>');
            //         }
            //     }
            // }
            document.querySelectorAll("#A").forEach((value) => value.style.color = "red");
            // document.getElementById("A").style.color = "red";
            break;
        case 'T':
            // for (k = 0; k < arr.length; k++) {
            //     let res = arr[k].innerText;
            //     console.log(res)
            //     for (j = 0; j < res.length; j++) {
            //         console.log(res[j])
            //         if (res[j] === i) {
            //             arr[k].innerHTML = arr[k].innerText.replace(res[j], '<span style="color : red">' + res[j] + '</span>');
            //         }
            //     }
            // }
            document.querySelectorAll("#T").forEach((value) => value.style.color = "red");
            // document.getElementById("T").style.color = "red";
            break;
        case 'B':
            // for (k = 0; k < arr.length; k++) {
            //     let res = arr[k].innerText;
            //     console.log(res)
            //     for (j = 0; j < res.length; j++) {
            //         console.log(res[j])
            //         if (res[j] === i) {
            //             arr[k].innerHTML = arr[k].innerText.replace(res[j], '<span style="color : red">' + res[j] + '</span>');
            //         }
            //     }
            // }
            document.querySelectorAll("#B").forEach((value) => value.style.color = "red");
            //document.getElementById("B").style.color = "red";
            break;

        case 'M':
            // for (k = 0; k < arr.length; k++) {
            //     let res = arr[k].innerText;
            //     console.log(res)
            //     for (j = 0; j < res.length; j++) {
            //         console.log(res[j])
            //         if (res[j] === i) {
            //             arr[k].innerHTML = arr[k].innerText.replace(res[j], '<span style="color : red">' + res[j] + '</span>');
            //         }
            //     }
            // }
            document.querySelectorAll("#M").forEach((value) => value.style.color = "red");
            // document.getElementById("M").style.color = "red";
            break;

        case 'R':
            // for (k = 0; k < arr.length; k++) {
            //     let res = arr[k].innerText;
            //     console.log(res)
            //     for (j = 0; j < res.length; j++) {
            //         console.log(res[j])
            //         if (res[j] === i) {
            //             arr[k].innerHTML = arr[k].innerText.replace(res[j], '<span style="color : red">' + res[j] + '</span>');
            //         }
            //     }
            // }
            document.querySelectorAll("#R").forEach((value) => value.style.color = "red");
            // document.getElementById("R").style.color = "red";
            break;

        default:
            break;
    }
}
