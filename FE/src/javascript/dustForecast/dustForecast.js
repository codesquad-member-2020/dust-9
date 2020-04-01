const render = () => {
    const content = document.querySelector(".content");
    const dustForecast = `<div class="dustForecast">
    <div class="dustForecast">
    <div class="imageArea">
      <img class="image" src="https://search.pstatic.net/common?quality=75&amp;direct=true&amp;src=https%3A%2F%2Fcsearch-phinf.pstatic.net%2F20200331_159%2F15856421070981Gd7U_PNG%2Fimage.png" style="display: block;">
    </div>
    <div class="informOverall">
      <p>
        ㅇ [미세먼지] 수도권*충청권*광주*전북은 '나쁨', 그 밖의 권역은 '보통'으로 예상됨. 다만, 강원영서*대구는 오전에 '나쁨'수준일 것으로 예상됨.
      </p>
    </div>
    <div class="informGrade">
      <p>
        서울 : 보통,제주 : 좋음, 전남 : 좋음,전북 : 좋음, 경남 : 좋음,경북 : 보통,울산 : 좋음,대구 : 보통,부산 : 좋음,충남 : 보통,충북 : 좋음,세종 : 보통,대전 : 보통,영동 : 나쁨,영서 : 보통,경기남부 : 보통,경기북부 : 보통,인천 : 보통
      </p>
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
    
}

const registerEventListener = () => {

}

export default {render, init, registerEventListener}