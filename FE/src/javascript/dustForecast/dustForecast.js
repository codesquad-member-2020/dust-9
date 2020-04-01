import {fetchRequest} from "../util/fetchrequest.js"

const render = () => {
    const content = document.querySelector(".content");
    const dustForecast = `<div class="dustForecast">
    <div class="dustForecast">
    <div class="imageArea">
    </div>
    <div class="informOverall">
    </div>
    <div class="informGrade">
    </div>
    <div class="controll">
      <div class="playpause">
        <input type="checkbox" value="None" id="playpause" name="check" />
        <label for="playpause"></label>
      </div>
      <div class="scrollBar">
        <div class="bar"></div>
        <button style="left:0px"></button>
      </div>
    </div>
  </div>`;

  content.innerHTML = dustForecast;
}

const init = () => {
    fetchRequest("https://93814063-fe60-4baa-bafe-c4a78779934d.mock.pstmn.io/information", "GET")
    .then(response => response.json())
    .then(data => {
        const informOverall = document.querySelector(".informOverall");
        const informGrade = document.querySelector(".informGrade");

        informOverall.innerHTML = renderInformation(data.informOverall);
        informGrade.innerHTML = renderInformation(data.informGrade);
    });

    fetchRequest("https://93814063-fe60-4baa-bafe-c4a78779934d.mock.pstmn.io/images", "GET")
    .then(response => response.json())
    .then(data => {
        const imageArea = document.querySelector(".imageArea");
        imageArea.innerHTML = renderImage(data.images);
    });
}

const registerEventListener = () => {
}

const renderInformation = (information) => {
    return `
    <p>
        ${information}
    </p>
    `;
}

const renderImage = (images) => {
    return `
    ${Object.keys(images).map(key => (
        `<img class="image" src="${images[key]}" style="display: ${key > 0 ? `none` : `block`};">\n`
    )).join('')}
    `;
}

export default {render, init, registerEventListener}