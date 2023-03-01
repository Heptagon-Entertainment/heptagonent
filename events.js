var isMissionButtonPressed = false;

function missionButtonClick() {
  var textBox = document.getElementById("mission-box");
  var button = document.getElementById("mission-button");

  var text1 =   `<h1>
                    <span class="bold-text">Our mission</span> is to provide
                    <br />
                    <i><u>multimedia content</u></i> for
                    <br />
                    <span class="bold-text">everyone around the globe.</span>
                </h1>`;

  var text2 =   `<h1>
                    We want to convey a
                    <br />
                    <i>positive message</i>, especially
                    <br />
                    <span class="bold-text">when times are rough.</span>
                </h1>`;

  if (!isMissionButtonPressed) {
    textBox.innerHTML = text2;
    isMissionButtonPressed = true;
    button.style.backgroundColor = "#7cddf8"
    textBox.style.borderBottom = "0.625rem solid #7cddf8"
  } else {
    textBox.innerHTML = text1;
    isMissionButtonPressed = false;
    button.style.backgroundColor = "#45ff79"
    textBox.style.borderBottom = "0.625rem solid #45ff79"
  }
}
