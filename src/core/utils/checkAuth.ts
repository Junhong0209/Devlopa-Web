const checkAuth = () => {
  if (typeof window !== "undefined") {
    return !!sessionStorage.getItem("access_token");
  }
  return null;
};

export default checkAuth;
