import CryptoJS from "crypto-js";
import { createStore } from "vuex";

export default createStore({
  state: {
    count: -1, // Stores the current person count
    socket: null, // Stores the WebSocket instance
    yearly: null,
    daily: null,
    weather: null,
    bg: null,
  },
  getters: {
    getCount(state) {
      return state.count; // Returns the current person count
    },
    getYearly(state) {
      return state.yearly;
    },
    getDaily(state) {
      return state.daily;
    },
    getWeather(state) {
      return state.weather; // Returns the weather data
    },
    getBg(state) {
      return state.bg; // Returns the background image URL
    },
  },
  mutations: {
    setCount(state, payload) {
      state.count = payload; // Updates the count with the new person_count value
    },
    setSocket(state, socket) {
      state.socket = socket; // Updates the WebSocket instance
    },
    setyearly(state, payload) {
      state.yearly = payload; // Updates the average with the new average value
    },
    setdaily(state, payload) {
      state.daily = payload; // Updates the average with the new average value
    },
    setWeather(state, payload) {
      state.weather = payload; // Updates the weather with the new weather value
    },
    setBg(state, payload) {
      state.bg = payload; // Updates the background image URL
    },
  },
  actions: {
    async fetchWebSocketURL() {
      try {
          const response = await fetch(process.env.VUE_APP_API_URL + '/websocket-url?token=2024');
          if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
          }
          return await response.text();
      } catch (error) {
          console.error('Error fetching WebSocket URL:', error);
      }
  },
  async connectToWebSocket({ commit, state,dispatch }) {
      const url = await dispatch('fetchWebSocketURL');
        if (!url) {
            throw new Error('WebSocket URL is undefined or empty');
        }
      if (state.socket) {
        console.log("WebSocket já está conectado.");
        return;
      }

      try {
        const socket = new WebSocket(
          url,
        );
      
        // Event: Connection opened
        socket.onopen = () => {
          console.log("Conexão WebSocket estabelecida!");
        };

        // Event: Receiving messages
        socket.onmessage = (event) => {
          try {
            const data = JSON.parse(event.data);

            // Expecting a message like:
            // { "person_count": 1, "timestamp": 1735341163.1846309 }
            if (data.person_count !== undefined) {
              console.log(
                "Atualização de person_count recebida:",
                data.person_count
              );
              if (state.count < data.person_count)
                commit("setBg", "green");
              else commit("setBg", "red");
              commit("setCount", data.person_count); // Update the count in the state
            } else {
              console.warn(
                "Mensagem WebSocket recebida não contém person_count:",
                data
              );
            }
          } catch (error) {
            console.error(
              "Erro ao processar mensagem WebSocket:",
              error
            );
          }
        };

        // Event: Connection closed
        socket.onclose = () => {
          console.log("Conexão WebSocket encerrada.");
          commit("setSocket", null); // Reset the socket state
        };

        // Event: Error occurred
        socket.onerror = (error) => {
          console.error("Erro no WebSocket:", error);
        };

        commit("setSocket", socket);// Store the WebSocket instance
      } catch (error) {
        console.error(
          "Erro ao conectar ao WebSocket:",
          error
        );
      }
    },
    disconnectWebSocket({ commit, state }) {
      if (state.socket) {
        state.socket.close(); // Close the WebSocket connection
        commit("setSocket", null); // Clear the socket instance
        console.log(
          "Conexão WebSocket encerrada manualmente."
        );
      } else {
        console.log(
          "Nenhuma conexão WebSocket ativa para encerrar."
        );
      }
    },
    async fetch({ commit }, payload) {
      const date = new Date();
      const formattedDate =
        date.getFullYear().toString() +
        (date.getMonth() + 1).toString().padStart(2, "0") +
        date.getDate().toString().padStart(2, "0");
      const password = process.env.VUE_APP_PASS + formattedDate;
      console.log("crypt pass:", process.env.VUE_APP_PASS);

      try {
        const response = await fetch(
          process.env.VUE_APP_API_URL+payload,
        )
        const data = await response.json();


        const data1 = new Promise((resolve, reject) => {
          (async () => {
            try {
              if (!password || !data || !data.data) {
                return reject(
                  console.error(
                    "Missing required fields in the data."
                  )
                );
              }

              // Split the base64-encoded string into IV and encrypted data
              const [ivBase64, encryptedDataBase64] =
                data.data.split(":");

              if (!ivBase64 || !encryptedDataBase64) {
                return reject(
                  new Error("Invalid base64 string format")
                );
              }

              // Decode the base64-encoded IV and encrypted data
              let ivBuffer;
              let encryptedBuffer;

              try {
                ivBuffer =
                  CryptoJS.enc.Base64.parse(ivBase64);
                encryptedBuffer = CryptoJS.enc.Base64.parse(
                  encryptedDataBase64
                );
              } catch (error) {
                return reject(
                  new Error(
                    "Failed to decode base64: " +
                      error.message
                  )
                );
              }

              // Hash the password to create a 32-byte AES key using SHA-256
              const key = CryptoJS.SHA256(
                password
              ).toString(CryptoJS.enc.Hex);

              // Decrypt the data using AES-CBC algorithm from CryptoJS
              const decryptedData = CryptoJS.AES.decrypt(
                { ciphertext: encryptedBuffer },
                CryptoJS.enc.Hex.parse(key),
                { iv: ivBuffer }
              );

              // Convert decrypted data to string and parse as JSON
              const decryptedJson = JSON.parse(
                decryptedData.toString(CryptoJS.enc.Utf8)
              );

              // Resolve with the decrypted JSON data
              resolve(decryptedJson);
            } catch (err) {
              reject(err);
            }
          })(); // Immediately invoked async function inside Promise executor
        });
        data1.then((result) => {
          let name = payload.replace("?", ",").split(",");
          commit(`set${name[0]}`, result);
          console.log(`${name[0]}:`, result);
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    async weather({ commit }, date) {
      console.log(date[0], date[1]);
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=41.625&longitude=-8.4375&elevation=35.4&current=relative_humidity_2m,apparent_temperature&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,rain_sum,showers_sum,wind_speed_10m_max,precipitation_hours,precipitation_probability_max,sunrise,sunset,et0_fao_evapotranspiration&timezone=Europe%2FLondon&start_date=${date[0]}&end_date=${date[1]}`
      );
      const data = await response.json();
      commit("setWeather", data);
      console.log("Weather:", data);
    },
  },
  modules: {},
});
