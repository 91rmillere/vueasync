<template>
  <div class="row align-items-center">
      <div class="col-md-6 pl-0 ml-0">
        <div class="embed-responsive embed-responsive-4by3">
          <img :src="carImage" alt="" class="embed-responsive-item">
        </div>
      </div>
      <div class="col-md-6 pl-0 ml-0">
        <div class="embed-responsive embed-responsive-4by3">
          <img :src="plateImage" alt="" class="embed-responsive-item">
        </div>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    carImage: {
      type: String,
      required: true
    },
    plateImage: {
      type: String,
      required: true
    }
  }

}
</script>

<style>

</style>
