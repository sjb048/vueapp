<template>
    <div id="app">
        <div v-if="loading">...loading</div>
        <div v-if="loading && !error">...welcome</div>
        <div v-if="!loading && error">Please try again</div>

        <router-view/>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    name: 'App',
    methods: {
        ...mapActions(['initialLoad'])
    },
    data () {
        return {
            loading: true,
            error: false
        }
    },
    async mounted () {
        try {
            await this.initialLoad();
            this.loading = false;
        } catch (err) {
            this.loading = false;
            this.error = true;
        }
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
