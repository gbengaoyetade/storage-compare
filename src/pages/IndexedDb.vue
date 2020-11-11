<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>Edit <code>components/IndexedDB.vue</code> to test hot module replacement.</p>
</template>

<script>
export default {
  name: 'IndexedDB',
  props: {
    msg: String
  },
  data() {
    return {
      count: 0
    }
  }
}
</script>
