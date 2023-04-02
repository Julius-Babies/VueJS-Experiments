<!--suppress JSUnresolvedReference -->
<template>
<h1>Weather in Berlin</h1>
  <h4>This is a test for fetching data from a server.</h4>
  <div v-if="this.weather.temperature !== null">Temperature: {{ weather.temperature }}</div>
  <div v-if="this.weather.windspeed !== null">Windspeed: {{ weather.windspeed }}</div>
    <div v-else>Please wait...</div>
  <p>{{ weather.status }}</p>
</template>

<script>
// noinspection JSUnusedGlobalSymbols
export default {
    name: "Weather",
    data() {
        return {
            weather: {
                temperature: null,
                windspeed: null,
                status: "Loading data..."
            }
        }
    },
    mounted() {
        // fetch weather data
        fetch("https://api.open-meteo.com/v1/forecast?latitude=52.51&longitude=13.41&current_weather=true&units=metric")
            .then(response => response.json())
            .then(content => {
                console.log(content)
                this.weather.temperature = content.current_weather.temperature + "°C"
                this.weather.windspeed = content.current_weather.windspeed + " km/h"
                this.weather.status = "Data was fetched by Open-Meteo"
            })
    }
}
</script>

<style scoped>

</style>
