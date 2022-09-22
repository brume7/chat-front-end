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
      const messages = await axios.get("http://localhost:3000/messages");
      commit('SET_MESSAGES', messages)
    },
    GET_MESSAGE: async function ({ commit }, id) {
      return axios.get(`http://localhost:3000/messages/${id}`);
    },
    REGISTER: async function ({ commit }, registerData) {
      try {
        let user = (await axios.post("http://localhost:3000/register", registerData)).data;
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
        let user = (await axios.post("http://localhost:3000/login", loginData)).data;
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