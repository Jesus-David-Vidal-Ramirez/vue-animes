<template>
  <section class="overflow-auto my-4 px-2 pt-2 d-flex justify-content-center">
    <div>
      <h6>Paginacion</h6>
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        first-number
      ></b-pagination>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    // placeholder: {
    //   type: String,
    //   default: "Busqueda",
    // },
  },
};
</script>

<style lang="scss" scoped></style>
