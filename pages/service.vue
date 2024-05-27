<template>
  <div class="h-full">
    <div class="flex flex-row">
      <div class="w-3/5 flex justify-center items-center">
        <div class="flex items-center justify-center text-3xl font-bold">
          Service
        </div>
        <div class="flex flex-wrap">
          <div class="h-52 w-52 bg-slate-300">dsfds</div>
          <div class="h-52 w-52 bg-slate-300">dsfds</div>
          <div class="h-52 w-52 bg-slate-300">dsfds</div>
          <div class="h-52 w-52 bg-slate-300">dsfds</div>
          <div class="h-52 w-52 bg-slate-300">dsfds</div>
          <div class="h-52 w-52 bg-slate-300">dsfds</div>
        </div>
      </div>

      <div
        class="w-2/5 bg-slate-50 bg-opacity-70 px-5 border-l border-slate-50 rounded-s-3xl my-5 shadow-2xl"
      >
        <div class="p-5 bg-slate rounded-3xl m-5">
          <div class="my-5">
            <div class="text-3xl font-semibold text-gray-950">Get in Touch</div>
            <div class="text-sm text-slate-900">
              Fill out this contact form and let me know how I can assist you.
            </div>
          </div>

          <div>
            <form @submit.prevent="sendMail">
              <div class="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <input
                    type="text"
                    v-model="mailDetails.first_name"
                    id="first_name"
                    autocomplete="current-first_name"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder="First Name"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    v-model="mailDetails.last_name"
                    id="last_name"
                    autocomplete="current-last_name"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder="Last Name"
                    required
                  />
                </div>
              </div>
              <div class="mb-6">
                <input
                  type="email"
                  v-model="mailDetails.email"
                  id="email"
                  autocomplete="current-email"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder="Email address"
                  required
                />
              </div>
              <div class="mb-6">
                <textarea
                  type="text"
                  v-model="mailDetails.description"
                  id="description"
                  autocomplete="current-description"
                  class="block h-28 min-h-20 max-h-52 p-2.5 w-full text-sm text-gray-900 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder="Please specify your description here..."
                  required
                ></textarea>
              </div>
              <!-- <div class="flex items-start mb-6">
              <div class="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  required
                />
              </div>
              <label
                for="remember"
                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >I agree with the
                <a
                  href="#"
                  class="text-blue-600 hover:underline dark:text-blue-500"
                  >terms and conditions</a
                >.</label
              >
            </div> -->
              <button
                type="submit"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const mailDetails = ref({
  first_name: "",
  last_name: "",
  email: "",
  description: "",
});

const sendMail = async () => {
  try {
    const response = await fetch(
      "https://emailer.smollbites.com/ec5e14e0-4bf0-4f3a-8fbc-3f392c2073f3/send",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fields: {
            first_name: mailDetails.value.first_name,
            last_name: mailDetails.value.last_name,
            email: mailDetails.value.email,
            description: mailDetails.value.description,
          },
        }),
      }
    );

    if (response.ok) {
      alert("Email sent successfully!");
      mailDetails.value = {
        first_name: "",
        last_name: "",
        email: "",
        description: "",
      };
    } else {
      alert("Failed to send email.");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred while sending the email.");
  }
};
</script>

<style></style>
