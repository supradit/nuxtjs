<template>
    <div>
        <h1>Two Way Binding</h1><br />
        <h3>Hello, {{name}} </h3><br />
        One Way - <input type="text" :value="name"><br />
        Two Way - <input type="text" v-model="name"> Parameter Will Changed
    </div>
</template>

<script>
export default {
    data() {
        // setInterval(() => {
        // this.name += '*'
        // }, 1000)
        
        return {
            name: 'Supradit Roongsri'
        };
    },
    
}
</script>