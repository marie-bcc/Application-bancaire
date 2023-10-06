import { logInstart, logInSucess, logInFailure, logOut } from "./authSlice";

export const loginAsync = (email, password) => async (dispatch) => {
  dispatch(logInstart());
  try {
    const response = await fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error("Identifiants incorrects");
    }

    const data = await response.json();

    localStorage.setItem("token", data.body.token);

    const profileResponse = await fetch(
      "http://localhost:3001/api/v1/user/profile",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    if (!profileResponse.ok) {
      throw new Error("Impossible de récupérer le profil");
    }

    const profileData = await profileResponse.json();

    const payload = {
      token: data.body.token,
    };

    dispatch(logInSucess(payload));
    return Promise.resolve(profileData);
  } catch (error) {
    dispatch(logInFailure(error.message));
    return Promise.reject(error);
  }
};

export const logoutAsync = () => async (dispatch) => {
  try {
    localStorage.removeItem("token");

    dispatch(logOut());
  } catch (error) {
    console.error("Failed to log out:", error);
  }
};
