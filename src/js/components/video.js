document.addEventListener("DOMContentLoaded", function () {
  // Выбираем все видео-контейнеры на странице
  const videoContainers = document.querySelectorAll(".video");

  videoContainers.forEach((videoContainer) => {
    const video = videoContainer.querySelector(".video__v");
    const playButton = videoContainer.querySelector(".video__play");

    // Включаем controls и убираем градиент при воспроизведении
    video.addEventListener("play", function () {
      video.setAttribute("playing", "");
      video.controls = true;
      videoContainer.classList.add("video-playing");
    });

    // Возвращаем градиент при паузе
    video.addEventListener("pause", function () {
      video.removeAttribute("playing");
      video.controls = false;
      videoContainer.classList.remove("video-playing");
    });

    // Возвращаем градиент при окончании видео
    video.addEventListener("ended", function () {
      video.removeAttribute("playing");
      video.controls = false;
      videoContainer.classList.remove("video-playing");
    });

    // Клик по видео для паузы/воспроизведения
    video.addEventListener("click", function () {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    });

    // Клик по кнопке Play (если есть)
    if (playButton) {
      playButton.addEventListener("click", function (e) {
        e.stopPropagation(); // Предотвращаем срабатывание клика по видео
        video.play();
      });
    }
  });
});
