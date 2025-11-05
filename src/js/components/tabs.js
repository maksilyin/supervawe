document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tabs__nav-item");
  const contents = document.querySelectorAll(".tabs__panel");
  const select = document.querySelector(".equipment__select");

  // Функция для активации таба и соответствующего контента
  function activateTab(targetValue) {
    // Обновляем селект
    select.value = targetValue;

    // Обновляем табы
    tabs.forEach((tab) => {
      const tabTarget = tab.getAttribute("data-target");
      if (tabTarget === targetValue) {
        tab.classList.add("tabs__nav-item--active");
      } else {
        tab.classList.remove("tabs__nav-item--active");
      }
    });

    // Обновляем контент
    contents.forEach((content) => {
      if (content.id === targetValue) {
        content.classList.add("tabs__panel--active");
      } else {
        content.classList.remove("tabs__panel--active");
      }
    });
  }

  // Обработчики для табов
  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      const targetValue = this.getAttribute("data-target");
      activateTab(targetValue);
    });
  });

  // Обработчик для селекта
  select.addEventListener("change", function () {
    activateTab(this.value);
  });

  // Инициализация - активируем первый таб по умолчанию
  const defaultTab = document.querySelector(".tabs__nav-item--active");
  if (defaultTab) {
    activateTab(defaultTab.getAttribute("data-target"));
  } else if (tabs.length > 0) {
    activateTab(tabs[0].getAttribute("data-target"));
  }
});
