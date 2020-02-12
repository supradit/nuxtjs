<template>
    <div>
        <h1>Dynamic Routes</h1><br />
        เรียกแบบนี้ http://localhost:3000/posts/game <br />
        {{id}} - {{post.title}} <br />
        Relate Content - แบบที่ 1 - Refresh<br />
        <ul>
            <li v-for="row in relatepost" :key="row.id">
                <a :href="`/posts/${row.id}`">{{row.title}}</a>
            </li>
        </ul>
        Relate Content - แบบที่ 2 - Non Refresh<br />
        <ul>
            <li v-for="row in relatepost" :key="row.id">
                <nuxt-link :to="`/posts/${row.id}`">{{row.title}}</nuxt-link>
            </li>
        </ul>
        Relate Content - แบบที่ 3 - Non Refresh<br />
        <ul>
            <li v-for="row in relatepost" :key="row.id">
                <nuxt-link :to="{name: 'posts-id', params: {id: row.id}}">{{row.title}}</nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    data(){
        return{
            id: this.$route.params.id,
            posts:[
                {
                    id: 'game',
                    title: 'detail'
                },
                {
                    id: 'type',
                    title: 'papaya'
                },
                {
                    id: 'pakarun',
                    title: 'maya'
                },
                {
                    id: 'mahanakorn',
                    title: 'appearannce'
                }
            ]
        }
    },
    computed: {
        post(){
            return this.posts.find(post => post.id === this.id)
        },
        relatepost(){
            return this.posts.filter(post => post.id !== this.id)
        }
    },
}
</script>