export const state = {
  name: "",
  token: ""
};

export const getters = {
  getName(state) {
    return state.name;
  },
  getToken(state) {
    return state.token;
  }
};

export const mutations = {
  setName(state, value) {
    state.name = value;
  },
  setToken(state, value) {
    state.token = value;
  }
};

export const actions = {
  setUser({ commit }, user) {
    commit("setName", user.name);
  }
};
