async function selection() {
    const ele = document.querySelectorAll(".bars")
    for (let i = 0; i < ele.length; i++) {
        let min = i;
        ele[i].style.background = "yellow"
        for (let j = i + 1; j < ele.length; j++) {
            ele[j].style.background = "orange"
            await waitforme(delay)
            if (parseInt(ele[j].style.height) < parseInt(ele[min].style.height)) {
                if (min !== i) {
                    {
                        ele[min].style.background = "yellow"
                    }
                    min = j;
                }
            }
            else {
                ele[j].style.background = 'yellow';
            }
        }
        await waitforme(delay);
        swap(ele[min], ele[i]);
        ele[min].style.background = 'yellow';

        ele[i].style.background = 'green';
    }

}

const selSortBtn = document.querySelector(".selection_sort")

selSortBtn.addEventListener('click', async function () {
    disableSortingBtns();
    disableSizeSlider();
    disablenewArrBtn();
    await insertion();
    enableSortingBtns();
    enableSizeSlider();
    enablenewArrBtn();
});

