<template>
    <div>
        <h1>Mata Tag - SEO</h1><br />
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
    head(){
        return{
            title: "Gaming",
            meta:[
                {name: 'twitter:title', content: 'title'},
                {name: 'twitter:description', content: 'description'},
                {name: 'twitter:image', content: 'image path'}
            ]
        }
    },
    computed: {
        posts(){
            return this.$store.state.posts.all
        }
    },
}
</script>