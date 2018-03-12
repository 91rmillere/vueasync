<template>
  <div class="container">
    <top-bar/>
    <event-videos :video1="selectedEvent.media.video1" :video2="selectedEvent.media.video2"/>
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'
import TopBar from './TopBar'
import EventVideos from './EventVideos'
import BottomBar from './BottomBar'

export default {
  components: {
    TopBar,
    EventVideos,
    BottomBar
  },
  computed: {
    ...mapGetters([
      'allEvents',
      'selectedEvent',
      'dataReturned'
    ])
  },
  methods: {
    ...mapActions([
      'getAllEvents'
    ])
  },
  created () {
    this.getAllEvents()
  }

}
</script>

<style>

</style>
