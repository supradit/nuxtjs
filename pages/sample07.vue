<template>
    <div>
        <h1>Session Detect Process</h1><br />
        <v-btn @click="logoutAction">ออกจากระบบ</v-btn>
    </div>
</template>

<script>
export default {
    //หากต้องการให้เช็คทุกหน้าให้ไปตั้งที่หน้า default.vue และในส่วนของหน้า Login ให้ใช้ Layout แยกกัน ไม่อย่างงั้นจะ Error
    created() {
        let userObj = JSON.parse(window.sessionStorage.getItem('user') || '{}')
        if(!userObj.user){
            return this.$router.replace('/login')
        }
    },
    methods: {
        //Function Logout
        logoutAction() {
            window.sessionStorage.removeItem('user')
            this.$router.replace('/login')
        }
    },
}
</script>