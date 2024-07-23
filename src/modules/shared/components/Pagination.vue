<template>
  <section class="overflow-auto my-4 px-2 pt-2 d-flex justify-content-center">
    <div>
      <b-pagination
        :v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        first-number
      ></b-pagination>
      
    </div>
  </section>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    rows: {
      type: Number,
      default: 1,
    },
    perPage: {
      type: Number,
      default: 2,
    },
    currentPage: {
      type: Number,
      default: 3,
    }
  },
  data() {
    return {
    }
  },
};
</script>

<style lang="scss" scoped></style>
