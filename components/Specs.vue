<template>
  <div>
    <label class="block mb-5">
      <span class="block text-md font-medium text-slate-700"
        >Gifting Title<span class="text-red-500 px-1">*</span></span
      >
      <div class="relative">
        <input
          type="text"
          v-model="form.title"
          placeholder="Enter Gifting Title"
          class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-gray-500 invalid:text-gray-600 focus:invalid:border-gray-500 focus:invalid:ring-gray-500"
          maxlength="30"
          required
        />
        <div
          class="border border-slate-300 rounded-sm shadow-sm absolute bg-white inset-y-0 right-0 px-5 flex items-center pointer-events-none text-sm text-gray-400"
        >
          {{ form.title.length }}/30
        </div>
      </div>
    </label>
    <h1 class="text-white"></h1>
    <button type="button" class="bg-blue-500 p-2" @click="tryy">
      fsefsefs
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  form: Object,
});
const { form } = toRefs(props);
const tryy = () => {
  console.log(toRefs(props.values));
};
// watch(props.form, (newValue, oldValue) => {
//   if (newValue) {
//     console.log("hello watchers");
//   }
// });
</script>

<style lang="scss" scoped></style>
