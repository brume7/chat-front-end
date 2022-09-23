import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state() {
    return {
      messages: [],
      token: localStorage.getItem("token") || ''
    }
  },
  mutations: {
    SET_MESSAGES: (state, messages) => {
      state.messages = messages;
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    }

  },
  actions: {
    GET_MESSAGES: async function ({ commit }) {
      const messages = await axios.get("https://chat-sever-back-end.herokuapp.com/messages");
      commit('SET_MESSAGES', messages)
    },
    GET_MESSAGE: async function ({ commit }, id) {
      return axios.get(`https://chat-sever-back-end.herokuapp.com/messages/${id}`);
    },
    REGISTER: async function ({ commit }, registerData) {
      try {
        let user = (await axios.post("https://chat-sever-back-end.herokuapp.com/register", registerData)).data;
        localStorage.setItem("token", user);
        axios.defaults.headers.common['Auth'] = user;
        commit('SET_TOKEN', user);
      } catch (error) {
        console.log(error);
        if (error.response.data) {
          alert(error.response.data);
        } else {
          alert("disconnected")
        }
      }
    },
    LOGIN: async function ({ commit }, loginData) {
      try {
        let user = (await axios.post("https://chat-sever-back-end.herokuapp.com/login", loginData)).data;
        localStorage.setItem("token", user);
        axios.defaults.headers.common['Auth'] = user;
        commit('SET_TOKEN', user)
      } catch (error) {
        alert('username or password incorrect');
      }

    },
    LOGOUT: function ({ commit }) {
      commit('SET_TOKEN', '');
      localStorage.removeItem("token");
    }

  },

});

export default store;