import navigation from "./navigation/navigation.js"
import dustCondition from "./dustCondition/dustCondition.js"
import dustForecast from "./dustForecast/dustForecast.js"

window.addEventListener('DOMContentLoaded', () => {
    dustCondition.render();
});