export const goToLogin = (history) => {
  history.push("/login");
};

export const goToSignUpPage = (history) => {
  history.push("/signup");
};

export const goToCreatePost = (history) => {
  history.push("/createpost");
};

export const goToFeedsPage = (history, id) => {
  history.push(`/posts/${id}`);
};

export const logout = (history) => {
  localStorage.removeItem('token')
  history.push('/login')
};
