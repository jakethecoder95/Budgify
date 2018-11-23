/*********************
 * Views
*********************/
export const clearForm = () => {
    console.log("im working");
    document.querySelector('.login__container').innerHTML = '';
    const homeURL = new URL (window.location.href.split('').splice(0, 22).join(''));
    window.location.href = homeURL;
}

export const activeUser = () => {
    let active = document.querySelector('.usernameActive');

    if (active) {
        return active.textContent;
    } 
    return false;
}




