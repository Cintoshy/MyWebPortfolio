<template>
  <div
    class="fixed top-0 right-0 h-screen w-full inset-0 lg:w-1/2 bg-slate-900 z-50 shadow-xl transition-transform duration-1000 overflow-hidden"
  >
    <div class="flex justify-center h-screen">
      <div
        class="flex flex-col justify-center text-center items-center gap-y-8"
      >
        <nuxt-link
          @click="close"
          to="/"
          class="poppins-extrabold custom-link tracking-wider py-3"
        >
          HOME
        </nuxt-link>
        <nuxt-link
          @click="close"
          to="/education"
          class="poppins-extrabold custom-link tracking-wider py-3"
        >
          EDUCATION
        </nuxt-link>

        <nuxt-link
          @click="close"
          to="/skills"
          class="poppins-extrabold custom-link tracking-wider py-3"
        >
          SKILLS
        </nuxt-link>
        <nuxt-link
          @click="close"
          to="/projects"
          class="poppins-extrabold custom-link tracking-wider py-3"
        >
          PROJECTS
        </nuxt-link>
        <button
          @click="close"
          class="text-white hover:text-gray-400 hover:scale-110 mt-10"
        >
          <svg
            class="text-inherit"
            xmlns="http://www.w3.org/2000/svg"
            width="2.5em"
            height="2.5em"
            viewBox="0 0 256 256"
          >
            <path
              fill="currentColor"
              d="M165.66 101.66L139.31 128l26.35 26.34a8 8 0 0 1-11.32 11.32L128 139.31l-26.34 26.35a8 8 0 0 1-11.32-11.32L116.69 128l-26.35-26.34a8 8 0 0 1 11.32-11.32L128 116.69l26.34-26.35a8 8 0 0 1 11.32 11.32M232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits();

const close = () => {
  emit("close");
  // console.log("dsfdfs");
};
onUnmounted(close);
</script>

<style scoped>
.custom-link {
  position: relative;
  color: rgb(170, 170, 170);
  text-decoration: none;
  /* font-size: 16px; */
  -webkit-text-stroke-color: rgba(255, 255, 255, 0.9);
  letter-spacing: 1.5px;
  padding-bottom: 5px; /* Add some space for the underline */
  overflow: hidden; /* Hide overflow to ensure the underline doesn't overflow */
}

.custom-link::before {
  content: "";
  color: red;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px; /* Thickness of the underline */
  background-color: red; /* Color of the underline */
  transform: scaleX(0); /* Initially hidden */
  transform-origin: left;
  transition: transform 0.3s ease; /* Smooth transition for underline */
}
.custom-link:hover {
  color: red;
}

.custom-link::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: red;
  transition: transform 0.3s ease; /* Smooth transition for gradient */
  z-index: -1; /* Place behind the text */
}

.custom-link:active::before {
  transform: scaleX(1); /* Show underline on active */
}

.active {
  color: red; /* Change color to red for active link */
  text-decoration: none;
  padding-bottom: 4px; /* Add some space for the underline */
  border-bottom: 3px solid red; /* Add underline */
}

.rubik-scribble-regular {
  font-family: "Rubik Scribble", system-ui;
  font-weight: bold;
}
.router-link-exact-active {
  color: red; /* Change color to red for active link */
  padding-bottom: 4px; /* Add some space for the underline */
  border-bottom: 3px solid red; /* Add underline */
}
</style>
