<template>
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
