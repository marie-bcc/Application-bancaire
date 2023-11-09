import {
  logInStart,
  logInSuccess,
  logInFailure,
  logOut,
  userLoginSucess,
} from "./authSlice";

export const loginAsync = (email, password) => async (dispatch) => {
  dispatch(logInStart());

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
    dispatch(logInSuccess(data.body));
    dispatch(userLoginSucess(profileData.body));

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

export const updateUsernameAsync =
  (newUsername) => async (dispatch, getState) => {
    try {
      const token = getState().auth.token;
      console.log("Updating username to: ", newUsername);

      const response = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ userName: newUsername }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update username");
      }

      const data = await response.json();
      console.log("Update response data:", data);

      localStorage.setItem("username", newUsername);

      dispatch(userLoginSucess({ userName: newUsername }));
    } catch (error) {
      console.error("Failed to update username:", error);
    }
  };
