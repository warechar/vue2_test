<script>
export default {
  name: "MyTag",
  props: {
    value:{type:String}
  },
  data() {
    return {
      isEdit: false,
    }
  },
  methods: {
    dbClick() {
      this.isEdit = true;
    },
    enterFun(e) {
      this.$emit("input", e.target.value)
      this.isEdit=false;
    }
  }
}
</script>

<template>
  <div>
    <input v-focus v-if="isEdit" :value="value" @keyup.enter="enterFun" placeholder="enter" @blur="isEdit = false"/>
    <div v-else class="text" @dblclick="dbClick">{{ value}}</div>
  </div>
</template>

<style scoped>

</style>