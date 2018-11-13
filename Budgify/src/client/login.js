/*********************
 * Views
*********************/
const clearForm = () => {
    document.querySelector('.login__container').innerHTML = '';
    window.location.href.split('').splice(0, 22).join('');
}

export const activeUser = () => {
    let active = document.querySelector('.usernameActive');

    if (active) {
        return active.textContent;
    } else {
        return false;
    }
}

/**********************
 * Controllers
**********************/
document.querySelector('.login__container').addEventListener('click', e => {
    if (e.target.matches('.x')) clearForm();
});




