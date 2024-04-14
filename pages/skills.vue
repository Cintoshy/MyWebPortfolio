<template>
  <div>
    <div class="flex justify-center">
      <div>
        <h1
          class="poppins-extrabold text-3xl sm:text-4xl pt-5 pb-7 text-center"
        >
          SKILLS
        </h1>
        <div class="relative w-40 h-40 m-auto">
          <svg class="w-full h-full" viewBox="0 0 100 100">
            <circle
              class="text-gray-200 stroke-current"
              stroke-width="10"
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
            ></circle>
            <circle
              :class="progressCircleClass"
              stroke-width="10"
              stroke-linecap="round"
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
              :stroke-dasharray="dashArray"
              :stroke-dashoffset="dashOffset"
            ></circle>
            <text
              x="50"
              y="50"
              fill="white"
              font-family="Verdana"
              font-size="12"
              text-anchor="middle"
              alignment-baseline="middle"
            >
              {{ progress }}%
            </text>
          </svg>
        </div>
      </div>
    </div>
    <div class="flex justify-center">
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 px-2 pt-10 mb-10">
        <div>
          <div
            class="flex items-center w-full max-w-xs p-3 sm:p-4 space-x-4 rtl:space-x-reverse text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow transition-transform ease-in-out delay-100 hover:scale-105 cursor-pointer"
            @click="progress = 78"
          >
            <svg
              class="w-8 h-8 sm:w-10 sm:h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 361"
            >
              <path
                fill="#e44d26"
                d="m255.555 70.766l-23.241 260.36l-104.47 28.962l-104.182-28.922L.445 70.766z"
              />
              <path
                fill="#f16529"
                d="m128 337.95l84.417-23.403l19.86-222.49H128z"
              />
              <path
                fill="#ebebeb"
                d="M82.82 155.932H128v-31.937H47.917l.764 8.568l7.85 88.01H128v-31.937H85.739zm7.198 80.61h-32.06l4.474 50.146l65.421 18.16l.147-.04V271.58l-.14.037l-35.568-9.604z"
              />
              <path
                d="M24.18 0h16.23v16.035h14.847V0h16.231v48.558h-16.23v-16.26H40.411v16.26h-16.23V0zm68.65 16.103H78.544V0h44.814v16.103h-14.295v32.455h-16.23V16.103zM130.47 0h16.923l10.41 17.062L168.203 0h16.93v48.558h-16.164V24.49l-11.166 17.265h-.28L146.35 24.49v24.068h-15.88zm62.74 0h16.235v32.508h22.824v16.05h-39.06z"
              />
              <path
                fill="#fff"
                d="M127.89 220.573h39.327l-3.708 41.42l-35.62 9.614v33.226l65.473-18.145l.48-5.396l7.506-84.08l.779-8.576H127.89zm0-64.719v.078h77.143l.64-7.178l1.456-16.191l.763-8.568H127.89z"
              />
            </svg>
            <div class="ps-4 text-xs sm:text-sm font-normal">HTML</div>
          </div>
        </div>
        <div>
          <div
            class="flex items-center w-full max-w-xs p-3 sm:p-4 space-x-4 rtl:space-x-reverse text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow transition-transform ease-in-out delay-100 hover:scale-105 cursor-pointer"
            @click="progress = 72"
          >
            <svg
              class="w-8 h-8 sm:w-10 sm:h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 361"
            >
              <path
                fill="#264de4"
                d="M127.844 360.088L23.662 331.166L.445 70.766h255.11l-23.241 260.36z"
              />
              <path
                fill="#2965f1"
                d="m212.417 314.547l19.86-222.49H128V337.95z"
              />
              <path
                fill="#ebebeb"
                d="m53.669 188.636l2.862 31.937H128v-31.937zm-5.752-64.641l2.903 31.937H128v-31.937zM128 271.58l-.14.037l-35.568-9.604l-2.274-25.471h-32.06l4.474 50.146l65.421 18.16l.147-.04z"
              />
              <path
                d="M60.484 0h38.68v16.176H76.66v16.176h22.506v16.175H60.484zm46.417 0h38.681v14.066h-22.505v2.813h22.505v32.352h-38.68V34.46h22.505v-2.813H106.9zm46.418 0H192v14.066h-22.505v2.813H192v32.352h-38.681V34.46h22.505v-2.813H153.32z"
              />
              <path
                fill="#fff"
                d="m202.127 188.636l5.765-64.641H127.89v31.937h45.002l-2.906 32.704H127.89v31.937h39.327l-3.708 41.42l-35.62 9.614v33.226l65.473-18.145l.48-5.396l7.506-84.08z"
              />
            </svg>
            <div class="ps-4 text-xs sm:text-sm font-normal">CSS</div>
          </div>
        </div>
        <div>
          <div
            class="flex items-center w-full max-w-xs p-3 sm:p-4 space-x-4 rtl:space-x-reverse text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow transition-transform ease-in-out delay-100 hover:scale-105 cursor-pointer"
            @click="progress = 60"
          >
            <svg
              class="w-8 h-8 sm:w-10 sm:h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
            >
              <path fill="#f7df1e" d="M0 0h256v256H0z" />
              <path
                d="m67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371c7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259c-19.245 0-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607c9.969 0 16.325-4.984 16.325-11.858c0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257c0-18.044 13.747-31.792 35.228-31.792c15.294 0 26.292 5.328 34.196 19.247l-18.732 12.03c-4.125-7.389-8.591-10.31-15.465-10.31c-7.046 0-11.514 4.468-11.514 10.31c0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804c0 21.654-17.012 33.51-39.867 33.51c-22.339 0-36.774-10.654-43.819-24.574"
              />
            </svg>
            <div class="ps-4 text-xs sm:text-sm font-normal">Javascript</div>
          </div>
        </div>
        <div>
          <div
            class="flex items-center w-full max-w-xs p-3 sm:p-4 space-x-4 rtl:space-x-reverse text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow transition-transform ease-in-out delay-100 hover:scale-105 cursor-pointer"
            @click="progress = 80"
          >
            <svg
              class="w-8 h-8 sm:w-10 sm:h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 128"
            >
              <defs>
                <linearGradient
                  id="deviconBootstrap0"
                  x1="76.079"
                  x2="523.48"
                  y1="10.798"
                  y2="365.95"
                  gradientTransform="translate(1.11 14.613)scale(.24566)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#9013fe" />
                  <stop offset="1" stop-color="#6610f2" />
                </linearGradient>
                <linearGradient
                  id="deviconBootstrap1"
                  x1="193.51"
                  x2="293.51"
                  y1="109.74"
                  y2="278.87"
                  gradientTransform="translate(0 52)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#fff" />
                  <stop offset="1" stop-color="#f1e5fc" />
                </linearGradient>
                <filter
                  id="deviconBootstrap2"
                  width="197"
                  height="249"
                  x="161.9"
                  y="135.46"
                  color-interpolation-filters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="8" />
                  <feColorMatrix
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                  />
                  <feBlend
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow"
                  />
                  <feBlend
                    in="SourceGraphic"
                    in2="effect1_dropShadow"
                    result="shape"
                  />
                </filter>
              </defs>
              <path
                fill="url(#deviconBootstrap0)"
                d="M14.985 27.712c-.237-6.815 5.072-13.099 12.249-13.099h73.54c7.177 0 12.486 6.284 12.249 13.099c-.228 6.546.068 15.026 2.202 21.94c2.141 6.936 5.751 11.319 11.664 11.883v6.387c-5.913.564-9.523 4.947-11.664 11.883c-2.134 6.914-2.43 15.394-2.202 21.94c.237 6.815-5.072 13.098-12.249 13.098h-73.54c-7.177 0-12.486-6.284-12.249-13.098c.228-6.546-.068-15.026-2.203-21.94c-2.14-6.935-5.76-11.319-11.673-11.883v-6.387c5.913-.563 9.533-4.947 11.673-11.883c2.135-6.914 2.43-15.394 2.203-21.94"
              />
              <path
                fill="url(#deviconBootstrap1)"
                d="M267.1 364.46c47.297 0 75.798-23.158 75.798-61.355c0-28.873-20.336-49.776-50.532-53.085v-1.203c22.185-3.609 39.594-24.211 39.594-47.219c0-32.783-25.882-54.138-65.322-54.138h-88.74v217zm-54.692-189.48h45.911c24.958 0 39.131 11.128 39.131 31.279c0 21.505-16.484 33.535-46.372 33.535h-38.67zm0 161.96v-71.431h45.602c32.661 0 49.608 12.03 49.608 35.49c0 23.459-16.484 35.941-47.605 35.941z"
                filter="url(#deviconBootstrap2)"
                transform="translate(1.494 2.203)scale(.24566)"
              />
            </svg>
            <div class="ps-4 text-xs sm:text-sm font-normal">Bootstrap</div>
          </div>
        </div>
        <div>
          <div
            class="flex items-center w-full max-w-xs p-3 sm:p-4 space-x-4 rtl:space-x-reverse text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow transition-transform ease-in-out delay-100 hover:scale-105 cursor-pointer"
            @click="progress = 75"
          >
            <svg
              class="w-8 h-8 sm:w-10 sm:h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
            >
              <path
                fill="#44a8b3"
                d="M9 13.7q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1q-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1m-7 8.4q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1q-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1"
              />
            </svg>

            <div class="ps-4 text-xs sm:text-sm font-normal">TailwindCSS</div>
          </div>
        </div>
        <div>
          <div
            class="flex items-center w-full max-w-xs p-3 sm:p-4 space-x-4 rtl:space-x-reverse text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow transition-transform ease-in-out delay-100 hover:scale-105 cursor-pointer"
            @click="progress = 76"
          >
            <svg
              class="w-8 h-8 sm:w-10 sm:h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 264"
            >
              <path
                fill="#ff2d20"
                d="M255.856 59.62c.095.351.144.713.144 1.077v56.568c0 1.478-.79 2.843-2.073 3.578L206.45 148.18v54.18a4.135 4.135 0 0 1-2.062 3.579l-99.108 57.053c-.227.128-.474.21-.722.299c-.093.03-.18.087-.278.113a4.15 4.15 0 0 1-2.114 0c-.114-.03-.217-.093-.325-.134c-.227-.083-.464-.155-.68-.278L2.073 205.938A4.128 4.128 0 0 1 0 202.36V32.656c0-.372.052-.733.144-1.083c.031-.119.103-.227.145-.346c.077-.216.15-.438.263-.639c.077-.134.19-.242.283-.366c.119-.165.227-.335.366-.48c.119-.118.274-.206.408-.309c.15-.124.283-.258.453-.356h.005L51.613.551a4.135 4.135 0 0 1 4.125 0l49.546 28.526h.01c.165.104.305.232.454.351c.134.103.284.196.402.31c.145.149.248.32.371.484c.088.124.207.232.279.366c.118.206.185.423.268.64c.041.118.113.226.144.35c.095.351.144.714.145 1.078V138.65l41.286-23.773V60.692c0-.36.052-.727.145-1.072c.036-.124.103-.232.144-.35c.083-.217.155-.44.268-.64c.077-.134.19-.242.279-.366c.123-.165.226-.335.37-.48c.12-.118.269-.206.403-.309c.155-.124.289-.258.454-.356h.005l49.551-28.526a4.13 4.13 0 0 1 4.125 0l49.546 28.526c.175.103.309.232.464.35c.128.104.278.197.397.31c.144.15.247.32.37.485c.094.124.207.232.28.366c.118.2.185.423.267.64c.047.118.114.226.145.35m-8.115 55.258v-47.04l-17.339 9.981l-23.953 13.792v47.04l41.297-23.773zm-49.546 85.095V152.9l-23.562 13.457l-67.281 38.4v47.514zM8.259 39.796v160.177l90.833 52.294v-47.505L51.64 177.906l-.015-.01l-.02-.01c-.16-.093-.295-.227-.444-.34c-.13-.104-.279-.186-.392-.3l-.01-.015c-.134-.129-.227-.289-.34-.433c-.104-.14-.227-.258-.31-.402l-.005-.016c-.093-.154-.15-.34-.217-.515c-.067-.155-.154-.3-.196-.464v-.005c-.051-.196-.061-.403-.082-.604c-.02-.154-.062-.309-.062-.464V63.57L25.598 49.772l-17.339-9.97zM53.681 8.893L12.399 32.656l41.272 23.762L94.947 32.65L53.671 8.893zm21.468 148.298l23.948-13.786V39.796L81.76 49.778L57.805 63.569v103.608zM202.324 36.935l-41.276 23.762l41.276 23.763l41.271-23.768zm-4.13 54.676l-23.953-13.792l-17.338-9.981v47.04l23.948 13.787l17.344 9.986zm-94.977 106.006l60.543-34.564l30.264-17.272l-41.246-23.747l-47.489 27.34l-43.282 24.918z"
              />
            </svg>
            <div class="ps-4 text-xs sm:text-sm font-normal">Laravel</div>
          </div>
        </div>
        <div>
          <div
            class="flex items-center w-full max-w-xs p-3 sm:p-4 space-x-4 rtl:space-x-reverse text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow transition-transform ease-in-out delay-100 hover:scale-105 cursor-pointer"
            @click="progress = 68"
          >
            <svg
              class="w-8 h-8 sm:w-10 sm:h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 221"
            >
              <path
                fill="#41b883"
                d="M204.8 0H256L128 220.8L0 0h97.92L128 51.2L157.44 0z"
              />
              <path
                fill="#41b883"
                d="m0 0l128 220.8L256 0h-51.2L128 132.48L50.56 0z"
              />
              <path
                fill="#35495e"
                d="M50.56 0L128 133.12L204.8 0h-47.36L128 51.2L97.92 0z"
              />
            </svg>
            <div class="ps-4 text-xs sm:text-sm font-normal">VueJS</div>
          </div>
        </div>
        <div>
          <div
            class="flex items-center w-full max-w-xs p-3 sm:p-4 space-x-4 rtl:space-x-reverse text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow transition-transform ease-in-out delay-100 hover:scale-105 cursor-pointer"
            @click="progress = 69"
          >
            <svg
              class="w-8 h-8 sm:w-10 sm:h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 168"
            >
              <path
                fill="#00dc82"
                d="M143.618 167.029h95.166c3.023 0 5.992-.771 8.61-2.237a16.963 16.963 0 0 0 6.302-6.115a16.324 16.324 0 0 0 2.304-8.352c0-2.932-.799-5.811-2.312-8.35L189.778 34.6a16.966 16.966 0 0 0-6.301-6.113a17.626 17.626 0 0 0-8.608-2.238c-3.023 0-5.991.772-8.609 2.238a16.964 16.964 0 0 0-6.3 6.113l-16.342 27.473l-31.95-53.724a16.973 16.973 0 0 0-6.304-6.112A17.638 17.638 0 0 0 96.754 0c-3.022 0-5.992.772-8.61 2.237a16.973 16.973 0 0 0-6.303 6.112L2.31 141.975a16.302 16.302 0 0 0-2.31 8.35c0 2.932.793 5.813 2.304 8.352a16.964 16.964 0 0 0 6.302 6.115a17.628 17.628 0 0 0 8.61 2.237h59.737c23.669 0 41.123-10.084 53.134-29.758l29.159-48.983l15.618-26.215l46.874 78.742h-62.492zm-67.64-26.24l-41.688-.01L96.782 35.796l31.181 52.492l-20.877 35.084c-7.976 12.765-17.037 17.416-31.107 17.416"
              />
            </svg>
            <div class="ps-4 text-xs sm:text-sm font-normal">NuxtJS</div>
          </div>
        </div>
        <div>
          <div
            class="flex items-center w-full max-w-xs p-3 sm:p-4 space-x-4 rtl:space-x-reverse text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow transition-transform ease-in-out delay-100 hover:scale-105 cursor-pointer"
            @click="progress = 60"
          >
            <svg
              class="w-8 h-8 sm:w-10 sm:h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
            >
              <g fill="none">
                <rect width="256" height="256" fill="#f4f2ed" rx="60" />
                <path
                  fill="#0f0f0f"
                  d="M228 182.937a12.732 12.732 0 0 1-15.791-6.005c-9.063-13.567-19.071-26.522-28.69-39.755l-4.171-5.56c-11.454 15.346-22.908 30.08-33.361 45.371a12.23 12.23 0 0 1-15.012 5.894l42.98-57.659l-39.978-52.1a13.289 13.289 0 0 1 15.847 5.56c9.285 13.568 19.572 26.523 29.802 40.257c10.287-13.623 20.462-26.634 29.97-40.09a11.952 11.952 0 0 1 14.901-5.56l-15.513 20.573c-6.95 9.174-13.789 18.404-21.017 27.356a5.558 5.558 0 0 0 0 8.285c13.289 17.626 26.466 35.307 40.033 53.433M28 124.5c1.168-5.56 1.89-11.621 3.503-17.292c9.619-34.195 48.818-48.43 75.785-27.245c15.791 12.4 19.739 29.97 18.961 49.764H37.286c-1.446 35.363 24.075 56.714 56.713 45.816a33.864 33.864 0 0 0 21.518-23.965c1.724-5.56 4.504-6.505 9.786-4.893a45.145 45.145 0 0 1-21.573 32.972a52.263 52.263 0 0 1-60.884-7.784a54.767 54.767 0 0 1-13.678-32.138c0-1.89-.723-3.781-1.112-5.56A860.69 860.69 0 0 1 28 124.5m9.397-2.391h80.456c-.501-25.632-16.681-43.814-38.254-43.98c-24.02-.334-41.201 17.458-42.258 43.869z"
                />
              </g>
            </svg>

            <div class="ps-4 text-xs sm:text-sm font-normal">ExpressJS</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Initial progress value (change as needed)
const progress = ref(0);

// Calculate stroke-dasharray and stroke-dashoffset based on progress
const dashArray = computed(() => 2 * Math.PI * 40);
const dashOffset = computed(() => dashArray.value * (1 - progress.value / 100));

// Define progress circle class
const progressCircleClass = computed(() => {
  if (progress.value < 30) {
    return "text-red-500 progress-ring__circle stroke-current";
  } else if (progress.value < 70) {
    return "text-yellow-500 progress-ring__circle stroke-current";
  } else {
    return "text-green-500 progress-ring__circle stroke-current";
  }
});
</script>

<style scoped>
.progress-ring__circle {
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
}
</style>
