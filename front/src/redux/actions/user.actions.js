export const login = (payload) => {
    return {
        type: 'LOGIN',
        payload,
    }
}

export const isLogged = (payload) => {
    return {
      type: 'IS_LOGGED',
      payload,
    };
  };

export const logout = () => {
    return {
        type: 'LOGOUT',
    }
}
