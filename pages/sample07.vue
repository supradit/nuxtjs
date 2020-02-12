<template>
    <div>
        <h1>Set Session Process</h1><br />
        <v-text-field
            v-model="form.user"
            :counter="10"
            label="Username"
            required
          ></v-text-field>
          <v-text-field
            v-model="form.pass"
            :counter="10"
            label="Password"
            required
          ></v-text-field>
        <v-btn @click="loginAction">เข้าสู่ระบบ</v-btn>
        <v-btn @click="clearAction">คืนค่า</v-btn>
    </div>
</template>

<script>

const blankform = {
    user: '',
    pass: ''
}

export default {
    data() {
        return {
            form: JSON.parse(JSON.stringify(blankform))
        }
    },
    methods: {
        //หรือใช้ express-session
        async loginAction() {
            let res = await this.$http.post('/login', this.form)
            if(!res.data.ok){
                return ''
            }
            window.sessionStorage.setItem('user', JSON.stringify({
                user : this.form.user
            }))
            this.$router.push('/home')
        },
        clearAction() {
            this.form = JSON.parse(JSON.stringify(this.blankform))
        }
    },
}
</script>