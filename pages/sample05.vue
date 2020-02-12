<template>
    <div>
        <h1>Css Class Binding && Route</h1><br />
        <div class="text" :class="{fail:score<50, good:score>=80}"><br />
            {{score}}
        </div>
        <nuxt-link to="/sample01">Link to Sample01</nuxt-link><br />
        this.$route.push('/sample01') เหมือน Nuxt-link แต่ทำใน Methods<br />
        this.$router.replace('/sample01') จะเป็นการแทนที่ Back กลับไม่ได้<br />
        this.$router.go(-1) เท่ากับกด Back 1 ครั้ง<br />
    </div>
</template>

<script>
export default {
    data() {
        return {
            score: 50
        }
    }
}
</script>

<style scoped>
.text{
    color: blue
}
.fail{
    color: red
}
.good{
    color: green
}
</style>