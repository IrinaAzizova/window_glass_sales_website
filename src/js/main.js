'use strict';

import 'slick-slider';

import slider from './blocks/slider';
import modal from './blocks/modal';

document.addEventListener('DOMContentLoaded', () => {

    slider();
    modal({triggerSelector: '.popup_engineer_btn',
        modalWindowSelector: '.popup_engineer',
        closeSelector: '.popup_close strong'
    });
});