const blocks = document.querySelectorAll(".item");
const keys = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
blocks.forEach((block) => {
    block.onclick = () => changeClicked(block);
});

document.onkeydown = (event) => {
    for (let i = 0; i < blocks.length; i++) {
        if (event.key === keys[i]) changeClicked(blocks[i]);
    }
};

function changeClicked(item) {
    isClicked = item.classList.contains("item__clicked");

    if (isClicked) {
        return;
    } else {
        item.classList.add("item__clicked");
        item.querySelector("audio").play();
        setTimeout(() => {
            item.classList.remove("item__clicked");
        }, 123);
    }
}
