<template>
  <div>
    <h1>Call computed && method && v-if && v-show</h1>
    <br />
    <h3>Hello, {{ name }}</h3>
    <br />
    <h3>UpperName, {{ upperName }}</h3>
    <br />
    <h3>Salary, {{ salary }}</h3>
    <br />
    <h3>Salary*12, {{ salary * 12 }}</h3>
    <br />
    <h3>Salary*12, {{ tax }}</h3>
    <br />
    <h3 v-if="ok">If True</h3>
    <br />
    <h3 v-show="ok">Toggle</h3>
    <br />One Way -
    <input type="text" :value="name" />
    <br />Two Way - <input type="text" v-model="name" /> Parameter Will Changed
    <br />Method -
    <button @click="doSave">SAVE</button>
    <br />Toggle -
    <button @click="doToggle">Toggle</button>
    <br />
  </div>
</template>

<script>
export default {
  data() {
    // setInterval(() => {
    // this.name += '*'
    // }, 1000)

    return {
      name: "Supradit Roongsri",
      salary: 2000,
      ok: true
    };
  },
  computed: {
    upperName() {
      return this.name.toUpperCase();
    },
    tax() {
      var income = this.salary * 12;
      // return income
      if (income < 100000) {
        return 0;
      } else {
        return 1;
      }
    }
  },
  methods: {
    doSave() {
      console.log("Save Action!!", this.name, this.upperName);
    },
    doToggle() {
      this.ok = !this.ok;
    }
  }
};
</script>
