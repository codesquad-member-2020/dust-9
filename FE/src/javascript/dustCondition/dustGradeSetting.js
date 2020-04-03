const setGradeDisplay = gradeValue => {
  const gradeDisplay = {
    emoji: null,
    grade: null,
    background: null
  };

  switch ((gradeDisplay, gradeValue)) {
    case "1":
      gradeDisplay.emoji = "😀";
      gradeDisplay.grade = "좋음";
      gradeDisplay.background = "#6096D8";
      gradeDisplay.graphColor = "#0080FF";
      break;
    case "2":
      gradeDisplay.emoji = "🙂";
      gradeDisplay.grade = "보통";
      gradeDisplay.background = "#088A68";
      gradeDisplay.graphColor = "#04B404";
      break;
    case "3":
      gradeDisplay.emoji = "😷";
      gradeDisplay.grade = "나쁨";
      gradeDisplay.background = "#FAAC58";
      gradeDisplay.graphColor = "#FE9A2E";
      break;
    case "4":
      gradeDisplay.emoji = "😱";
      gradeDisplay.grade = "매우 나쁨";
      gradeDisplay.background = "#FA5858";
      gradeDisplay.graphColor = "#DF0101";
      break;
  }
  return gradeDisplay;
};

export default { setGradeDisplay };
