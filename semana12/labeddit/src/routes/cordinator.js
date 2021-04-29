export const goToLogin = (history) => {
  history.push("/login");
};

export const goToSignUp = (history) => {
  history.push("/signup");
};

export const goToCreatePost = (history) => {
  history.push("/createpost");
};

export const goToFeeds = (history) => {
  history.push("/feed");
};

export const goToDetailsPost = (history, id) => {
  history.push(`/feed/post/${id}`);
};

export const logout = (history) => {
  localStorage.removeItem("token");
  history.push("/login");
};
