const elements = {
    dataForm : document.querySelector('.data-form'),
    incInput : document.querySelector('.data-inc'),
    expInput : document.querySelector('.data-exp'),
}

// Get Data from form input values    
// -  To be sent to Contoller to analyze data 
//    and compare with the localStorage
export const getIncDB = () => elements.incInput.value;
export const getExpDB = () => elements.expInput.value;

// Change input data in form to localStorage
export const inputData = (dataInc, dataExp) => {
    elements.incInput.value = dataInc;
    elements.expInput.value = dataExp;
}

// Submit the form
export const submitData = (user) => {
    user ? elements.dataForm.submit() : null;
}

// CHECK last input type (change if neccessary)
export const initPrevType = (ctrl) => {
    if (localStorage.getItem('inputTracker') === 'exp') {
        ctrl.toggleCatagoryFields();
        ctrl.changedType();
        document.querySelector('.add__type').selectedIndex = 1;
    }
}
