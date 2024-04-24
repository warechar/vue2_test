<script>
export default {
  props:{
    list:{type:Array, required: true}
  },
  name: "MyTable"
}
</script>

<template>
  <div>
    <table>
      <thead>
      <tr>
        <slot name="header"></slot>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in list" :key="item.id">
        <slot name="body" :obj="item"></slot>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>

</style>