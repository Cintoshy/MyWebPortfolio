<template>
  <div class="w-full">
    <div class="mx-5 lg:mx-60 mb-10">
      <div class="bg-red-700 bg-opacity-30 rounded-t-md">
        <div class="flex items-center h-36 mt-5 gap-5 sm:gap-10 bg-opacity-20">
          <div>
            <img
              class="rounded-full ml-5 md:ml-10"
              src="../assets/images/me_formal.jpg"
              width="125"
              alt=""
            />
          </div>
          <div>
            <div class="text-2xl sm:text-5xl font-bold">ABOUT ME</div>
            <div>as a Software Developer</div>
          </div>
        </div>
        <div class="h-full p-5 sm:p-10 bg-opacity-20">
          As an Aspiring Software Developer, I'm passionate about leveraging
          technology to address problems. I'm excited to learn and collaborate
          with peers while maintaining a humble attitude. Innovation is a
          driving force for me, and I'm committed to making a positive impact. I
          believe in the strength of teamwork and collaborative efforts. Above
          all, I prioritize learning and am eager to embrace future
          opportunities
        </div>
      </div>
      <div
        class="flex flex-col bg-red-700 rounded-t-md border-t border-white h-full p-5 md:p-10 bg-opacity-20 rounded-b-md"
      >
        <div class="w-full">
          <h1 class="font-bold text-lg">Work Experience</h1>
          <h4 class="text-slate-200 text-opacity-70">
            2024 - PRESENT (Internship)
          </h4>
          <h4 class="italic">
            Intelliseven Technology Solutions Inc. | Unit 309, 6th floor, West
            City Plaza 66 West Ave, Quezon City, 1104 Metro Manila
          </h4>
          <br />
          <ul class="list-disc ml-5 md:ml-10">
            <li>
              Develop and implement tailored website solutions to precisely
              match client specifications and demands.
            </li>
            <li>
              Engaged in real-time website development, actively building
              dynamic websites from inception to completion.
            </li>
            <li>
              Experienced in frontend development using Vue-NuxtJS, and backend
              development with Express.js, utilizing MongoDB for database
              management.
            </li>
            <li>
              Assigned in mobile app development using React Native, working on
              creating cross-platform applications for iOS and Android
              platforms, collaborating with a team of developers to design,
              develop, test, and deploy robust and user-friendly mobile
              solutions, and staying updated with the latest trends and best
              practices in mobile app development to ensure the delivery of
              high-quality and innovative applications.
            </li>
          </ul>
        </div>
        <div class="w-full md:m-5">
          <div
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4"
          >
            <div
              class="flex justify-center items-center h-64 bg-gray-400 bg-opacity-40 rounded-lg"
            >
              <img
                src="../assets/images/team.jpg"
                alt="Image 1"
                class="object-fill max-w-full max-h-full"
              />
            </div>
            <div
              class="flex justify-center items-center h-64 bg-gray-200 rounded-lg"
            >
              <img
                src="../assets/images/code.jpg"
                alt="Image 2"
                class="object-cover w-full h-full rounded-lg"
              />
            </div>
            <div
              class="flex justify-center items-center h-64 bg-gray-200 rounded-lg"
            >
              <img
                src="../assets/images/mobile1.jpg"
                alt="Image 3"
                class="object-cover w-full h-full rounded-lg"
              />
            </div>
            <!-- Add more images as needed -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import logo from "../assets/images/intelliseven_logo.png";
import cover from "../assets/images/cover.jpg";
import myPhoto from "../assets/images/me.jpg";
</script>

<style scoped></style>
