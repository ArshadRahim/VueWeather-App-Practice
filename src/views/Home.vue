<template>
  <div class="home">
    <h1>Xone</h1>
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="weather-card one">
            <h2 class="weather-head">Weather App</h2>
            <div class="top">
              <div class="wrapper">
                <div class="mynav">
                  <input
                    type="search"
                    name=""
                    id="input"
                    placeholder="Location"
                    v-model="query"
                    @keypress.enter.prevent="fetchWeather"
                  />
                </div>
                <div v-if="weather">
                  <h1 class="heading" v-for="i in weather.weather" :key="i.id">
                    <span v-if="weather">{{ i.main }}</span>
                  </h1>
                </div>
                <div v-else>
                  <h1 class="heading">
                    <span>Clouds</span>
                  </h1>
                </div>

                <h3 class="location" v-if="weather">
                  {{ weather.name }}, {{ weather.sys.country }}
                </h3>
                <h3 class="location" v-else>Add a Location</h3>
                <p class="temp">
                  <span class="temp-value" v-if="weather">{{
                    weather.main.temp
                  }}</span>
                  <span class="temp-value" v-else>0</span>
                  <span class="deg">0</span>
                  <a href="javascript:;"><span class="temp-type">C</span></a>
                </p>
                <div class="min-max-parent">
                  <p class="min-max">
                    <span class="temp-value">
                      Min Temp :
                      <span v-if="weather"> {{ weather.main.temp_min }} </span>
                      <span v-else> 0.00 </span>
                    </span>
                    <span class="deg">0</span>
                    <a href="javascript:;"><span class="temp-type">C</span></a>
                  </p>
                  <p class="min-max">
                    <span class="temp-value"
                      >Max Temp :
                      <span v-if="weather"> {{ weather.main.temp_max }} </span>
                      <span v-else> 0.00 </span>
                    </span>
                    <span class="deg">0</span>
                    <a href="javascript:;"><span class="temp-type">C</span></a>
                  </p>
                </div>
              </div>
            </div>
            <div class="bottom">
              <div class="wrapper">
                <ul class="forecast">
                  <a href="javascript:;"
                    ><span class="lnr lnr-chevron-up go-up"></span
                  ></a>
                  <li class="active">
                    <span class="date">Yesterday</span>
                    <span class="lnr lnr-sun condition">
                      <span class="temp"
                        >23<span class="deg">0</span
                        ><span class="temp-type">C</span></span
                      >
                    </span>
                  </li>
                  <li>
                    <span class="date">Tomorrow</span>
                    <span class="lnr lnr-cloud condition">
                      <span class="temp"
                        >21<span class="deg">0</span
                        ><span class="temp-type">C</span></span
                      >
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapActions, mapGetters } from "vuex";
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      query: "",
      weather: null,
      url_base: "http://api.openweathermap.org/data/2.5/",
      api_key: "0563afb931b8198bd4e5880c4eab248d",
    };
  },
  methods: {
    fetchWeather() {
      axios
        .get(
          `${this.url_base}weather?q=${this.query}&units=metric&appid=${this.api_key}`
        )
        .then((res) => {
          this.weather = res.data;
          console.log(res.data.weather);
        })
        .catch((error) => console.log(error));
    },

    // async fetchWeather() {
    //   {
    //     await axios
    //       .get(this.baseURL, {
    //         params: {
    //           q: this.query,
    //           lat: "0",
    //           lon: "0",
    //           id: "2172797",
    //           lang: "null",
    //           units: '"metric" or "imperial"',
    //           mode: "JSON",
    //         },
    //         headers: {
    //           "x-rapidapi-key":
    //             "05d35adc46mshefbab11537c1e96p16de4ejsn65f10bf78281",
    //           "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
    //         },
    //       })
    //       .then((response) => {
    //         console.log("res", { res: response.data });
    //         this.weather = response.data;
    //         console.log("weather Object", this.weather);
    //         this.weather(this.query);
    //         this.query = "";
    //       })
    //       .catch((error) => {
    //         console.error(error);
    //       });
    //   }
    // },

    // ...mapActions(["getWeather"]),
    // fetchWeather() {
    //   this.weather(this.query);
    //   this.query = "";
    // },
  },
  // mounted() {
  //   this.fetchWeather();
  // },
  computed: {
    // ...mapGetters(["weather"]),
  },
  // mounted() {
  //   this.getWeather();
  // },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700,800,900");
@import url("https://cdn.linearicons.com/free/1.0.0/icon-font.min.css");
body {
  font-family: "Montserrat", sans-serif;
  background: #112233;
}

.weather-card {
  margin: 30px auto;
  height: 500px;
  width: 400px;
  background: #fff;
  box-shadow: 0 1px 38px rgba(0, 0, 0, 0.15), 0 5px 12px rgba(0, 0, 0, 0.25);
  overflow: hidden;
}
.weather-card .top {
  position: relative;
  height: 280px;
  width: 100%;
  overflow: hidden;
  background: url("https://s-media-cache-ak0.pinimg.com/564x/cf/1e/c4/cf1ec4b0c96e59657a46867a91bb0d1e.jpg")
    no-repeat;
  background-size: cover;
  background-position: center center;
  text-align: center;
}
.weather-card .top .wrapper {
  padding: 30px;
  position: relative;
  z-index: 1;
}
.weather-card .top .wrapper .mynav {
  height: 10px;
}
.weather-card .top .wrapper .mynav .lnr {
  color: #fff;
  font-size: 20px;
}
.weather-card .top .wrapper .mynav .lnr-chevron-left {
  display: inline-block;
  /* float: left; */
}
.weather-card .top .wrapper .mynav .lnr-cog {
  display: inline-block;
  /* float: right; */
}
.weather-card .top .wrapper .heading {
  margin-top: 30px;
  font-size: 25px;
  font-weight: 400;
  color: #fff;
}
.weather-card .top .wrapper .location {
  margin-top: 20px;
  font-size: 16px;
  font-weight: 400;
  color: #fff;
}
.weather-card .top .wrapper .temp {
  margin-top: 16px;
}
.weather-card .top .wrapper .temp a {
  text-decoration: none;
  color: #fff;
}
.weather-card .top .wrapper .temp a .temp-type {
  font-size: 40px;
}
.weather-card .top .wrapper .temp .temp-value {
  display: inline-block;
  font-size: 45px;
  font-weight: 600;
  color: #fff;
}
.weather-card .top .wrapper .temp .deg {
  display: inline-block;
  font-size: 15px;
  font-weight: 600;
  color: #fff;
  vertical-align: top;
  /* margin-top: 10px; */
}
.weather-card .top:after {
  content: "";
  height: 100%;
  width: 100%;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
}
.weather-card .bottom {
  padding: 0 30px;
  background: #fff;
}
.weather-card .bottom .wrapper .forecast {
  overflow: hidden;
  margin: 0;
  font-size: 0;
  padding: 0;
  padding-top: 20px;
  max-height: 155px;
}
.weather-card .bottom .wrapper .forecast a {
  text-decoration: none;
  color: #000;
}
.weather-card .bottom .wrapper .forecast .go-up {
  text-align: center;
  display: block;
  font-size: 20px;
  margin-bottom: 10px;
}
.weather-card .bottom .wrapper .forecast li {
  display: block;
  font-size: 20px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.25);
  line-height: 1em;
  margin-bottom: 10px;
}
.weather-card .bottom .wrapper .forecast li .date {
  display: inline-block;
}
.weather-card .bottom .wrapper .forecast li .condition {
  display: inline-block;
  vertical-align: middle;
  /* float: right; */
  font-size: 25px;
}
.weather-card .bottom .wrapper .forecast li .condition .temp {
  display: inline-block;
  vertical-align: top;
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
  font-weight: 400;
  padding-top: 2px;
}
.weather-card .bottom .wrapper .forecast li .condition .temp .deg {
  display: inline-block;
  font-size: 10px;
  font-weight: 600;
  margin-left: 3px;
  vertical-align: top;
}
.weather-card .bottom .wrapper .forecast li .condition .temp .temp-type {
  font-size: 20px;
}
.weather-card .bottom .wrapper .forecast li.active {
  color: rgba(0, 0, 0, 0.8);
}
.weather-card.rain .top {
  background: url("http://img.freepik.com/free-vector/girl-with-umbrella_1325-5.jpg?size=338&ext=jpg")
    no-repeat;
  background-size: cover;
  background-position: center center;
}
#input {
  display: block;
  margin: auto;
  border: none;
  outline: none;
  padding: 6px 20px;
  border-radius: 5px;
  width: 90%;
}
.weather-head {
  text-align: center;
  margin-bottom: 20px;
  margin-top: 20px;
}
.min-max-parent {
  display: flex;
  justify-content: space-around;
}
.min-max {
  color: white;
}
.min-max-parent a {
  color: white;
}
.min-max-parent .deg {
  display: inline-block;
  font-size: 8px;
  font-weight: 600;
  color: #fff;
  vertical-align: top;
}
</style>
