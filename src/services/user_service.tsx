export const getUserData = (): any => {
  let data;

  if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
    data = localStorage.getItem("userData");
  } else {
    // Handle the case for SSR (e.g., set a default value)
    data = null; // or set some default value
  }

  return data ? JSON.parse(data) : null;
};

export const getUserToken = (): any => {
  let data;

  if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
    data = localStorage.getItem("userToken");
  } else {
    // Handle the case for SSR (e.g., set a default value)
    data = null; // or set some default value
  }

  return data ? JSON.parse(data) : null;
};

export const storeUserData = (data: any) => {
  if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
    localStorage.setItem("userData", JSON.stringify(data));
  } else {
    return false;
  }
};

export const storeUserToken = (data: any) => {
  if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
    localStorage.setItem("userToken", JSON.stringify(data));
  } else {
    return false;
  }
};

export const logoutUserData = () => {
  if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
    localStorage.removeItem("userData");
    localStorage.removeItem("userToken");
  } else {
    return false;
  }
};
