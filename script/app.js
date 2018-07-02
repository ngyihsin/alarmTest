function alarmTest() {
  var t = new Date();
  t.setSeconds(t.getSeconds() + 10);

  var data = {
    foo: "bar"
  };

  var request = window.navigator.mozAlarms.add(t, 'ignoreTimezone', data);
  request.onsuccess = function () {
    console.log("The Alarm timer has been scheduled");
  }
  request.onerror = function () {
    console.log("An error occurred: " + this.error.name);
  }

  window.navigator.mozSetMessageHandler('alarm', (mozAlarm) => {
    console.log("Alarm fired:" + JSON.stringify(mozAlarm.data));
    var output_result = document.getElementById('output');
    output_result.textContent = "Alarm fired:" + JSON.stringify(mozAlarm.data);

    var audioContainer = document.querySelector('.audio-container');
    audioContainer.innerHTML = '';
    var player = document.createElement('audio');
    var source1 = document.createElement('source');

    player.controls = true;
    player.muted = false;
    source1.src = 'audio/dragon.ogg';
    source1.type = 'audio/ogg';

    player.appendChild(source1);
    audioContainer.appendChild(player);
    player.style.width='200px';
    player.style.height='160px';
    player.play();
    player.focus();
  });
}

window.addEventListener('load', alarmTest);
