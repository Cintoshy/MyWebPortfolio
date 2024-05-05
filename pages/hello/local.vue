<template>
  <div>
    <button class="p-2 bg-slate-600" @click="store">store</button>
  </div>
</template>

<script setup>
const slides = ref([
  {
    src: "licoms",
    alt: "Slide 1",
    title: "Library Collection Mapping",
    project: "Capstone Project",
    description:
      "A web-based library collection mapping system tailored for Camarines Sur Polytechnic Colleges (CSPC) library. Recognizing issues in the current mapping process.",
    techstack: [
      {
        name: "Laravel",
        svg: "laravelSVG",
        description: "A Javascript framework for building user interfaces",
      },
      {
        name: "PHP",
        svg: "phpSVG",
        description: "A Javascript framework for building user interfaces",
      },
      {
        name: "Bootstrap",
        svg: "boostsrapSVG",
        description: "A Javascript framework for building user interfaces",
      },
      {
        name: "MySql",
        svg: "mysqlSVG",
        description: "A Javascript framework for building user interfaces",
      },

      {
        name: "Google Cloud",
        svg: "googleSVG",
        description: "A Javascript framework for building user interfaces",
      },
      {
        name: "Github",
        svg: "githubSVG",
        description: "A Javascript framework for building user interfaces",
      },
    ],
  },

  {
    src: "image2.jpg",
    project: "During Internship",
    alt: "Slide 2",
    title: "Slide 2",
    description: "",
    techstack: "",
  },
]);

const store = () => {
  //   for (const item of slides.value) {
  //     // console.log(item);
  //     localStorage.setItem(item.src, JSON.stringify(item));
  //   }
  const check = localStorage.getItem("dashboardData");
  console.log("licoms: ", check);
};

//   slides.value.forEach((slide) => {
//     console.log(slide.src);
//   });

// store();
</script>

<style scoped></style>
