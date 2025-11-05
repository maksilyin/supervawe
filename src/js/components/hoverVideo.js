document.addEventListener("DOMContentLoaded", function () {
  // Получаем все элементы с классом hover-video
  const videoContainers = document.querySelectorAll(".hover-video");

  videoContainers.forEach((container) => {
    // Находим видео и постер внутри каждого контейнера
    const video = container.querySelector(".hover-video__player");
    const poster = video.getAttribute("poster");

    video.addEventListener("error", function () {
      console.error("Ошибка загрузки видео:", video.src);
    });

    // Обработчик наведения мыши
    container.addEventListener("mouseenter", function () {
      // Воспроизводим видео
      video.play();
    });

    // Обработчик ухода мыши
    container.addEventListener("mouseleave", function () {
      // Пауза видео
      video.pause();
      // Сбрасываем время воспроизведения в начало
      video.currentTime = 0;
      // Показываем постер (на всякий случай)
      video.setAttribute("poster", poster);
    });
  });
});
