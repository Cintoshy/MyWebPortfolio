<template>
  <div class="flex justify-center h-screen w-full">
    <div
      class="w-full"
      v-motion
      :initial="{
        opacity: 0,
        y: 350,
      }"
      :enter="{
        opacity: 1,
        y: 0,
        transition: {
          // type: 'spring',
          stiffness: '100',
          delay: 100,
        },
      }"
    >
      <nav class="overflow-hidden" id="home">
        <div
          class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
        >
          <a
            href="https://flowbite.com/"
            class="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span
              class="text-2xl font-extrabold whitespace-nowrap uppercase tracking-widest"
              >Mark Louis</span
            >
          </a>
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
            <ul
              class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-transparent"
            >
              <li>
                <nuxt-link
                  href="#"
                  class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                  >Home</nuxt-link
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >About</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >Services</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >Pricing</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >Contact</a
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="text-4xl font-bold text-center tracking-wider">Education</div>
      <div
        class="spacex-y-8 px-20 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent"
      >
        <!-- Item #1 -->
        <div
          class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
        >
          <!-- Icon -->
          <div
            class="flex items-center justify-center w-10 h-10 rounded-full text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"
          >
            ja
            <img src="/assets/images/cspc.png" alt="" />
          </div>
          <!-- Card -->
          <div
            class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow"
          >
            <div class="flex items-center justify-between space-x-2 mb-1">
              <div class="font-bold text-slate-900">College level</div>
              <time class="font-caveat font-medium text-indigo-500"
                >2020 - 2024</time
              >
            </div>
            <div class="text-slate-500">
              Bachelor of Science in Information Technology
            </div>
            <div class="text-slate-500">Camarines Sur Polythecnic Colleges</div>
            <ul class="list-disc pl-6 text-slate-500">
              <!-- <li>GPA: 3.8/4.0</li> -->
              <li>Dean's Lister</li>
              <li>
                Completed capstone project Web application using Laravel
                Framework (Library Collection Mapping System)
              </li>
            </ul>
          </div>
        </div>

        <!-- Item #2 -->
        <div
          class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
        >
          <!-- Icon -->
          <div
            class="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"
          >
            <img src="/assets/images/shs.jpg" alt="" />
          </div>
          <!-- Card -->
          <div
            class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow"
          >
            <div class="flex items-center justify-between space-x-2 mb-1">
              <div class="font-bold text-slate-900">
                Senior High School Level
              </div>
              <time class="font-caveat font-medium text-indigo-500"
                >09/06/2023</time
              >
            </div>
            <div class="text-slate-500">
              Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum
              morbi blandit cursus risus.
            </div>
          </div>
        </div>

        <!-- Item #3 -->
        <div
          class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
        >
          <!-- Icon -->
          <div
            class="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"
          >
            <img src="/assets/images/nnhs.jfif" alt="" />
          </div>
          <!-- Card -->
          <div
            class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow"
          >
            <div class="flex items-center justify-between space-x-2 mb-1">
              <div class="font-bold text-slate-900">High School Level</div>
              <time class="font-caveat font-medium text-indigo-500"
                >10/06/2023</time
              >
            </div>
            <div class="text-slate-500">
              Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum
              morbi blandit cursus risus.
            </div>
          </div>
        </div>

        <!-- Item #4 -->
        <div
          class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
        >
          <!-- Icon -->
          <div
            class="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"
          >
            <img src="/assets/images/elementary.png" alt="" />
          </div>
          <!-- Card -->
          <div
            class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow"
          >
            <div class="flex items-center justify-between space-x-2 mb-1">
              <div class="font-bold text-slate-900">Elementary Level</div>
              <time class="font-caveat font-medium text-indigo-500"
                >12/06/2023</time
              >
            </div>
            <div class="text-slate-500">
              Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum
              morbi blandit cursus risus.
            </div>
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
  // Add more education entries as needed
]);
const initial = ref({
  y: 100,
  opacity: 0,
});

const enter = ref({
  y: 0,
  opacity: 1,
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
</style>
