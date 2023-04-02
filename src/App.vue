<template>
    <Header id="header" site="Home"></Header>
    <router-view></router-view>
    <Footer id="footer"></Footer>
</template>

<script>

import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";

export default {
    name: 'App',
    components: {Footer, Header}
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

a {
    color: #2c3e50;
}

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

body {
    margin: 0;
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
