import {fetchRequest} from "../util/fetchrequest.js"
import dustGraphComponent  from "./dustGraphComponent.js"
import dustGradeSetting  from "./dustGradeSetting.js"


let fetchdata ;
let currentIndex=0;
let date = "오늘 ";

const render = () => {
  const content = document.querySelector(".content");
  const dustCondition = `<div class="dustCondition">
    <div class="dustInfo">
    <div class="title">미세먼지 앱</div> 
      <div class="gradeEmoji"></div>
      <div class="grade"></div>
        <span class="dustValue"></span>
        <span class="timeValue"></span>
        <div class="measureStation"><span class="stationName"></span><span> 측정소 기준</span></div>
    </div>
    <div class="dustGraph">
      <ul>
      <li><div class="graph"></div><span class="graphValue"></span></li>
      </ul>
    </div>
    </div>`;

  content.innerHTML = dustCondition;
};

const init = () => {
    const requestURL = `http://52.79.74.109:8080/location?latitude=37.4756824&longitude=126.97742860000001`;
    fetchRequest(requestURL, "GET")
      .then(response => response.json())
      .then(data => {
        fetchdata = data;
        renderDustInfo(data,0);
        registerEventListener();
      });
};

const registerEventListener = () => {
  const dustGraph = document.querySelector(".dustGraph");

  dustGraph.addEventListener('scroll',e=>{
    let scrollTop = e.target.scrollTop;
    const scrollLength = 208;
    currentIndex = Math.floor(scrollTop/(scrollLength/fetchdata.dustValues.length));
    if(currentIndex>=fetchdata.dustValues.length) return;

    renderDustInfo(fetchdata,currentIndex);
  })
};

function renderDustInfo(data, index) {
  const gradeEmoji = document.querySelector(".gradeEmoji");
  const grade = document.querySelector(".grade");
  const dustValue = document.querySelector(".dustValue");
  const timeValue = document.querySelector(".timeValue");
  const stationName = document.querySelector(".stationName");
  const dustInfo = document.querySelector(".dustInfo");

  //미세먼지 등급
  let gradeDisplay = dustGradeSetting.setGradeDisplay(data.dustValues[index].pm10Grade);

  dustInfo.style.background = `linear-gradient(to top,white, ${gradeDisplay.background})`;
  grade.innerHTML = gradeDisplay.grade;
  gradeEmoji.innerHTML = gradeDisplay.emoji;
  dustValue.innerHTML = data.dustValues[index].pm10Value + "&micro;g/㎥";
  stationName.innerHTML = data.stationName;

  if(data.dustValues[index].datetime==="24") date = "어제 "
  if(data.dustValues[index].datetime==="01") date = "오늘 "
  timeValue.innerHTML = date+data.dustValues[index].datetime + ":00";

  //미세먼지 그래프
  const dustGraph = document.querySelector(".dustGraph");
  const graphUl = dustGraphComponent.makeGraphHTML(data);
  dustGraph.innerHTML = graphUl;
  dustGraphComponent.makeGraph(data);

  const graph = document.querySelectorAll(".graph");
  graph[index].style.opacity = "0.5";

}

export default { render, init, registerEventListener };
