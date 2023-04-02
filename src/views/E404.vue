<template>
<h1>Error: This site does not exists! (404)</h1>
  <button id="backToHome" @click="home">Back to Home</button>
  <button @click="back">Back to last (working) page</button>
</template>

<script>
export default {
    name: "E404",
    methods: {
        home() {
            this.$router.push({name: "home"})
        },
        back() {
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>
button {
    background-color: white;
    padding: 5pt;
    margin: 3pt;
    border: 2pt #4cd094 solid;
    transition: .2s;
}

button:hover {
    background: #89e1b9;
}

#backToHome {
    background-color: #4cd094;
    color: white;
}

#backToHome:hover {
    background-color: #33ac76;
    border: #33ac76 2pt solid;
}
</style>