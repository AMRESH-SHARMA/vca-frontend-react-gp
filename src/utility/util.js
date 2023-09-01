import jwt_decode from "jwt-decode";

export const authExist = () => {
    const token = localStorage.getItem("authToken");

    if (token) {
        const decoded = jwt_decode(token);
        // console.log(decoded);
        if (decoded.exp < decoded.iat) { return false }
        return true
    } else return false
};


export const signout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userId");
    localStorage.removeItem("userName");
    window.location.reload();
    return true;
};