// export const state = {}

// export const getters = {}

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
// เรียกใช้ค่า 
// this.$store.state.jwt_token
// เรียกใช้ฟังก์ชั่น Mutations เพื่อบันทึกค่าใหม่
// let newToken = 'KanexKane.com'
// this.$store.commit("setJwtToken", newToken);

export const state = { //=data
    products:[]
}

export const getters = {
    availableProducts(state, getters){
        //Computed
        return state.products.filter(products => products.inventory > 0)
    }
}

import shop from '@/api/shop'

export const actions = {
    fetchProducts ({commit}){
        //Make the call
        return new Promise((resolve, reject) =>{
            shop.getProducts(products => {
                commit('setProducts', products)
                // เมื่อทำงานสำเร็จให้ส่ง req.response ออกไปเป็น then
                resolve()
                // เมื่อทำงานไม่สำเร็จให้ส่ง Error(req.statusText) ออกไปเป็น fail จะใช้ reject
            })
        })
    }
}

export const mutations = {
    setProducts(state, products){
        //update products
        state.products = products
    }
}

/*
ตัวอย่าง Promise resolve and reject
function get(url) {
  / ส่งค่า promise ออกไป
  return new Promise(function(resolve, reject) {
    / Do the usual XHR stuff
    var req = new XMLHttpRequest();
    req.open('GET', url);

    req.onload = function() {
      / This is called even on 404 etc
      / so check the status
      if (req.status == 200) {
        / เมื่อทำงานสำเร็จให้ส่ง req.response ออกไปเป็น then
        resolve(req.response);
      }
      else {
        / Otherwise reject with the status text
        / เมื่อทำงานไม่สำเร็จให้ส่ง Error(req.statusText) ออกไปเป็น fail
        reject(Error(req.statusText));
      }
    };

    / Handle network errors
    req.onerror = function() {
      /เมื่อทำงานไม่สำเร็จให้ส่ง Error("Network Error") ออกไปเป็น fail                       
      reject(Error("Network Error"));
    };

    / Make the request
    req.send();
  });
}
*/
