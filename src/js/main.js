window.addEventListener('DOMContentLoaded', function () {
    console.log('ok')

    slider(document.querySelector('#slider-1'), {'mode': 'full', 'view': 3, 'marginRight': 30})
    slider(document.querySelector('#slider-2'), {'mode': 'container', 'view': 3, 'marginRight': 30})
    
    function slider(slider, options) {
        const slider_items = slider.querySelectorAll('.slider__item')
        const slider_items_lenght = slider_items.length -1
        const prev = slider.querySelector('.slider__prev')
        const next = slider.querySelector('.slider__next')

        const view  = options.view
        let current = 0
        const marginRight = options.marginRight || 30
        const total_step = slider_items_lenght - view

        
        if (options.mode === 'container') {
            slider_items.forEach((el) => {
                el.style.minWidth = `calc(100% / ${view})`
                el.style.marginRight = marginRight
            })
        } else if (options.mode === 'full') {
            slider_items.forEach((el) => {
                el.style.minWidth = `calc(100% / ${view} - ${marginRight * (view - 1) / view * 2}px)`
                el.style.marginRight = marginRight
            })
        }

        goSlide()

        next.addEventListener('click', (e) => {
            current > total_step ? current : current++
            goSlide()
        })

        prev.addEventListener('click', (e) => {
            current <= 0 ? current : current--
            goSlide()
        })

        function goSlide() {
            if (options.mode === 'full') {

                if (current > total_step) { //последний слайд
                    next.classList.add('disable')
                    prev.classList.remove('disable')
    
                    slider_items.forEach((el) => {
                        el.style.transform = `translateX(calc((100% * -${current}) + calc(${marginRight}px * -${current}) + ${marginRight * 2}px))`
                    })
                } else if (current > 0) {
                    next.classList.remove('disable')
                    prev.classList.remove('disable')
    
                    slider_items.forEach((el) => {
                        el.style.transform = `translateX(calc((100% * -${current}) + calc(${marginRight}px * -${current}) + ${marginRight}px))`
                    })
                } else { //первый слайд
                    prev.classList.add('disable')
                    next.classList.remove('disable')
    
                    slider_items.forEach((el) => {
                        el.style.transform = `translateX(calc((100% * -${current}) + calc(${marginRight}px * -${current})))`
                    })
                }

            } else if (options.mode === 'container') {

                if (current > total_step) { //последний слайд
                    next.classList.add('disable')
                    prev.classList.remove('disable')
    
                    slider_items.forEach((el) => {
                        el.style.transform = `translateX(calc(100% * -${current} - ${marginRight * current}px))`
                    })
                } else if (current > 0) {
                    next.classList.remove('disable')
                    prev.classList.remove('disable')
    
                    slider_items.forEach((el) => {
                        el.style.transform = `translateX(calc(100% * -${current} - ${marginRight * current}px))`
                    })
                } else { //первый слайд
                    prev.classList.add('disable')
                    next.classList.remove('disable')
    
                    slider_items.forEach((el) => {
                        el.style.transform = `translateX(calc(100% * -${current} - ${marginRight * current}px))`
                    })
                }

            }
        }

    }


    function tabs() {
        const tabs = document.querySelector('.tabs')
        
        tabs.addEventListener('click', (e) => {
            if (e.target.dataset.tabsLink) {
                e.preventDefault()

                tabs.querySelector('[data-tabs-link].active').classList.remove('active')
                e.target.classList.add('active')

                tabs.querySelector('[data-tabs-item].active').classList.remove('active')
                tabs.querySelector(`[data-tabs-item="${e.target.dataset.tabsLink}"]`).classList.add('active')
            }

        })
    }
    tabs()
});