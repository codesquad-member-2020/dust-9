import dustGradeSetting  from "./dustGradeSetting.js"

const makeGraphHTML = (data) => {
    const graphLi = data.dustValues.reduce(
      (render, dustValue) => (render += ` <li class="graphLi"><div class="graph">${dustValue.pm10Value}</div></li>`),
      ""
    );
    return `<ul>${graphLi}</ul>`;
  }
  
const makeGraph = data => {
  const graph = document.querySelectorAll(".graph");
  const graphLi = document.querySelectorAll(".graphLi");

  for (let i = 0; i < graph.length; i++) {
    let graphWidth = graphLi[i].offsetWidth;
    let dustValue = Number(data.dustValues[i].pm10Value);
    let valueWidth = (graphWidth / 200) * dustValue;

    let gradeDisplay = dustGradeSetting.setGradeDisplay(data.dustValues[i].pm10Grade);

    if (Math.round(valueWidth) >= graphWidth) valueWidth = graphWidth - 1;
    graph[i].style.width = `${valueWidth}px`;
    graph[i].style.background = gradeDisplay.graphColor;
  }
};

export default {makeGraphHTML, makeGraph}