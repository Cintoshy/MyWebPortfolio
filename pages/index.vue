<template>
  <section
    class="overflow-hidden flex sm:flex-none items-center min-h-dvh md:h-dvh lg:h-dvh"
  >
    <div
      class="flex flex-col-reverse content-center justify-center lg:flex-row w-full md:h-screen"
    >
      <div
        v-motion-slide-left
        class="flex justify-center items-center w-full lg:w-1/2"
      >
        <div class="flex flex-col">
          <div class="font-bold uppercase py-0 mt-5">Hello world, I'm</div>
          <div
            class="text-3xl sm:text-5xl font-extrabold font-sans my-1 rubik-scribble-regular"
          >
            Mark Louis Odavar
          </div>
          <div class="inline-block">
            <div class="sm:text-1xl font-bold text py-0 my-0">
              Aspiring
              <span class="text-red-500">Software Developer </span>
              <span class="hidden sm:inline-block"
                >from Camarines Sur Polytechnic Colleges</span
              >
              <span class="sm:hidden">from CSPC</span>
            </div>
          </div>
          <div class="flex flex-row gap-x-3 sm:gap-x-5 mt-5">
            <nuxt-link to="/" class="flex active text-xs">
              <span class="text-xs mr-1">&gt;</span>
              Home
            </nuxt-link>
            <nuxt-link
              to="/education"
              class="flex text-decoration-none custom-link text-xs"
            >
              <span class="mr-1">&gt;</span>
              Education
            </nuxt-link>

            <nuxt-link
              to="/skills"
              class="flex text-decoration-none custom-link text-xs"
            >
              <span class="mr-1">&gt;</span>
              Skills
            </nuxt-link>
            <nuxt-link
              to="/projects"
              class="flex text-decoration-none custom-link text-xs"
            >
              <span class="mr-1">&gt;</span>
              Projects
            </nuxt-link>
          </div>

          <div class="flex flex-row my-5 gap-x-3">
            <a
              href="https://web.facebook.com/marklouis.odavar.7/"
              target="_blank"
            >
              <svg
                class="hover:scale-110"
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#8f8f8f"
                  d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
                />
              </svg>
            </a>
            <a href="https://www.instagram.com/var_mrkls/" target="_blank">
              <svg
                class="hover:scale-110"
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 448 512"
              >
                <path
                  fill="#8f8f8f"
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9S287.7 141 224.1 141m0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7s74.7 33.5 74.7 74.7s-33.6 74.7-74.7 74.7m146.4-194.3c0 14.9-12 26.8-26.8 26.8c-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8s26.8 12 26.8 26.8m76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9c-26.2-26.2-58-34.4-93.9-36.2c-37-2.1-147.9-2.1-184.9 0c-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9c1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0c35.9-1.7 67.7-9.9 93.9-36.2c26.2-26.2 34.4-58 36.2-93.9c2.1-37 2.1-147.8 0-184.8M398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6c-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6c-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6c29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6c11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1"
                />
              </svg>
            </a>
            <a href="https://github.com/Cintoshy" target="_blank">
              <svg
                class="hover:scale-110"
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#8f8f8f"
                  d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/mark-louis-odavar-79190329b/"
              target="_blank"
            >
              <svg
                class="hover:scale-110"
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#8f8f8f"
                  d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
                />
              </svg>
            </a>
          </div>
          <nuxt-link to="/service" class="w-fit">
            <div
              class="backdrop-blur-sm bg-white/20 py-2 px-4 rounded-full border border-slate-400 hover:scale-105 ease-out duration-300"
            >
              <div class="flex content-center items-center">
                <div class="text-sm font-medium">Service</div>
                <div class="ps-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.75em"
                    height="1em"
                    viewBox="0 0 16 9"
                  >
                    <path
                      fill="currentColor"
                      d="M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5"
                    />
                    <path
                      fill="currentColor"
                      d="M10 8.5a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71l3.15-3.15l-3.15-3.15c-.2-.2-.2-.51 0-.71s.51-.2.71 0l3.5 3.5c.2.2.2.51 0 .71l-3.5 3.5c-.1.1-.23.15-.35.15Z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>

      <div
        v-motion-slide-right
        class="flex justify-center px-8 sm:p-none items-end md:items-center w-full lg:w-1/2"
      >
        <span
          class="animate-[ping_3s_infinite] absolute top-10 sm:top-auto h-3/4 w-3/4 rounded-full bg-red-400 opacity-10"
        ></span>
        <!-- <span class="relative inline-flex rounded-full h-16 w-16 bg-sky-500 animate-ping"></span> -->

        <img
          v-bind:src="logoPath"
          alt="Profile Picture"
          class="rounded-full hover:scale-105 transition delay-100 ease-in-out shadow-lg animate-[float_3s_infinite] sm:animate-none duration-1000 max-w-xs max-h-xs sm:max-w-sm sm:max-h-sm lg:max-w-md lg:max-h-md"
          style="
            border: 3px solid rgb(255, 255, 255);
            filter: drop-shadow(10px 0px 20px rgb(0, 0, 0));
            box-shadow: 8px 8px 16px #751b1b, -8px -8px 16px #a52525;
          "
        />
      </div>
    </div>
    <Button class="fixed top-8 md:top-20 left-0" />
  </section>
</template>

<script setup>
import logoPath from "../assets/images/8.png";

definePageMeta({
  layout: false,
});
</script>

<style scoped>
.text {
  border-right: 5px solid;
  width: 100%;
  white-space: nowrap;
  margin-right: 10px;
  overflow: hidden;
  animation: typing 3s, cursor 0.9s step-end infinite alternate;
}
@keyframes cursor {
  50% {
    border-color: transparent;
  }
}
@keyframes typing {
  from {
    width: 0;
  }
}

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
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 1.5px;
  padding-bottom: 4px; /* Add some space for the underline */
  border-bottom: 3px solid red; /* Add underline */
}
.active:hover {
  color: rgb(211, 0, 0); /* Change color to red for active link */
  cursor: pointer;
  text-decoration: none;
  letter-spacing: 1.5px;
  border-bottom: 3px solid rgb(211, 0, 0); /* Add underline */
}
/* .button-85 {
  padding: 0.5em 1em 0.6em 0.5em;
  border: none;
  outline: none;
  color: rgb(255, 255, 255);
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 50px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-85:before {
  content: "";
  background: linear-gradient(45deg, #ff0000, #920000, #ff0033, #ff0000);
  position: absolute;
  top: -2px;
  left: -2px;
  background-size: 400%;
  z-index: -1;
  filter: blur(5px);
  -webkit-filter: blur(5px);
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  animation: glowing-button-85 20s linear infinite;
  transition: opacity 0.3s ease-in-out;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
  border-radius: 50px;
}
@keyframes glowing-button-85 {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
}

.button-85:after {
  z-index: -1;
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgb(2, 0, 36);
  opacity: 20;
  left: 0;
  top: 0;
  border-radius: 30px;
} */
</style>
