<template>
    <div class="flex justify-center">
        <p class="text-xl mt-8 text-amber-400">Results is for query: "{{this.query}}"</p>
    </div>
    <div class="flex justify-center">
        <p class="text-3xl mt-24 font-bold uppercase text-amber-400">It is Coming Soon!</p>
    </div>
</template>

<script>
    export default {
        name: 'Search',
        components: {
        },
        data(){
            return {
                query: '',
            }
        },
        mounted() {
            let url = window.location.search.substring(1)
            let params = new URLSearchParams(url)
            let query = params.get("query")

            if(query){
                this.query = query
                // this.perfomSearch()
            }
    },
    methods: {},
        
    computed: {}
    }
</script>

<style lang="scss" scoped>

</style>