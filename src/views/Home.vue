<template>
    <div id="content">
        <div id="logo">
            <center>
                <img alt="Vue logo" src="@/assets/logo.png">
            </center>
        </div>
        <h1>{{ greeting }}</h1>
        <div id="greeting">
            <input placeholder="Your Name" type="text" ref="name"><br>
            <button @click="greet">Greeting</button>
        </div>
        <p @click="goToAbout">Go to About</p>
    </div>
</template>

<script>
export default {
    name: "Home",
    data() {
        return {
            greeting: "Hi, Vue!"
        }
    },
    methods: {
        greet() {
            this.greeting = "Hi, " + this.$refs.name.value + "!"
        },
        goToAbout() {
            this.$router.push("/about")
        }
    }
}
</script>

<style scoped>

</style>