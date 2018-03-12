<template>
  <div class="row">
    <radar class="col-md-6 hidden-md" :tracks="selectedEvent.tracks"></radar>
    <event-images class="col-md-6" :carImage="selectedEvent.media.carImage"
    :plateImage="selectedEvent.media.plateImage"></event-images>
  </div>
</template>

<script>

import {mapGetters} from 'vuex'

import Radar from './Radar'
import EventImages from './EventImages'

export default {
  components: {
    Radar,
    EventImages
  },
  computed: {
    ...mapGetters([
      'selectedEvent',
      'firstTrack'
    ])
  }
}
</script>

<style>

</style>
