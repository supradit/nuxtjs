<template>
    <div>
        <h1>v-for</h1><br />
        <ul v-for="st in student" :key="st.code">
            <li>{{st.code}} || {{st.name}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            student: [
                {code: '000', name: 'Supradit Roongsri'},
                {code: '001', name: 'hunsa'}
            ]
        }
    }
}
</script>