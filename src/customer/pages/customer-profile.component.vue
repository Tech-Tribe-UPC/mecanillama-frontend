<template>
    <customer-header-component></customer-header-component>
    <p>{{getUserName()}}</p>
</template>

<script>
import customerHeaderComponent from "../../components/customer-header.component.vue";

export default {
  name: "customer-profile",
  components: {
    customerHeaderComponent,
  },
  methods: {
      getUserName(){
       
      }
  }
}

</script>

<style>

</style>