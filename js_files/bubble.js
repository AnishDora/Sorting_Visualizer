async function bubble() {
    const ele = document.querySelectorAll(".bar")
    for (let i = 0; i < ele.length - 1; i++) {
        for (let j = 0; j < ele.length - i - 1; j++) {
            ele[j].style.background = "orange"
            ele[j + 1].style.background = "orange"
            if (parseInt(ele[j].style.height) > parseInt((ele[j + 1].style.height))) {
                await waitforme(delay)
                swap(ele[j], ele[j + 1])
            }
            ele[j].style.background = "yellow"
            ele[j + 1].style.background = "yellow"
        }
        ele[ele.length - 1 - i].style.background = "green"
    }
    ele[0].style.background = "green"
}

const bubSortBtn = document.querySelector(".bubble_sort")

bubSortBtn.addEventListener('click', async function () {
    disableSortingBtns();
    disableSizeSlider();
    disablenewArrBtn();
    await bubble();
    enableSortingBtns();
    enableSizeSlider();
    enablenewArrBtn();
});