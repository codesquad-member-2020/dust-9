import {fetchRequest} from "../util/fetchrequest.js"

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
  navigator.geolocation.getCurrentPosition(function(position) {
    const requestURL = `https://dev-angelo.dlinkddns.com:8090/location?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}`;
    fetchRequest(requestURL, "GET")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        renderDustInfo(data);
      });
  });
};

const registerEventListener = () => {};

function renderDustInfo(data){

  const gradeEmoji = document.querySelector(".gradeEmoji");
  const grade = document.querySelector(".grade");
  const dustValue = document.querySelector(".dustValue");
  const timeValue = document.querySelector(".timeValue");
  const stationName = document.querySelector(".stationName");
  const dustInfo = document.querySelector(".dustInfo");

  let gradeDisplay = setGradeDisplay(data.dustValues[0].pm10Grade);

  dustInfo.style.background = `linear-gradient(to top,white, ${gradeDisplay.background})`;
  grade.innerHTML = gradeDisplay.grade;
  gradeEmoji.innerHTML = gradeDisplay.emoji;

  dustValue.innerHTML = data.dustValues[0].pm10Value+'&micro;g/㎥';
  stationName.innerHTML = data.stationName;
  timeValue.innerHTML = '오늘 '+data.dustValues[0].dataTime+':00';

  //그래프 영역
  const dustGraph = document.querySelector('.dustGraph');
  const graphUl = makeGraphHTML(data);
  dustGraph.innerHTML = graphUl;
  makeGraph(data);
}

function makeGraphHTML(data){
  const graphLi = data.dustValues.reduce(
    (render, dustValue) => (render += ` <li class="graphLi"><div class="graph">${dustValue.pm10Value}</div></li>`),
    ""
  );
  return `<ul>${graphLi}</ul>`;
}

function makeGraph(data){
  const graph = document.querySelectorAll('.graph');
  const graphLi = document.querySelectorAll('.graphLi');

  for(let i = 0; i<graph.length;i++){
    let graphWidth = graphLi[i].offsetWidth;
    let dustValue = Number(data.dustValues[i].pm10Value);
    let valueWidth = graphWidth/200*dustValue;

    let gradeDisplay = setGradeDisplay(data.dustValues[i].pm10Grade);
    graph[i].style.width = `${valueWidth}px`;
    graph[i].style.background = gradeDisplay.graphColor;
  }
  
}

function setGradeDisplay(gradeValue) {
  const gradeDisplay = {
    emoji: null,
    grade: null,
    background: null
  };

  switch (gradeDisplay, gradeValue) {
    case '1':
      gradeDisplay.emoji='😀';
      gradeDisplay.grade='좋음';
      gradeDisplay.background='#6096D8';
      gradeDisplay.graphColor ='#0080FF';
      break;
    case '2':
      gradeDisplay.emoji='🙂';
      gradeDisplay.grade='보통';
      gradeDisplay.background='#088A68';
      gradeDisplay.graphColor ='#04B404';
      break;
    case '3':
      gradeDisplay.emoji='😷';
      gradeDisplay.grade='나쁨';
      gradeDisplay.background='#FAAC58';
      gradeDisplay.graphColor ='#FE9A2E';
      break;
    case '4':
      gradeDisplay.emoji='😱';
      gradeDisplay.grade='매우 나쁨';
      gradeDisplay.background='#FA5858';
      gradeDisplay.graphColor ='#DF0101';
      break;
  }
  return gradeDisplay;
}

export default { render, init, registerEventListener };
