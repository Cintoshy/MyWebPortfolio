<script setup>
import licoms from "../assets/images/licoms.jpg";
import laravelSVG from "../assets/svgs/laravel.svg";
import mysqlSVG from "../assets/svgs/mysql.svg";
import phpSVG from "../assets/svgs/php.svg";
import googleSVG from "../assets/svgs/google.svg";
import githubSVG from "../assets/svgs/github.svg";
import boostsrapSVG from "../assets/svgs/boostsrap.svg";
const slides = ref([
  {
    src: licoms,
    alt: "Slide 1",
    title: "Library Collection Mapping",
    project: "Capstone Project",
    description:
      "A web-based library collection mapping system tailored for Camarines Sur Polytechnic Colleges (CSPC) library. Recognizing issues in the current mapping process.",
    techstack: [
      {
        name: "Laravel",
        svg: laravelSVG,
        description: "A Javascript framework for building user interfaces",
      },
      {
        name: "PHP",
        svg: phpSVG,
        description: "A Javascript framework for building user interfaces",
      },
      {
        name: "Bootstrap",
        svg: boostsrapSVG,
        description: "A Javascript framework for building user interfaces",
      },
      {
        name: "MySql",
        svg: mysqlSVG,
        description: "A Javascript framework for building user interfaces",
      },

      {
        name: "Google Cloud",
        svg: googleSVG,
        description: "A Javascript framework for building user interfaces",
      },
      {
        name: "Github",
        svg: githubSVG,
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
  {
    src: "image3.jpg",
    alt: "Slide 3",
    title: "Slide 3",
    description: "",
    techstack: "",
  },
  {
    src: "image4.jpg",
    alt: "Slide 4",
    title: "Slide 4",
    description: "",
    techstack: "",
  },
  {
    src: "image5.jpg",
    alt: "Slide 5",
    title: "Slide 5",
    description: "",
    techstack: "",
  },
  {
    src: "image6.jpg",
    alt: "Slide 6",
    title: "Slide 6",
    description: "",
    techstack: "",
  },
  {
    src: "image7.jpg",
    alt: "Slide 7",
    title: "Slide 7",
    description: "",
    techstack: "",
  },
  {
    src: "image8.jpg",
    alt: "Slide 8",
    title: "Slide 8",
    description: "",
    techstack: "",
  },
  {
    src: "image9.jpg",
    alt: "Slide 9",
    title: "Slide 9",
    description: "",
    techstack: "",
  },
  {
    src: "image10.jpg",
    alt: "Slide 10",
    title: "Slide 10",
    description: "",
    techstack: "",
  },
]);

</script>

<template>
  <div class="min-h-full">
    <div class="flex flex-col justify-center items-center w-full">
      <h1
        class="poppins-extrabold text-3xl sm:text-4xl pt-5 pb-7 text-center text-gray-200"
      >
        PROJECTS
      </h1>
      <Swiper
        class="swiper-cards w-60 md:w-96 relative"
        :modules="[SwiperAutoplay, SwiperEffectCards]"
        :slides-per-view="1"
        :loop="true"
        :effect="'cards'"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: true,
        }"
      >
        <SwiperSlide
          v-for="(slide, idx) in slides"
          :key="idx"
          class="backdrop-blur-md bg-white/30"
        >
          <div class="carousel w-full h-full relative">
            <div id="slide1" class="group carousel-item relative w-full">
              <div
                class="card card-side bg-transparent shadow-xl w-full image-full z-0"
              >
                <figure>
                  <img
                    :src="slide.src"
                    :alt="slide.alt"
                    class="opacity-80 group-hover:blur-0 relative blur-[2px]"
                  />
                </figure>
                <div class="card-body">
                  <h2
                    class="text-xs sm:text-xl text-stroke poppins-bold tracking-wide text-slate-100"
                  >
                    {{ slide.title }}
                    <h4 class="text-stroke text-xs text-slate-200">
                      {{ slide.project }}
                    </h4>
                  </h2>

                  <p
                    class="text-xs sm:text-md text-stroke text-zinc-50 opacity-90 poppins-regular tracking-wide"
                  >
                    {{ slide.description }}
                  </p>
                  <div
                    class="card-actions justify-between items-center text-xs"
                  >
                    <div class="text-stroke">
                      <div class="mb-1">Tech Stack Used:</div>
                      <div class="backdrop-blur-lg rounded-md flex gap-1">
                        <div
                          class="p-1 rounded-lg"
                          v-for="(data, index) in slide.techstack"
                          :key="index"
                        >
                          <div class="tooltip" :data-tip="data.name">
                            <img :src="data.svg" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <a
                        href="https://github.com/Cintoshy/licoms"
                        target="_blank"
                        class="border border-slate-300 p-2 flex flex-row rounded-lg gap-1 hover:bg-slate-300 hover:text-slate-950"
                      >
                        Github<svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1.25em"
                          height="1.25em"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="absolute bottom-[-20px]">
            <p>shdagdw</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<style>
.swiper-slide {
  font-size: 18px;
  height: 50vh;
  font-size: 1rem;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
}

.swiper-cards .swiper-slide {
  border-radius: 20px;
  /* border: 1px solid black; */
}
.text-stroke {
  text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black,
    1px 1px 0 black;
}
</style>
