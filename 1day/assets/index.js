const blocks = document.querySelectorAll(".item");
const audios = document.querySelectorAll("audio");
const keys = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
blocks.forEach((block, index) => {
    block.onclick = () => changeClicked(block, index);
});

document.onkeydown = (event) => {
    for (let i = 0; i < blocks.length; i++) {
        if (event.key === keys[i]) changeClicked(blocks[i], i);
    }
};

function changeClicked(item, index) {
    isClicked = item.classList.contains("item__clicked");

    if (isClicked) {
        return;
    } else {
        item.classList.add("item__clicked");
        audios[index].play();
        setTimeout(() => {
            item.classList.remove("item__clicked");
        }, 123);
    }
}
