// List Of Registered Rescuers
// Printing the 150 names
const printStudentNames = function () {
  const firstRowNames = document.querySelector('#first-row-names');
  const secondRowNames = document.querySelector('#second-row-names');
  const thirdRowNames = document.querySelector('#third-row-names');

  const names = [
    'Moatasm Khairy',
    'Mohamed Ahmed',
    'Mohamed Khairat',
    'Kareem Ehab',
    'Ahmed Atef',
    'Ahmed Hakim',
    'Yousef Abdelrahman',
    'Abdallah yehia',
    'Abanoub yehia',
    'christien Awaad',
    'Mikle Atef',
    'Youstina Hefzy',
    'Samir Ayman',
    'Kenzy Atef',
    'Yousef Mamdouh',
    'Ahmed Ashraf',
    'Seif Hesham',
    'Kareem Mohamed',
    'Anas Rashwan',
    'Kareem Abdelazez',
    'Marwan Mohamed',
    'Farah Hesham',
    'Mariem Mohamed',
    'Asmaa Galal',
    'Amir Mahmoud',
    'Mohamed Samir',
    'Shreen Reda',
    'Georgina tawaf',
    'Amina Khalil',
    'Mena Mostafa',
    'Aya Ahmed',
    'Karma sameh',
    'Merna Mostafa',
    'Salma Ahmed',
    'Soha Emad',
    'Malak Mohamed',
    'Jana Hazem',
    'Julia Sameh',
    'Malek Mohamed',
    'Gamal Mohamed',
    'Alaa Emad',
    'Fatma Mostafa',
    'Haleem Ahmed',
    'Ehab Noor',
    'Kareem mostafa',
    'kareem mohamed',
    'kareem alaa',
    'kareem sherif',
    'hassan sherif',
    'hassan mohamed',
    'hussiem mohamed',
    'samah mohamed',
    'mohamed yehia',
    'mohamed sameh',
    'abdallah mohamed',
    'abdallah ahmed',
    'mohamed hamdy',
    'hazem khaled',
    'hassan ismael',
    'eslam mohamed',
    'abdallah rashwan',
    'abdelrhman rashwan',
    'aycel adel',
    'aycel mohamed',
    'aycel khaled',
    'rana khaled',
    'mohamed farouk',
    'mohamed fouad',
    'amr sherif',
    'amr hussam',
    'amr khaled',
    'ahmed khaled',
    'hassan atef',
    'sherif waled',
    'mostafa mohamed',
    'omar mokhtar',
    'omar ehab',
    'omar mohamed',
    'omar hazem',
    'omar khaled',
    'ramy ahmed',
    'adham ahmad',
    'salma sherif',
    'jasmine rashed',
    'eman hafez',
    'alaa hamed',
    'lara emad',
    'rana bassiony',
    'heba emad',
    'juliana osama',
    'lareni mohamed',
    'hader hamed',
    'rama wael',
    'malak mohy',
    'rodina azab',
    'abdelrahman youssef',
    'nada magdy',
    'nada ayman',
    'aya kassab',
    'sama khaled',
    'mariam bassem',
    'rawan mazen',
    'mariam alaa',
    'laila hamza',
    'mariam ramdan',
    'sagda soliman',
    'rawan maged',
    'haneen mohamed',
    'shahd abdelrahman',
    'renad ahmed',
    'noura mohamed',
    'farah hafez',
    'hania abdelhamid',
    'haya abdelsameea',
    'safa mahmoud',
    'shaimaa khaled',
    'mayar khaled',
    'merna ashraf',
    'mehad magdy',
    'eslam bahgat',
    'ebram atef',
    'abdelrahman masood',
    'gerges nasser',
    'ziad ashraf',
    'ayman nasser',
    'nour mohamed',
    'youssef ali',
    'ali gamal',
    'mostafa mekawy',
    'mostafa hossam',
    'youssef hossam',
    'hazem hesham',
    'omar taha',
    'omar talaat',
    'omar hussam',
    'omar ahmed',
    'bavly ehab',
    'sayed hesham',
    'mohamed mosher',
    'saher hassan',
    'maher fayez',
    'mahmoud taha',
    'ahmed adel',
    'ahmed al adawy',
    'sayed tamer',
    'youssef farid',
    'hatem ahmed',
    'mahmoud halaby',
    'khaled emam',
    'martin hany'
  ];

  const addName = function (name) {
    let p = document.createElement('p');
    p.textContent = name;
    return p;
  };

  const appendingNames = function () {
    for (let i = 0; i < 50; i++) {
      const name = addName(names[i]);
      firstRowNames.appendChild(name);
    }
    for (let i = 50; i < 100; i++) {
      const name = addName(names[i]);
      secondRowNames.appendChild(name);
    }
    for (let i = 100; i < 150; i++) {
      const name = addName(names[i]);
      thirdRowNames.appendChild(name);
    }
  };

  const init = function () {
    appendingNames();
  };

  init();
};
printStudentNames();

///////////////////////////////////////////
// Slider
const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const slider = document.querySelector('.slider');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const previousSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();
    activateDot(0);
    // slides.forEach(s => s.classList.add('slide-animation'));
  };
  init();

  // Event Handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', previousSlide);
  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });

  setInterval(function () {
    nextSlide();
  }, 5000);

  setTimeout(() => {
    slides.forEach(s => s.classList.add('slider-animation'));
  }, 100);
};

slider();

///////////////////////////////////////////
// Activating the Mobile Navigation

const btnNav = document.querySelector('.btn-mobile-nav');
const header = document.querySelector('.header');

btnNav.addEventListener('click', function () {
  header.classList.toggle('nav-open');
});

///////////////////////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll('a:link');

allLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    if (!link.classList.contains('default-link')) {
      e.preventDefault();
      const href = link.getAttribute('href');

      // Scroll back to top
      if (href === '#')
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });

      // Scroll to other links
      if (href !== '#' && href.startsWith('#')) {
        const sectionEl = document.querySelector(href);
        sectionEl.scrollIntoView({ behavior: 'smooth' });
      }
    }

    // Close mobile navigation
    if (link.classList.contains('main-nav-link'))
      header.classList.toggle('nav-open');
  });
});

///////////////////////////////////////////
// Sticky navigation

const sectionHeroEl = document.querySelector('.section-hero');

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    // console.log(ent);

    if (!ent.isIntersecting) {
      document.body.classList.add('sticky');
    }

    if (ent.isIntersecting) {
      document.body.classList.remove('sticky');
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: '-45px'
  }
);
obs.observe(sectionHeroEl);
