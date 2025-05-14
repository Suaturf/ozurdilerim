let lastShakeTime = 0;

if (window.DeviceMotionEvent) {
  window.addEventListener("devicemotion", function(event) {
    const acc = event.accelerationIncludingGravity; // Yani ivme + yerçekimi
    const totalAcceleration = Math.sqrt(
      acc.x * acc.x + acc.y * acc.y + acc.z * acc.z
    );

    const now = new Date().getTime();
    if (totalAcceleration > 20 && now - lastShakeTime > 2000) { 
      // Eğer sallanma eşik değeri geçti ve 2 saniye geçti
      lastShakeTime = now;
      document.getElementById("surpriseImage").style.display = "block"; // Görünür yap
    }
  }, true);
} else {
  alert("Bu özellik cihazınızda desteklenmiyor.");
}
