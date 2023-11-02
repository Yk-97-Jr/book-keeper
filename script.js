const modal = document.getElementById('modal');
const modalShow = document.getElementById('show-modal');
const modalClose = document.getElementById('close-modal');
const bookmarkForm = document.getElementById('bookmark-form');
const websiteNameEl = document.getElementById('website-name');
const websiteUrlEl = document.getElementById('website-url');
const bookmarkContainer = document.getElementById('bookmarks-container');

//show modal , foucs on input
function showModal(){
    modal.classList.add('show-modal');
    websiteNameEl.focus();
}

//modal event listeners
modalShow.addEventListener('click',showModal);
modalClose.addEventListener('click', () => modal.classList.remove('show-modal'));
window.addEventListener('click',(e) => {
    console.log("you cliced on:",e.target);
    e.target === modal ? modal.classList.remove('show-modal') : false
});