<template>
  <div>
    <nuxt />
    <Dialog />
  </div>
</template>

<script>
import Dialog from './../components/Dialog'
export default {
  name: 'layout',
  components: {
    Dialog,
  },
}
</script>