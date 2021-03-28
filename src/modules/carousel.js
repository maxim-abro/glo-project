const carousel = () => {

    class SliderCarousel {
        constructor({
            main,
            wrap,
            next,
            prev,
            infinity = false,
            position = 0,
            slidesToShow = 3,
            responsive = [{
                    breakpoint: 991,
                    slideToShow: 2,
                },
                {
                    breakpoint: 766,
                    slideToShow: 1,
                }
            ]
        }) {
            this.main = document.querySelector(main);
            this.wrap = document.querySelector(wrap);
            this.slides = document.querySelector(wrap).children;
            this.next = document.querySelector(next);
            this.prev = document.querySelector(prev);
            this.slidesToShow = slidesToShow;
            this.options = {
                position,
                infinity,
                widthSlide: Math.floor(100 / this.slidesToShow),
                maxPosition: this.slides.length - this.slidesToShow,
            };
            this.responsive = responsive;
        }

        init() {
            if (!this.main && !this.wrap) {
                console.warn('slider-carousel: необходимо два свойства, "main" и "wrap"');
            }
            this.addClass();
            this.addStyle();

            if (this.responsive) {
                this.responseInit();
            }
            if (this.prev && this.next) {
                this.controlSlider();
            } else {
                this.addArrow();
                this.controlSlider();
            }
        }

        addClass() {
            this.main.classList.add('glo-slider');
            this.wrap.classList.add('glo-slider__wrap');
            for (const item of this.slides) {
                item.classList.add('glo-slider__item');
            }
        }

        addStyle() {
            let style = document.getElementById('sliderCarusel-style');
            if (!style) {
                style = document.createElement('style');
                style.id = 'sliderCarusel-style';
            }
            style.textContent = `
                .glo-slider{
                    overflow: hidden;
                }
                .glo-slider__wrap {
                    display: flex;
                    transition: transform 0.5s;
                    will-change: transform;
                }
                .glo-slider__item {
                    flex: 0 0 ${this.options.widthSlide}%;
                    margin: auto 0;
                }
            `;
            document.head.appendChild(style);

        }

        controlSlider() {
            this.prev.addEventListener('click', this.prevSlider.bind(this));
            this.next.addEventListener('click', this.nextSlider.bind(this));
        }

        prevSlider() {
            if (this.options.infinity || this.options.position > 0) {
                --this.options.position;
                if (this.options.position < 0) {
                    this.options.position = this.options.maxPosition;
                }
                this.wrap.style.transform = 'translateX(-' + this.options.widthSlide * this.options.position + '%)';
            }
        };

        nextSlider() {
            if (this.options.infinity || this.options.position < this.options.maxPosition) {
                ++this.options.position;
                if (this.options.position > this.options.maxPosition) {
                    this.options.position = 0;
                }
                this.wrap.style.transform = 'translateX(-' + this.options.widthSlide * this.options.position + '%)';
            }
        };


        addArrow() {
            this.prev = document.createElement('button');
            this.next = document.createElement('button');

            this.prev.className = 'glo-slider__prev';
            this.next.className = 'glo-slider__next';

            this.main.appendChild(this.prev);
            this.main.appendChild(this.next);

            const style = document.createElement('style');
            style.textContent = `
            .glo-slider__next,
            .glo-slider__prev{
                margin: 0 10px;
                border:20px solid transparent;
                background: transparent;
            }
            .glo-slider__next{
                border-left-color: #19bbff;
            }
            .glo-slider__prev{
                border-right-color: #19bbff;
            }

            .glo-slider__prev:hover,
            .glo-slider__next:hover,
            .glo-slider__prev:focus,
            .glo-slider__next:focus{
                background:transporant;
                outline:transporant;
            }
            `
            document.head.appendChild(style);
        };

        responseInit() {
            const slidesToShowDefault = this.slidesToShow;
            const allResponse = this.responsive.map(item => item.breakpoint);
            const maxResponse = Math.max(...allResponse);

            const checkResponse = () => {
                const widthWindow = document.documentElement.clientWidth;
                if (widthWindow < maxResponse) {
                    for (let i = 0; i < allResponse.length; i++) {
                        if (widthWindow < allResponse[i]) {
                            this.slidesToShow = this.responsive[i].slideToShow;
                            this.options.widthSlide = Math.floor(100 / this.slidesToShow);
                            this.options.maxPosition = this.slides.length - this.slidesToShow;
                            this.addStyle();
                        }
                    }
                } else {
                    this.slidesToShow = slidesToShowDefault;
                    this.options.widthSlide = Math.floor(100 / this.slidesToShow);
                    this.options.maxPosition = this.slides.length - this.slidesToShow;
                    this.addStyle();
                }
            };

            checkResponse();

            window.addEventListener('resize', checkResponse);
        }
    }








    //////////////////////////////////////////////////////////

    const carousel = new SliderCarousel({
        main: '.services-elements',
        wrap: '.services-carousel',
        prev: '.arrow-left',
        next: '.arrow-right',
        slidesToShow: 3,
        infinity: true,

        responsive: [{
                breakpoint: 830,
                slideToShow: 2,
            },
            {
                breakpoint: 576,
                slideToShow: 1,
            }
        ]
    });


    carousel.init();
}

export default carousel;