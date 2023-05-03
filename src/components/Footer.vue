<template id="footer">
    <div>
        <div id="backdrop">
            <span>This site was created for experimental purposes to learn Vue.JS 3.</span><br>
            <hr />
            <span>2023 • <a :href="home" target="_blank">Julius Babies</a></span>
        </div>
    </div>
</template>

<script>
export default {
    name: "Footer",
    data() {
        return {
            home: "https://julius.familie-babies.de"
        }
    }
}
</script>

<style scoped>
#backdrop {
    background: #c0c0c0;
    padding: 20pt 5pt;
}

#footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    text-align: center;
}

hr {
    border-width: 1px;
}
</style>