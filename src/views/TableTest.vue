<template>
  <div>
    <!--    <div v-for="item in list" :key="item.id">-->
    <!--        <h3>{{ item.id }}</h3>-->
    <!--        <h2> {{ item.name }} </h2>-->
    <!--      <my-tag v-model="item.tag"></my-tag>-->
    <!--    </div>-->
    <MyTable :list="list">
      <template #header>
        <th>ID</th>
        <th>name</th>
        <th>tag</th>
      </template>

      <template #body="{obj}">
        <td>{{obj.id}}</td>
        <td>{{obj.name}}</td>
        <td><MyTag v-model="obj.tag"></MyTag></td>
      </template>

      <!--      <my-tag v-model=""></my-tag>-->
    </MyTable>
  </div>
</template>

<script>

import MyTag from "@/components/MyTag.vue";
import MyTable from "@/components/MyTable.vue";

export default {
  name: 'TableTest',
  components: {MyTable, MyTag},
  created() {
      console.log(this.$route)
  },
  data() {
    return {
      list: [
        {id:100, name:"十分难受呢", tag:"十多年"},
        {id:101, name:"速度速度", tag:"VS熬i啊说"},
        {id:102, name:"您四十年", tag:"你从那次上传"},
      ]
    }
  }
}
</script>

<style>
</style>
