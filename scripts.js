  function toggleMenu() {
    const nav = document.getElementById("mainNav");
    const overlay = document.querySelector(".menu-overlay");
    nav.classList.toggle("show");
    overlay.classList.toggle("show");
  }

  function closeMenu() {
    document.getElementById("mainNav").classList.remove("show");
    document.querySelector(".menu-overlay").classList.remove("show");
  }

  // Автоматическое закрытие при клике по пункту меню
  document.querySelectorAll(".main-nav a").forEach(link => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });

  let lastScrollTop = 0;  // Переменная для отслеживания предыдущей позиции прокрутки
const header = document.querySelector('.main-header');

window.addEventListener('scroll', function() {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Прокрутка вниз — скрыть хедер
    header.style.top = '-80px';  // Высота хедера, который скрывается
  } else {
    // Прокрутка вверх — показать хедер
    header.style.top = '0';
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Предотвращаем отрицательные значения
});

// Функция для добавления скролла с мышью и перетаскивания
function enableMouseScroll(scrollElement) {
  let isMouseDown = false;
  let startX;
  let scrollLeft;

  scrollElement.addEventListener('mousedown', (e) => {
    isMouseDown = true;
    startX = e.pageX - scrollElement.offsetLeft;
    scrollLeft = scrollElement.scrollLeft;
    scrollElement.style.cursor = 'grabbing';  // Меняем курсор на "взято"
  });

  scrollElement.addEventListener('mouseleave', () => {
    isMouseDown = false;
    scrollElement.style.cursor = 'grab';  // Возвращаем курсор
  });

  scrollElement.addEventListener('mouseup', () => {
    isMouseDown = false;
    scrollElement.style.cursor = 'grab';  // Возвращаем курсор
  });

  scrollElement.addEventListener('mousemove', (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - scrollElement.offsetLeft;
    const walk = (x - startX) * 3;  // Умножаем на коэффициент для увеличения скорости скролла
    scrollElement.scrollLeft = scrollLeft - walk;
  });
}

// Включаем прокрутку с мышью для секции категорий
const categoryCards = document.querySelector('.category-cards');
enableMouseScroll(categoryCards);

// Включаем прокрутку с мышью для секции Features
const featureBoxes = document.querySelector('.feature-boxes');
enableMouseScroll(featureBoxes);
