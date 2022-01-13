export default function TabModule() {
    if ($('.tab-info').length) {
        const $ = document.querySelector.bind(document);
        const $$ = document.querySelectorAll.bind(document);

        const tabs = $$('.tab-info .tab-title');
        const tabsp = $$('.tab-info  .tab-title p');
        const tabfirst = $$('.tab-info  .tab-first');
        const panes = $$('.tab-info .tab-content-box');


        if (tabs) {
            const tabActive = $('.tab-info  .tab-title.active p');
            const line = $('.tab-info  .tab-link .tab-line');

            if (line) {
                line.style.left = tabActive.offsetLeft + 'px';
                line.style.width = tabActive.offsetWidth + 'px';
            }

            tabs.forEach((tab, index) => {
                const pane = panes[index];
                tab.onclick = function () {
                    $('.tab-info  .tab-title.active').classList.remove('active');
                    $('.tab-info  .tab-content-box.active').classList.remove('active');

                    line.style.left = this.offsetLeft + 30 + 'px';
                    // line.style.width = this.offsetWidth + 'px';
                    this.classList.add('active');
                    pane.classList.add('active');
                }
            })

            tabsp.forEach((tab, index) => {
                // const pane = panes[index];
                tab.onclick = function () {
                    line.style.width = this.offsetWidth + 'px';
                }
            })
            tabfirst.forEach((tab, index) => {
                const pane = panes[index];
                tab.onclick = function () {
                    $('.tab-info  .tab-title.active').classList.remove('active');
                    $('.tab-info  .tab-content-box.active').classList.remove('active');

                    line.style.left = this.offsetLeft + 'px';
                    console.log(this.offsetLeft)

                    this.classList.add('active');
                    pane.classList.add('active');
                }
            })

        }
    }

    if ($('.tab-post').length) {
        const $ = document.querySelector.bind(document);
        const $$ = document.querySelectorAll.bind(document);

        const tabs = $$('.tab-post .tab-title');
        const panes = $$('.tab-post .tab-content-box');


        if (tabs) {
            tabs.forEach((tab, index) => {
                const pane = panes[index];
                tab.onclick = function () {
                    $('.tab-post .tab-title.active').classList.remove('active');
                    $('.tab-post .tab-content-box.active').classList.remove('active');

                    this.classList.add('active');
                    pane.classList.add('active');
                }
            })
        }
    }
}