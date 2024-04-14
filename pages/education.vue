<template>
  <div id="home" class="h-dvh">
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
          delay: 400,
        },
      }"
    >
      <div class="poppins-extrabold text-4xl text-center pt-10 pb-8">
        EDUCATION
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
    delay: 1000,
  },
});
</script>
<style scoped>
.glass {
  background: rgba(255, 255, 255, 0.1);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
</style>
