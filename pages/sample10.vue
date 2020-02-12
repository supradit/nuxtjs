<template>
    <div>
        <h1>Get Data From State</h1><br />
        <ul>
            <li v-for="row in posts" :key="row.id">
                {{row.title}}<br />
            </li>
        </ul>
    </div>
</template>

<script>

import header from '@/components/header'

export default {
    computed: {
        posts(){
            return this.$store.state.posts.all
        }
    },
}
</script>