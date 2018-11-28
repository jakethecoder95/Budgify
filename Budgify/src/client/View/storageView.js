const elements = {
    dataForm : document.querySelector('.data-form'),
    incInput : document.querySelector('.data-inc'),
    expInput: document.querySelector('.data-exp'),
    desInput: document.querySelector('.add__description'),
    valInput: document.querySelector('.add__value')
}

// Get Data from form input values    
// -  To be sent to Contoller to analyze data 
//    and compare with the localStorage
export const getIncDB = elements.incInput && elements.incInput.value ? elements.incInput.value : '[]';
export const getExpDB = elements.expInput && elements.expInput.value ? elements.expInput.value : '[]';

// Change input data in form to localStorage
export const inputData = (dataInc, dataExp) => {
    elements.incInput ? elements.incInput.value = dataInc : null;
    elements.expInput ? elements.expInput.value = dataExp : null;
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

export const checkInputFields = () => {
    return !(elements.desInput.value === "") && !(elements.valInput.value === "") ? true : false;
}
