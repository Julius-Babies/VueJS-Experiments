<template>
    <h1>CryptoJS</h1>
    <p @click="hash">This site is an experiment for NPM-packages. In this example, you can enter a string which will be
        converted to a variety of hashes.</p>
    <input type="text" placeholder="Your Text" v-model="text.input" @input="hash">
    <div>
        <h3>MD5</h3>
        <code>{{ text.md5 }}</code>
    </div>
    <div>
        <h3>SHA1</h3>
        <code>{{ text.sha1 }}</code>
    </div>
    <div>
        <h3>SHA256</h3>
        <code>{{ text.sha256 }}</code>
    </div>
    <div>
        <h3>SHA512</h3>
        <code>{{ text.sha512 }}</code>
    </div>
    <div>
        <h3>AES (password: "Cat")</h3>
        <code>{{ text.aes }}</code>
    </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import * as CryptoJS from 'crypto-js';
export default defineComponent({
    name: "Crypto",
    data() {
        return {
            text: {
                input: "Enter text here",
                md5: "",
                sha1: "",
                sha256: "",
                sha512: "",
                aes: ""
            }
        }
    },
    methods: {
        hash() {
            this.text.md5 = CryptoJS.MD5(this.text.input).toString()
            this.text.sha1 = CryptoJS.SHA1(this.text.input).toString()
            this.text.sha256 = CryptoJS.SHA256(this.text.input).toString()
            this.text.sha512 = CryptoJS.SHA512(this.text.input).toString()
            this.text.aes = CryptoJS.AES.encrypt(this.text.input, "Cat").toString()
        }
    },
    mounted() {
        this.hash()
    }
})
</script>

<style scoped>

</style>