<template>
    <div>
        <h1>Get Data From State - Advence</h1><br />
        <img v-if="loading" src="https://i.imgur.com/JfPpwOA.gif">
        <ul v-else>
            <li v-for="product in products" :key="product.id">
                {{product.title}} - {{product.price}}
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    data(){
        return{
            loading: false
        }
    },
    computed: {
        // เรียก Value มาจาก api/shop
        products () {
            return this.$store.getters.availableProducts
        }
    },
    created(){
        this.loading = true
        this.$store.dispatch('fetchProducts').then(() => this.loading = false)
    }
}
</script>