<template>
  <div class="px-2 pt-2">
    <input
      type="text"
      name=""
      :placeholder="placeholder"
      v-model="inputValue"
      @input="updateValue"
      class="form-control"
      id=""
    />
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: "Busqueda",
    },
    search: {
      type: String,
    },
  },
  data() {
    return {
      inputValue: this.search
    }
  },
  watch: {
    // search(newValue, oldValue) {
    //   // console.log('input' . newValue);
    // }
  },
   methods: {
    updateValue() {
      this.$emit('input', this.inputValue);
    }
  }
};
</script>

<style lang="scss" scoped></style>
