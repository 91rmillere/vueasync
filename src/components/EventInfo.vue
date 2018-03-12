<template>
  <div class="text-left">
    <table>
      <tbody>
        <tr>
          <td class="font-weight-bold">GPS:</td>
          <td>{{eventInfo.gpsLong}}, {{eventInfo.gpsLong}}</td>
          <td class="font-weight-bold">Violation ID:</td>
          <td>{{ eventInfo.violationId }}</td>
        </tr>
        <tr>
          <td class="font-weight-bold">Location:</td>
          <td>{{ eventInfo.location }}</td>
          <td class="font-weight-bold">Speed Limit:</td>
          <td>{{ eventInfo.speedLimit }} mph</td>
        </tr>
        <tr>
          <td class="font-weight-bold">System ID:</td>
          <td>{{ eventInfo.systemId }}</td>
          <td class="font-weight-bold">Speed:</td>
          <td>{{ eventInfo.vehicleSpeed }} mph</td>
        </tr>
        <tr>
          <td class="font-weight-bold">Operator ID:</td>
          <td>{{ eventInfo.operatorId }}</td>
          <td class="font-weight-bold">Distaince (Y):</td>
          <td>{{ eventInfo.vehicleLaneDistance }}</td>
        </tr>
        <tr>
          <td class="font-weight-bold">Date:</td>
          <td>{{ track.time | date }}</td>
          <td class="font-weight-bold">Object ID:</td>
          <td>{{ track.id }}</td>
        </tr>

      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    eventInfo: {
      type: Object,
      required: true
    },
    track: {
      type: Object,
      required: true
    }
  },
  filters: {
    date: value => {
      let x = String(value)
      if (/^\d{4}-.*$/.test(x)) {
        return `${x.substring(5, 7)}/${x.substring(8, 10)}/${x.substring(0, 4)}`
      } else {
        return x.substring(0, 11)
      }
    }

  }
}
</script>

<style scoped>

</style>
