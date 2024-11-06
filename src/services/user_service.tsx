export const getUserData = (): any => {
    const data = localStorage.getItem("userData");
    return data ? JSON.parse(data) : null;
};

export const getUserToken = (): any => {
    const data = localStorage.getItem("userToken");
    return data ? JSON.parse(data) : null;
};

export const storeUserData = (data: any) => {
    localStorage.setItem("userData", JSON.stringify(data));
};

export const storeUserToken = (data: any) => {
    localStorage.setItem("userToken", JSON.stringify(data));
};

export const logoutUserData = () => {
    localStorage.removeItem("userData");
    localStorage.removeItem("userToken");
};