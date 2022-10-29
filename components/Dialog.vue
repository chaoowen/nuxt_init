<template>
  <div 
    :open="true"
    :class="[
      'block fixed top-12 left-1/2 min-w-84 max-w-90% px-5 py-5 bg-sec-white shadow-lg rounded-lg text-pri-green text-center z-50 duration-400',
      isDisplay ? 'notification--open' : 'notification--close',
    ]">
    <span>{{ $store.state.notificationText }}</span>
  </div>
</template>

<script>
export default {
  name: 'Notification',
  computed: {
    isDisplay() {
      return Boolean(this.$store.state.notificationText)
    }
  }
}
</script>

<style scoped>
.notification--close {
transform: translate(-50%, -24rem);
}
.notification--open {
transform: translate(-50%, 1rem);
}
</style>