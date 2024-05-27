<template>
  <div v-motion-slide-right v-if="showMessage" class="fixed top-20 right-2">
    <div
      id="toast-success"
      class="flex items-center w-full max-w-xs p-3 mb-4 text-gray-500 bg-white rounded-lg shadow-xl border-b-4 border-red-500"
      role="alert"
    >
      <div
        class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-red-100 rounded-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5"
          viewBox="0 0 512 512"
        >
          <path
            fill="none"
            d="M296 64h-80a7.91 7.91 0 0 0-8 8v24h96V72a7.91 7.91 0 0 0-8-8"
          />
          <path
            fill="none"
            d="M292 64h-72a4 4 0 0 0-4 4v28h80V68a4 4 0 0 0-4-4"
          />
          <path
            fill="#c43636"
            d="M447.55 96H336V48a16 16 0 0 0-16-16H192a16 16 0 0 0-16 16v48H64.45L64 136h33l20.09 314A32 32 0 0 0 149 480h214a32 32 0 0 0 31.93-29.95L415 136h33ZM176 416l-9-256h33l9 256Zm96 0h-32V160h32Zm24-320h-80V68a4 4 0 0 1 4-4h72a4 4 0 0 1 4 4Zm40 320h-33l9-256h33Z"
          />
        </svg>
        <span class="sr-only">Check icon</span>
      </div>
      <div class="ms-3 text-sm font-normal">Deleted successfully.</div>
      <button
        @click="closeToast"
        type="button"
        class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8"
        data-dismiss-target="#toast-success"
        aria-label="Close"
      >
        <span class="sr-only">Close</span>
        <svg
          class="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
      </button>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  showMessage: Boolean,
});
const { showMessage } = toRefs(props);

const emits = defineEmits();

const closeToast = () => {
  emits("closed");
};
</script>
<style></style>
