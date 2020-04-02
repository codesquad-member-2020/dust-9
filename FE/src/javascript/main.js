import navigation from "./navigation/navigation.js"
import dustCondition from "./dustCondition/dustCondition.js"
import dustForecast from "./dustForecast/dustForecast.js"

window.addEventListener('DOMContentLoaded', () => {
    navigation.init(navigationTouchEndHandler)

    dustCondition.render();
    dustCondition.init();
});

const navigationTouchEndHandler = (index) => {
    if (index) {
        dustForecast.render();
        dustForecast.init();
    }
    else {
        dustForecast.stop();
        dustCondition.render();
        dustCondition.init();
    }
}