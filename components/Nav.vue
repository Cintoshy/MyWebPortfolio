<template>
  <div>
    <nav class="overflow-hidden bg-black bg-opacity-60 shadow-xl">
      <div
        class="max-w-screen-xl flex flex-wrap items-center justify-between mx-3 md:mx-20 xl:mx-auto pt-5 pb-4"
      >
        <nuxt-link
          to="/"
          class="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span
            class="text-2xl font-bold whitespace-nowrap uppercase stroke-slate-500 text-gray-300 rubik-scribble-regular"
            >Mark Louis</span
          >
        </nuxt-link>
        <button
          @click="isHide = !isHide"
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto">
          <div class="flex flex-row gap-x-5">
            <nuxt-link to="/" class="flex text-decoration-none custom-link">
              <span class="mr-1">&gt;</span>
              Home
            </nuxt-link>
            <nuxt-link
              to="/education"
              class="flex text-decoration-none custom-link"
            >
              <span class="mr-1">&gt;</span>
              Education
            </nuxt-link>

            <nuxt-link
              to="/skills"
              class="flex text-decoration-none custom-link"
            >
              <span class="mr-1">&gt;</span>
              Skills
            </nuxt-link>
            <a href="#" class="flex text-decoration-none custom-link">
              <span class="mr-1">&gt;</span>
              Projects
            </a>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup></script>

<style scoped>
.custom-link {
  position: relative;
  color: rgb(222, 222, 222);
  text-decoration: none;
  font-size: 14px;
  font-weight: bold;
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

.custom-link:hover::before {
  transform: scaleX(1);
}

.custom-link:hover::after {
  transform: translateY(-100%); /* Slide the gradient up on hover */
}

.custom-link:active::before {
  transform: scaleX(1); /* Show underline on active */
}

#spacing-letter {
  letter-spacing: 1px;
  font-size: 45px;
}
.active {
  color: red; /* Change color to red for active link */
  text-decoration: none;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1.5px;
  padding-bottom: 4px; /* Add some space for the underline */
  border-bottom: 3px solid red; /* Add underline */
}

.rubik-scribble-regular {
  font-family: "Rubik Scribble", system-ui;
  font-weight: bold;
}
.router-link-exact-active {
  color: red; /* Change color to red for active link */
  text-decoration: none;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1.5px;
  padding-bottom: 4px; /* Add some space for the underline */
  border-bottom: 3px solid red; /* Add underline */
}
.router-link-exact-active:hover {
  color: rgb(211, 0, 0); /* Change color to red for active link */
  cursor: pointer;
  text-decoration: none;
  letter-spacing: 1.5px;
  border-bottom: 3px solid rgb(211, 0, 0); /* Add underline */
}
</style>
