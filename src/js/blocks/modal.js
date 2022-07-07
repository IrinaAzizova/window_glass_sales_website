import getScrollbarWidth from "./getScrollbarWidth";

const modal = ({
    triggerSelector,
    modalWindowSelector,
    closeSelector
}) => {
    const triggerBtn = document.querySelectorAll(triggerSelector),
          modalWindow = document.querySelector(modalWindowSelector),
          closeBtn = modalWindow.querySelector(closeSelector);

    function openModal() {
        modalWindow.classList.add('animated', 'fadeIn');
        modalWindow.style.display = 'block';
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `${getScrollbarWidth()}px`;
    }

    function closeModal() {     
        modalWindow.style.display = 'none';
        document.body.style.overflow = 'visible';
        document.body.style.marginRight = 0;
    }

    triggerBtn.forEach(btn => {
        btn.addEventListener('click', (event) => {
            console.log('ok');
            openModal();
        });
    });

    modalWindow.addEventListener('click', (event) => {
        console.log(event.target);
        if (event.target && event.target.matches(modalWindowSelector) || event.target.matches(closeSelector)) {
            closeModal();
        }
    });

    document.addEventListener('keydown', event => {
        if (event.code === 'Escape' && modalWindow.style.display === 'block') {
            closeModal();
        }
    });
};

export default modal;