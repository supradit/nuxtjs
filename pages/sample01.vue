<template>
    <div>
        <h1>One Way Binding and setInterval</h1><br />
        <h3>Hello, {{name}} </h3><br />
        <input type="text" :value="name">
    </div>
</template>

<script>
export default {
    data() {
        setInterval(() => {
        this.name += '*'
        }, 1000)
        
        return {
            name: 'Supradit Roongsri'
        };
    },
    
}
</script>