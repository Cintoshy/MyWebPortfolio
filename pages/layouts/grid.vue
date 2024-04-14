<template>
  <div class="flex flex-col min-h-screen">
    <!-- Header -->
    <header class="bg-gray-800 text-white p-4">
      <h1 class="text-2xl">Header</h1>
    </header>

    <!-- Main content -->
    <div class="flex flex-1">
      <!-- Aside -->
      <aside class="bg-gray-600 text-white p-4 w-1/4 fixed h-full">
        <h2 class="text-lg">Aside</h2>
      </aside>

      <!-- Content -->
      <main class="bg-gray-200 p-4 flex-1 ml-64 overflow-y-auto">
        <h2 class="text-lg">Content</h2>
        <div class="grid grid-rows-3 grid-flow-col gap-4 p-5">
          <div class="row-span-3 bg-gray-500">
            <h1 class="text-6xl text-center pt-5">About Me</h1>
            <img class="p-5 m-auto" :src="myPhoto" width="300" alt="" />
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              quibusdam repudiandae sequi deserunt molestiae. Iste at
              reprehenderit eos! Impedit aperiam eveniet tenetur ipsam unde! Cum
              dolor optio quae magni odit.
            </h1>
          </div>
          <div class="col-span-12 bg-gray-500">
            <img class="p-5 m-auto" :src="myPhoto" width="300" alt="" />
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              quibusdam repudiandae sequi deserunt molestiae. Iste at
              reprehenderit eos! Impedit aperiam eveniet tenetur ipsam unde! Cum
              dolor optio quae magni odit.
            </h1>
          </div>
          <div class="row-span-2 col-span-12 bg-gray-500">
            <img class="p-5 m-auto" :src="myPhoto" width="300" alt="" />
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              quibusdam repudiandae sequi deserunt molestiae. Iste at
              reprehenderit eos! Impedit aperiam eveniet tenetur ipsam unde! Cum
              dolor optio quae magni odit.
            </h1>
          </div>
        </div>
        <div class="grid grid-rows-3 grid-flow-col gap-4 p-5">
          <div class="row-span-3 bg-gray-500">
            <h1 class="text-6xl text-center pt-5">About Me</h1>
            <img class="p-5 m-auto" :src="myPhoto" width="300" alt="" />
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              quibusdam repudiandae sequi deserunt molestiae. Iste at
              reprehenderit eos! Impedit aperiam eveniet tenetur ipsam unde! Cum
              dolor optio quae magni odit.
            </h1>
          </div>
          <div class="col-span-12 bg-gray-500">
            <img class="p-5 m-auto" :src="myPhoto" width="300" alt="" />
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              quibusdam repudiandae sequi deserunt molestiae. Iste at
              reprehenderit eos! Impedit aperiam eveniet tenetur ipsam unde! Cum
              dolor optio quae magni odit.
            </h1>
          </div>
          <div class="row-span-2 col-span-12 bg-gray-500">
            <img class="p-5 m-auto" :src="myPhoto" width="300" alt="" />
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              quibusdam repudiandae sequi deserunt molestiae. Iste at
              reprehenderit eos! Impedit aperiam eveniet tenetur ipsam unde! Cum
              dolor optio quae magni odit.
            </h1>
          </div>
        </div>
        <!-- Your main content here -->
        <!-- Lorem ipsum dolor sit amet, consectetur adipiscing elit. -->
        <!-- Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. -->
        <!-- Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. -->
      </main>
    </div>
  </div>
</template>

<script>
definePageMeta({
  layout: false,
});
</script>

<style>
/* Add any additional custom styles here */
</style>
