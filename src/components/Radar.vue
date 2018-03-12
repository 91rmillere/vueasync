<template>
<div class="container">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Time</th>
          <th scope="col">ID</th>
          <th scope="col">Length</th>
          <th scope="col">XVelocity</th>
          <th scope="col">XRange</th>
          <th scope="col" class="hidden-s-down hidden-xs">YVelocity</th>
          <th scope="col">YRange</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(track, index) in tracks" :key="index">
          <td>{{ track.time | time }}</td>
          <td>{{ track.id }}</td>
          <td>{{ track.length }}</td>
          <td>{{ track.xVelocity | abs | oneDecimal }}</td>
          <td>{{ track.xRange | abs | oneDecimal }}</td>
          <td class="hidden-s-down hidden-xs">{{ track.yVelocity | abs | oneDecimal }}</td>
          <td>{{ track.yRange | abs | oneDecimal }}</td>
        <tr/>
      </tbody>

    </table>
  </div>
</template>

<script>
export default {
  props: {
    tracks: {
      type: Array,
      required: true
    }
  },
  filters: {
    abs: value => {
      return Math.abs(value)
    },
    oneDecimal: value => {
      return Number(value).toFixed(1)
    },
    time: value => {
      return String(value).substring(11)
    }
  }

}
</script>

<style scoped>
div{
  height: 25vh;
  overflow-y: auto;
}

</style>
