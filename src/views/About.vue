<template>
    <h1>{{ greeting }}</h1>
    <p>{{ content }}</p>
</template>

<script>
export default {
    name: "About",
    data() {
        return {
            greeting: this.$route.params.lang === "en" ? "Hi " : "Hallo",
            content: "Hier könnt ein Text über ich stehen, der beschreibt, wer ich bin, was ich mache und dass ich Katzen mag. Tatsächlich ist dies aber nur ein Platzhalter für die About-Komponente, damit ich den Vue-Router ausprobieren kann und auch etwas sehe."
        }
    }
}
</script>

<style scoped>

</style>