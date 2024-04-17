<template>
  <div>
    <h1
      class="poppins-extrabold text-3xl sm:text-4xl pt-5 pb-7 text-center text-gray-200"
    >
      PROJECTS
    </h1>
    <div class="w-full flex justify-center items-center">
      <div class="w-full px-5 sm:px-0 sm:w-1/2">
        <div class="carousel w-full">
          <div id="slide1" class="group carousel-item relative w-full">
            <div
              class="card card-side bg-transparent shadow-xl w-full image-full z-0"
            >
              <figure>
                <img
                  :src="licoms"
                  alt="Movie"
                  class="opacity-60 group-hover:blur-0 relative blur-[2px]"
                />
              </figure>
              <div class="card-body px-10">
                <h2
                  class="card-title text-md sm:text-xl text-stroke poppins-medium tracking-wider"
                >
                  Library Collection Mapping
                </h2>
                <p
                  class="text-sm sm:text-md text-stroke text-zinc-50 opacity-90 poppins-regular tracking-wide"
                >
                  A web-based library collection mapping system tailored for
                  Camarines Sur Polytechnic Colleges (CSPC) library. Recognizing
                  issues in the current mapping process.
                </p>
                <div class="card-actions justify-end">
                  <a
                    href="https://github.com/Cintoshy/licoms"
                    target="_blank"
                    class="btn btn-primary"
                  >
                    Github<svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.5em"
                      height="1.5em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#a1a1a1"
                        d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div
              class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
            >
              <a href="#slide4">❮</a>
              <a href="#slide2">❯</a>
            </div>
          </div>
          <div id="slide2" class="carousel-item relative w-full">
            <img
              src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
              class="w-full"
            />
            <div
              class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
            >
              <a href="#slide1" class="btn btn-circle">❮</a>
              <a href="#slide3" class="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide3" class="carousel-item relative w-full">
            <img
              src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
              class="w-full"
            />
            <div
              class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
            >
              <a href="#slide2" class="btn btn-circle">❮</a>
              <a href="#slide4" class="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide4" class="carousel-item relative w-full">
            <img
              src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
              class="w-full"
            />
            <div
              class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
            >
              <a href="#slide3" class="btn btn-circle">❮</a>
              <a href="#slide1" class="btn btn-circle">❯</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import licoms from "../assets/images/licoms.jpg";
</script>

<style scoped>
.text-stroke {
  text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black,
    1px 1px 0 black;
}
</style>
