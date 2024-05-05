<template>
  <div>
    <form @submit.prevent="submitForm">
      <Specs :form="form" />
      <label class="block mb-5">
        <span class="block text-md font-medium text-slate-700"
          >Gifting Description<span class="text-red-500 px-1">*</span></span
        >
        <textarea
          type="text"
          v-model="form.description"
          placeholder="Enter Description"
          maxlength="50"
          class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-gray-500 invalid:text-gray-600 focus:invalid:border-gray-500 focus:invalid:ring-gray-500"
          required
        ></textarea>
      </label>
      <label class="block mb-20">
        <span class="block text-md font-medium text-slate-700 mx-2"
          >Gifting Image<span class="text-red-500 px-1">*</span></span
        >
        <input
          type="file"
          v-on:change="form.imgURL"
          id="uploadImage"
          class="mt-1 block w-full px-3 py-3 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-gray-500 invalid:text-gray-600 focus:invalid:border-gray-500 focus:invalid:ring-gray-500"
          required
        />
      </label>
      <div class="flex justify-end gap-2">
        <button
          class="duration-200 bg-neutral-300 font-semibold px-4 py-2 rounded hover:bg-neutral-400 text-white"
        >
          Cancel
        </button>
        <button
          type="submit"
          class="duration-200 bg-yellow-400 text-white font-semibold px-4 py-2 rounded hover:bg-yellow-500"
        >
          Add Gifting
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
const form = ref({
  imgURL: null,
  title: "",
  description: "",
});
</script>

<style scoped></style>
