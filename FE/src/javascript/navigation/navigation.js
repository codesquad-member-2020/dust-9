const init = (touchCallbackHandler) => {
    registerEventListener(touchCallbackHandler);
}

const registerEventListener = (touchCallbackHandler) => {
    const buttons = document.querySelectorAll(".navigation button");

    buttons.forEach((button, index) => {
        button.addEventListener('touchend', evt => {
            touchCallbackHandler(index);
        })
    });
}



export default {init, registerEventListener}