<template>
  <nav
    id="nav"
    class="fixed inset-x-0 top-0 flex flex-row justify-between z-10 text-white bg-transparent"
  >
    <div class="p-4">
      <div class="font-extrabold tracking-widest text-xl">
        <a href="#" class="transition duration-500 hover:text-red-500"
          >ComiCBA</a
        >
      </div>
    </div>
  </nav>

  <!-- Opened Nav in Mobile, you can use javascript/jQuery -->
  <div
    id="nav-opened"
    class="fixed left-0 right-0 hidden bg-white mx-2 mt-16 rounded-br rounded-bl shadow z-10"
  >
    <div class="p-2 divide-y divide-gray-600 flex flex-col">
      <a href="#about" class="p-2 font-semibold hover:text-red-700">About</a>
      <a href="#whyus" class="p-2 font-semibold hover:text-red-700">Why Us ?</a>
      <a href="#showcase" class="p-2 font-semibold hover:text-red-700"
        >Our Products</a
      >
    </div>
  </div>

  <header
    id="up"
    class="bg-center bg-fixed bg-no-repeat bg-cover h-screen relative"
  >
    <!-- Overlay Background + Center Control -->
    <div
      class="h-screen bg-opacity-50 bg-black flex items-center justify-center"
      style="background: rgba(0, 0, 0, 0.5)"
    >
      <div class="mx-2 text-center">
        <h1
          class="text-gray-100 font-extrabold text-4xl xs:text-5xl md:text-6xl"
        >
          <span class="text-white">Best WEB</span>
        </h1>
        <h2
          class="text-gray-200 font-extrabold text-3xl xs:text-4xl md:text-5xl leading-tight"
        >
          to know <span class="text-white">MAVEL </span> COMICS
        </h2>
        <div class="inline-flex">
          <RouterLink to="/comics/" class="hero-btn"> COMICS </RouterLink>
          <RouterLink to="/character" class="hero-btn"> CHARACTERS </RouterLink>
          <RouterLink to="/events" class="hero-btn"> EVENTS </RouterLink>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped>
header {
  background: url('https://www.laguiadelvaron.com/wp-content/uploads/2019/03/200290.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.hero-btn {
  @apply p-2 my-5 mx-2 bg-red-700 hover:bg-red-800 font-bold text-white rounded border-2 border-transparent hover:border-red-800 shadow-md transition duration-500 md:text-xl;
}
</style>
