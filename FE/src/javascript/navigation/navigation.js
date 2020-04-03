import {navigationData} from "../data/navigationData.js"

const init = (touchCallbackHandler) => {
    registerEventListener(touchCallbackHandler);
}

const registerEventListener = (touchCallbackHandler) => {
    const buttons = document.querySelectorAll(".navigation button");

    buttons.forEach((button, index) => {
        button.addEventListener('touchend', evt => {
            if (navigationData.getCurrentTabIndex() !== index) {
                navigationData.changeCurrentTabIndex(index);
                touchCallbackHandler(index);    
            }
        })
    });
}


export default {init, registerEventListener}