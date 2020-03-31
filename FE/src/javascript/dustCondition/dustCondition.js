const render = () => {
  const content = document.querySelector(".content");
  const dustCondition = `<div class="dustCondition">
    <div class="dustInfo">
      <div class="gradeEmoji"></div>
      <div class="grade"></div>
        <span class="dustValue"></span>
        <span class="timeValue"></span>
        <div class="measureStation"><span class="stationName"></span><span></span></div>
    </div>
    <div class="dustGraph">
      <ul>
      <li><div class="graph"></div><span class="graphValue"></span></li>
      </ul>
    </div>
    </div>`;

  content.innerHTML = dustCondition;
};

const init = () => {};

const registerEventListener = () => {};

export default { render, init, registerEventListener };
