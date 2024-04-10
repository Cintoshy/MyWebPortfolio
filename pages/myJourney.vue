<template>
  <!-- <div class="grid grid-cols-3 gap-3 min-w-full" id="home">
    <div class="col-span-3" id="id">
      <div class="flex text-3xl md:text-5xl font-extrabold font-sans my-1">
        MY JOURNEY IN IT INDUSRTY
      </div>
    </div>
    <div class="col-span-3 bg-gray-900" id="id">
      <div class="flex justify-center">
        <img :src="logo" width="400" class="m-0 p-0" alt="" />
      </div>
    </div>
    <div class="col-span-3">
      <img :src="cover" class="h-1/2 object-cover" alt="" />
    </div>
    <div class="bg-gray-900">01</div>
    <div class="bg-gray-800">02</div>
    <div class="bg-gray-900">03</div>
    <div class="col-span-2 bg-gray-700">04</div>
    <div class="bg-gray-600">05</div>
    <div class="bg-gray-500">06</div>
    <div class="col-span-2 bg-gray-400">07</div>
  </div> -->
  <div class="grid grid-rows-3 grid-flow-col gap-4 p-5">
    <div class="row-span-3 bg-gray-500">
      <h1 class="text-6xl text-center pt-5">About Me</h1>
      <img class="p-5 m-auto" :src="myPhoto" width="300" alt="" />
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
        quibusdam repudiandae sequi deserunt molestiae. Iste at reprehenderit
        eos! Impedit aperiam eveniet tenetur ipsam unde! Cum dolor optio quae
        magni odit.
      </h1>
    </div>
    <div class="col-span-12 bg-gray-500">
      <img class="p-5 m-auto" :src="myPhoto" width="300" alt="" />
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
        quibusdam repudiandae sequi deserunt molestiae. Iste at reprehenderit
        eos! Impedit aperiam eveniet tenetur ipsam unde! Cum dolor optio quae
        magni odit.
      </h1>
    </div>
    <div class="row-span-2 col-span-12 bg-gray-500">
      <img class="p-5 m-auto" :src="myPhoto" width="300" alt="" />
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
        quibusdam repudiandae sequi deserunt molestiae. Iste at reprehenderit
        eos! Impedit aperiam eveniet tenetur ipsam unde! Cum dolor optio quae
        magni odit.
      </h1>
    </div>
  </div>
</template>

<script setup>
import logo from "../assets/images/intelliseven_logo.png";
import cover from "../assets/images/cover.jpg";
import myPhoto from "../assets/images/me.jpg";
</script>

<style scoped></style>
