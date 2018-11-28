import { getIncDB, getExpDB } from "../View/storageView";

// MAIN: Checks if user exists in localStorage or DB and initializes if not
export const checkUserInit = (user) => {
    const lastUser = localStorage.getItem('userTracker')

    // Returns true if the user is not equal to the last user and false if its the same
    let justLoggedIn;
    user === false ? justLoggedIn = false : justLoggedIn = (user !== lastUser);

    // Change userTracker
    localStorage.setItem('userTracker', user);

    // Changes localStorage equal DB data if necessary
    checkNewUserDB(user, justLoggedIn);

    // Delete lastUser from localStorage if user is new
    justLoggedIn ? localStorage.removeItem(lastUser) : null;
};


// To be called in checkUserInit.  Will retrieve existing DB if it doesnt exist in localStorage
const checkNewUserDB = (user, changed) => {
    if (changed) {
        localStorage.setItem(user, `{"inc": ${getIncDB}, "exp": ${getExpDB}}`);
    }
};

// Persists the data
export const persistData = (user, data) => {
    localStorage.setItem(user, JSON.stringify(data));
};

// Gets income data as variable
export const getDataInc = (user) => {
    if (localStorage.getItem(user))
        return JSON.parse(localStorage.getItem(user)).inc;
};

// Gets expense data as variable
export const getDataExp = (user) => {
    if (localStorage.getItem(user))
        return JSON.parse(localStorage.getItem(user)).exp;
}

// Removes a user
export const removeUser = (user) => {
    localStorage.removeItem(user)
};

// Update most recent input 
export const updateInputTracker = (type) => {
    localStorage.setItem('inputTracker', type);
}