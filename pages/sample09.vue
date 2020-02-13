<template>
    <div>
        <h1>Get Data From State - Basic</h1><br />
        <ul>
            <li v-for="row in posts" :key="row.id">
                {{row.title}}<br />
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    computed: {
        posts(){
            return this.$store.state.posts.all
        }
    },
}
</script>