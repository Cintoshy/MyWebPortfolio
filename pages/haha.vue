<template>
  <div id="home" class="h-dvh">
    <div class="flex justify-center w-full">
      <div
        class="w-full"
        v-motion
        :initial="{
          opacity: 0,
          y: 400,
        }"
        :enter="{
          opacity: 1,
          y: 0,
          transition: {
            opacity: 0,
            duration: 1000,
            damping: 10,
            precision: 0.01,
            delay: 100,
          },
        }"
      >
        <nav class="overflow-hidden bg-black bg-opacity-60 shadow-xl">
          <div
            class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto pt-5 pb-4"
          >
            <nuxt-link
              href="/"
              class="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <span
                class="text-2xl font-bold whitespace-nowrap uppercase stroke-slate-500 text-gray-300 rubik-scribble-regular"
                >Mark Louis</span
              >
            </nuxt-link>
            <button
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
            <div class="hidden w-full md:block md:w-auto" id="navbar-default">
              <div class="flex flex-row gap-x-5">
                <nuxt-link to="/" class="flex text-decoration-none custom-link">
                  <span class="mr-1">&gt;</span>
                  Home
                </nuxt-link>
                <nuxt-link
                  to="/haha"
                  class="flex text-decoration-none custom-link"
                >
                  <span class="mr-1">&gt;</span>
                  Education
                </nuxt-link>

                <a href="#" class="flex text-decoration-none custom-link">
                  <span class="mr-1">&gt;</span>
                  Skills
                </a>
                <a href="#" class="flex text-decoration-none custom-link">
                  <span class="mr-1">&gt;</span>
                  Projects
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <div
      v-motion
      :initial="{
        opacity: 0,
        y: 100,
      }"
      :enter="{
        opacity: 1,
        y: 0,
        transition: {
          stiffness: 80,
          duration: 900,
          damping: 26,
          precision: 0.01,
          delay: 900,
        },
      }"
    >
      <div class="text-4xl font-bold text-center tracking-wider pt-10 pb-8">
        Education
      </div>
      <div
        class="spacex-y-8 px-10 lg:px-60 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent"
      >
        <!-- Item #1 -->
        <div
          class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
        >
          <!-- Icon -->
          <div
            class="flex items-center justify-center w-10 h-10 rounded-full text-gray-300 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"
          >
            <img src="/assets/images/cspc.png" alt="" />
          </div>
          <!-- Card -->
          <div
            v-motion
            :initial="initialRight"
            :enter="enter"
            class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded border shadow glass"
          >
            <div class="flex items-center justify-between space-x-2 mb-1">
              <div class="font-bold text-gray-100 font-small">
                College level
              </div>
              <time class="font-caveat font-medium text-red-200"
                >2020 - 2024</time
              >
            </div>
            <div class="text-gray-300">
              Bachelor of Science in Information Technology
            </div>
            <div class="text-gray-300">Camarines Sur Polythecnic Colleges</div>
          </div>
        </div>

        <!-- Item #2 -->
        <div
          class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
        >
          <!-- Icon -->
          <div
            class="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-gray-300 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"
          >
            <img src="/assets/images/shs.jpg" alt="" />
          </div>
          <!-- Card -->
          <div
            v-motion
            :initial="initialLeft"
            :enter="enter"
            class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded border shadow glass"
          >
            <div class="flex items-center justify-between space-x-2 mb-1">
              <div class="font-bold text-gray-100 font-small">
                Senior High School Level
              </div>
              <time class="font-caveat font-medium text-red-200"
                >2018 - 2020</time
              >
            </div>
            <div class="text-gray-300">Computer System Servicing (TVL-ICT)</div>
            <div class="text-gray-300">
              San Miguel, Nabua National Senior High School
            </div>
          </div>
        </div>

        <!-- Item #3 -->
        <div
          class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
        >
          <!-- Icon -->
          <div
            class="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-gray-300 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"
          >
            <img src="/assets/images/nnhs.jfif" alt="" />
          </div>
          <!-- Card -->
          <div
            v-motion
            :initial="initialRight"
            :enter="enter"
            class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded border shadow glass"
          >
            <div class="flex items-center justify-between space-x-2 mb-1">
              <div class="font-bold text-gray-100 font-small">
                High School Level
              </div>
              <time class="font-caveat font-medium text-red-200"
                >2014 - 2018</time
              >
            </div>
            <div class="text-gray-300">Nabua National High School</div>
            <div class="text-gray-300">San Miguel, Nabua, Camarines Sur</div>
          </div>
        </div>

        <!-- Item #4 -->
        <div
          class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
        >
          <!-- Icon -->
          <div
            class="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-gray-300 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"
          >
            <img src="/assets/images/elementary.png" alt="" />
          </div>
          <!-- Card -->
          <div
            v-motion
            :initial="initialLeft"
            :enter="enter"
            class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded border shadow glass"
          >
            <div class="flex items-center justify-between space-x-2 mb-1">
              <div class="font-bold text-gray-100 font-small">
                Elementary Level
              </div>
              <time class="font-caveat font-medium text-red-200"
                >2008 - 2014</time
              >
            </div>
            <div class="text-gray-300">
              Bachelor of Science in Information Technology
            </div>
            <div class="text-gray-300">Balaogan, Bula, Camarines Sur</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const education = ref([
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Example",
    duration: "2018 - 2022",
    achievements: [
      "GPA: 3.8/4.0",
      "Dean's List for all semesters",
      "Completed capstone project on machine learning",
    ],
  },
  {
    degree: "Certification in Web Development",
    institution: "Online Learning Platform",
    duration: "2020",
    achievements: [
      "Completed HTML, CSS, JavaScript, and Vue.js courses",
      "Developed several projects including portfolio websites",
    ],
  },
]);
const initialLeft = ref({
  opacity: 0,
  x: 50,
});
const initialRight = ref({
  opacity: 0,
  x: -50,
});

const enter = ref({
  opacity: 1,
  x: 0,
  transition: {
    stiffness: 80,
    duration: 900,
    damping: 26,
    precision: 0.01,
    delay: 1700,
  },
});
</script>
<style scoped>
#home {
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(121, 9, 9, 1) 65%,
    rgba(255, 0, 0, 1) 100%
  );
  color: #f0f0f0;
}
.glass {
  background: rgba(255, 255, 255, 0.1);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
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
