<template>
  <div>
    <table>
      <thead>
        <tr>
          <th v-for="th in thDatas">{{ th }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="td in tbody">
          <td>{{ td }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import mockData from '../../test.json'
export default {
  name: 'user',
  data () {
    let datas = mockData
    let thDatas = datas.splice(0, 1)
    console.log(datas)
    for (var i of thDatas) {
    }
    return {
      thDatas: i,
      tbody: datas
    }
  }
}

</script>

<style>

</style>
