let lastShakeTime = 0;

if (window.DeviceMotionEvent) {
  window.addEventListener("devicemotion", function(event) {
    const acc = event.accelerationIncludingGravity;
    const totalAcceleration = Math.sqrt(
      acc.x * acc.x + acc.y * acc.y + acc.z * acc.z
    );

    const now = new Date().getTime();
    if (totalAcceleration > 20 && now - lastShakeTime > 2000) {
      lastShakeTime = now;
      document.getElementById("surpriseImage").style.display = "block";
    }
  }, true);
} else {
  alert("Bu özellik cihazınızda desteklenmiyor.");
}
