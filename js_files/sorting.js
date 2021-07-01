//To swap heights
function swap(el1, el2) {
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
}
//Disable sorting button & sliders when in use
function disableSortingBtns() {
    document.querySelector(".bubble_sort").disabled = true
    document.querySelector(".insertion_sort").disabled = true
    document.querySelector(".merge_sort").disabled = true
    document.querySelector(".insertion_sort").disabled = true
    document.querySelector(".selection_sort").disabled = true
}
function disableSizeSlider() {
    document.querySelector("#arr_size").disabled = true
}
function disablenewArrBtn() {
    document.querySelector(".newArray").disabled = true
}


//Enable sorting button when not in use
function enableSortingBtns() {
    document.querySelector(".bubble_sort").disabled = false
    document.querySelector(".insertion_sort").disabled = false
    document.querySelector(".merge_sort").disabled = false
    document.querySelector(".insertion_sort").disabled = false
    document.querySelector(".selection_sort").disabled = false
}

function enableSizeSlider() {
    document.querySelector("#arr_size").disabled = false
}
function enablenewArrBtn() {
    document.querySelector(".newArray").disabled = false
}


function waitforme(milisec) {
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, milisec);
    })
}


//Selecting size from slider
let arraySize = document.querySelector("#arr_size")

//Updating bars on UI
arraySize.addEventListener("input", function () {
    createNewArray(parseInt(arraySize.value))
})

let delay = 260;

// Selecting speed slider from DOM
let delayElement = document.querySelector('#speed_input');

// Event listener to update delay time 
delayElement.addEventListener('input', function () {
    delay = 300 - parseInt(delayElement.value);
});

let array = []

//To display Bars when we visit the website
createNewArray()

//To create Array of the given size

function createNewArray(noOfBars = 60) {
    deleteChild()

    array = []
    for (let i = 0; i < noOfBars; i++) {
        array.push(Math.floor(Math.random() * 250) + 1)
    }
    const bars = document.querySelector("#bars")

    for (let i = 0; i < noOfBars; i++) {
        const bar = document.createElement("div")
        bar.style.height = `${array[i] * 2}px`;
        bar.classList.add('bar')
        bar.classList.add('flex-item')
        bar.classList.add(`barNo${i}`)
        bars.appendChild(bar)
    }
}

function deleteChild() {
    const bar = document.querySelector("#bars")
    bar.innerHTML = ""
}

const newArray = document.querySelector(".newArray")
newArray.addEventListener("click", function () {
    enableSizeSlider()
    enableSortingBtns()
    createNewArray(arraySize.value)
})

