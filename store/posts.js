export const state = () => ({
    all: [
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
})

//เปลี่ยนค่า state โดยใช้ mutations
// export const state = () => ({
//     jwt_token: '',
//     food: '',
// })

// export const mutations = {
//     setFood(state, food) {
//         state.food = food
//     },
//     setJwtToken(state, token) {
//         state.jwt_token = token
//     }
// }

// file อะไรสักอย่าง.vue
//เรียกใช้ค่า 
// this.$store.state.jwt_token
//เรียกใช้ฟังก์ชั่น Mutations เพื่อบันทึกค่าใหม่
// let newToken = 'KanexKane.com'
// this.$store.commit("setJwtToken", newToken);