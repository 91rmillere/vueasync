<template>
<div class="container-fluid">
  <div class="row">
    <div class="col-md-1">
      <div class="embed-responsive embed-responsive-1by1">
        <img src="../assets/halo-logo.png" alt="" class="embed-responsive-item">
      </div>
    </div>
    <div class="col-md-2">
      <select name="" id="" @change="setSelectedEvent" :value="selectedEvent.id">
        <option :value="event.id"
        v-for="(event, index) in allEvents"
        :key="index">Event {{ event.id }}</option>
      </select>
    </div>
    <div class="col-md-7">
      <event-info :eventInfo="selectedEvent.eventInfo" :track="firstTrack"/>
    </div>
    <div class="col-md-2">
      <div class="embed-responsive embed-responsive-20by3">
        <img id="logo" src="../assets/BTS-Logo1-S.png" alt="" class="embed-responsive-item">
      </div>
    </div>
  </div>
</div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import EventInfo from './EventInfo'

export default {
  components: {
    EventInfo
  },
  computed: {
    ...mapGetters([
      'allEvents',
      'selectedEvent',
      'firstTrack'
    ])
  },
  methods: {
    ...mapActions([
      'setSelectedEvent'
    ]),
    selectionChanged (event) {
      console.log(event.target.value)
    }
  }
}
</script>

<style scoped>
.embed-responsive-20by3 {
  padding-bottom: 15%;
}


</style>
