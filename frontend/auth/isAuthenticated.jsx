export const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  return localStorage.getItem("token") !== null;
};

export const authenticationValues = () => {
  return localStorage.getItem("token");
};
