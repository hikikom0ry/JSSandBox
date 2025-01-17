window.addEventListener('DOMContentLoaded', () => {
    //tabs
    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsParent = document.querySelector('.tabheader__items'),
          tabsContent = document.querySelectorAll('.tabcontent');

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.remove('show', 'fade');
            item.classList.add('hide');

            tabs.forEach(item => {
                item.classList.remove('tabheader__item_active');
            });
        });
    }

    function showTabContent(i = 0) {
        tabs[i].classList.add('tabheader__item_active');
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');

    }

    tabsParent.addEventListener('click', event => {
        const target = event.target;
        if (target && target.classList.contains('tabheader__item')){
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
        
    });

    hideTabContent();
    showTabContent();

    //timer
    const deadline = '2022-05-04T08:32:24.510Z';
    console.log(new Date('2022-04-29T08:27:24.510Z'));

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - new Date();
        const days = Math.floor(t / (1000 * 60 * 60 * 24)),
              hours = Math.floor((t / (1000 * 60 * 60)) % 24),
              minutes = Math.floor(Math.floor((t / (1000 * 60)) % 60)),
              seconds = Math.floor(Math.floor((t / 1000) % 60));
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setClock(endtime, selector) {
        const timer = document.querySelector(selector),
              daysBlock = timer.querySelector('#days'),
              hoursBlock = timer.querySelector('#hours'),
              minutesBlock = timer.querySelector('#minutes'),
              secondsBlock = timer.querySelector('#seconds'),
              intervalId = setInterval(updateClock, 1000);
        updateClock();
        
        function updateClock() {
            const t = getTimeRemaining(endtime);

            if (t.total / 1000 >= 0) {
                daysBlock.innerHTML = getZero(t.days);
                hoursBlock.innerHTML = getZero(t.hours);
                minutesBlock.innerHTML = getZero(t.minutes);
                secondsBlock.innerHTML = getZero(t.seconds);
                
            } else {
                clearInterval(intervalId);
            }
            
        }

        function getZero(num) {
            if (num >= 0 && num < 10) {
                return `0${num}`;
            } else {
                return `${num}`;
            }
        }
    }
    setClock(deadline, '.timer');

    //modal

    const modalTrigger = document.querySelectorAll('[data-modal]'),
          modal = document.querySelector('.modal'),
          modalCloseBtn = document.querySelector('[data-close]');

    modalTrigger.forEach((item) => {
        item.addEventListener('click', showModal);
    });

    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }

    function showModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimer);
    }

    modalCloseBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', event => {
        if (event.code == "Escape" && modal.classList.contains('show')) {
            closeModal(); 
        }
    });

    window.addEventListener('scroll', (event) => {
       if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
           showModal();
           
       }
    });

    // const modalTimer = setTimeout(showModal, 5000);

    //Используем классы для создания карточек

    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.transfer = 72;
            this.parent = document.querySelector(parentSelector);

            this.convertToRub();
        }

        convertToRub() {
            this.price = this.price * this.transfer;
        }

        render() {
            const div = document.createElement('div');
            div.innerHTML = `
                <div class="menu__item">
                    <img src=${this.src} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> руб/день</div>
                    </div>
                </div>
            `;
            this.parent.append(div);
        }
        
    }
    
    new MenuCard(
        "img/tabs/vegy.jpg", 
        "vegy", 
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        9,
        ".menu div.container"
        ).render();
    
    new MenuCard(
        "img/tabs/elite.jpg", 
        "elite", 
        'Меню “Премиум”',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        15,
        ".menu div.container"
        ).render();
    
    new MenuCard(
        "img/tabs/post.jpg", 
        "post", 
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        8,
        ".menu div.container"
        ).render();
});


