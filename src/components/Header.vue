<template>
    <div class="header">
        <router-link to="/" @mouseleave="hideTooltip" @mousemove="showTooltip">{{ this.$props.site }}</router-link>
        <router-link :to="{name: 'about', params: {lang: 'de'}}">About me (DE)</router-link>
        <router-link :to="{name: 'about', params: {lang: 'en'}}">About me (EN)</router-link>
        <router-link to="/weather">Weather</router-link>
        <router-link :to="{name: 'crypto'}">Crypto</router-link>
        <router-link to="/this-page-doesnt-exist">Error 404 page</router-link>
    </div>
    <div class="tooltip" v-show="tooltipVisible">Dieser Wert ({{ this.$props.site }}) wurde per Vue injiziert.<br>Außerdem ist dieser Tooltip auch per Vue gesteuert.</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: "Header",
    props: ["site"],
    data() {
        return {
            tooltipVisible: false,
            left: "0",
            top: "0"
        }
    },
    methods: {
        showTooltip(e: MouseEvent) {
            this.left = e.clientX+5 + "px"
            this.top = e.clientY+5 + "px"
            this.tooltipVisible = true
        },

        hideTooltip() {
            this.tooltipVisible = false
        }
    }
})
</script>

<style scoped>
a {
    padding: 8px;
    border-radius: 5pt;
    transition: background-color .2s;
}
a:hover {
    background: #30ac73;
}
.header {
    height: 50px;
    text-align: left;
    padding-left: 15pt;
    line-height: 50px;
    width: 100%;
    background: #4cd195;
    margin-bottom: 30pt;
}

.tooltip {
    position: absolute;
    top: v-bind(top);
    left: v-bind(left);
    background: white;
    border: 1pt gray solid;
    border-radius: 2px;
    padding: 5px;
    text-align: left;
}
</style>