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
            <p><button @click="greet">Greeting</button></p>
            <div v-if="name === ''">
                You've never entered your name before. Enter your name to save it.
            </div>
            <button v-else @click="deleteName">Namen löschen</button>
        </div>
        <p @click="goToAbout">Go to About</p>
    </div>
</template>

<script>
export default {
    name: "Home",
    data() {
        return {
            greeting: "Hello, " + (localStorage.name === "" ? "Vue" : localStorage.name),
            name: localStorage.name
        }
    },
    methods: {
        greet() {
            this.greeting = "Hi, " + this.$refs.name.value + "!"
            let wasUnset = localStorage.name === ""
            localStorage.name = this.$refs.name.value
            if (wasUnset) {
                this.$router.go()
            }
        },
        goToAbout() {
            this.$router.push("/about")
        },
        deleteName() {
            localStorage.name = ""
            this.$router.go()
        }
    },
    mounted() {
        if (localStorage.name === undefined) {
            localStorage.name = ""
        }
    }
}
</script>

<style scoped>
#greeting {
    display: inline-block;
}
#greeting input {
    width: 200px;
    height: 20px;
    margin-bottom: 2px;
}
#greeting button {
    color: #35495e;
    width: 208px;
    padding: 2px;
    font-size: 16px;
    background: #41b681;
    border: 2pt #41b681 solid;
    border-radius: 2pt;
    transition: .2s;
}
#greeting button:hover {
    background: #4cd195;
}

img {
    display: flex;
    animation: pulse 6s ease-in-out infinite, rot 2s ease-in-out infinite;
}
#logo {
    padding-top: 20px;
    width: 290px;
    height: 290px;
    display: inline-block;
    margin-bottom: 20pt;
}
#content {
    margin-bottom: 50pt;
}
@keyframes pulse {
    0% {
        width: 230px;
        height: 230px;
    }
    50% {
        width: 200px;
        height: 200px;
    }
    100% {
        width: 230px;
        height: 230px;
    }
}
#content {
    overflow: scroll;
    padding-bottom: 50pt;
}
#header {
    position: sticky;
    top: 0;
    margin-top: 0;
}
@keyframes rot {
    0% {
        rotate: -10deg;
    }
    50% {
        rotate: 10deg;
    }
    100% {
        rotate: -10deg;
    }
}
</style>