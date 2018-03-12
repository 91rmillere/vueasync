<template>
  <div class="row">
    <div class="col-md-6 col-xs-12 pr-0 mr-0">
      <div class="embed-responsive embed-responsive-16by9 ">
        <video class="embed-responsive-item" :src="video1"  controls></video>
      </div>
    </div>
    <div class="col-md-6 col-xs-12 pl-0 ml-0">
      <div class="embed-responsive embed-responsive-16by9">
        <video class="embed-responsive-item" :src="video2"  controls></video>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    video1: {
      type: String,
      required: true
    },
    video2: {
      type: String,
      required: true
    }
  }
}
</script>

<style>

</style>
