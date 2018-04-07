function GetAuthInstance() {
    return gapi.auth2.getAuthInstance();
}

function GetCurrentUser() {
    return GetAuthInstance().currentUser.get();
}

function GetCurrentAuthResponse() {
    return GetCurrentUser().getAuthResponse();
}

export {
    GetAuthInstance,
    GetCurrentUser,
    GetCurrentAuthResponse
}