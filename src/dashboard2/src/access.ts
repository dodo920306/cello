export default (initialState: AuthAPI.Token) => {
  return {
    isLogin: !!initialState?.token,
  };
};
