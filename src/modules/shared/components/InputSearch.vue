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
  name:'inputSearch',
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
   methods: {
    updateValue() {
      this.$emit('input', this.inputValue);
    }
  }
};
</script>

<style lang="scss" scoped></style>
