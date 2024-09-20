<template>
  <div class="grid h-full min-h-screen w-screen place-items-center bg-primary-500">
    <img
      v-if="!isDesktop"
      class="absolute top-0 z-0 h-1/2 w-full"
      alt="pattern-background"
      src="/images/pattern-background-mobile.svg"
    />
    <img
      v-if="isDesktop"
      class="absolute top-0 z-0 h-1/2 w-full"
      alt="pattern-background"
      src="/images/pattern-background-desktop.svg"
    />
    <div
      class="z-10 flex w-10/12 max-w-sm flex-col items-center justify-center rounded-summary bg-white md:max-w-md"
    >
      <img class="w-full rounded-t-summary" src="/images/illustration-hero.svg" />
      <div class="flex w-full flex-col items-center justify-center gap-y-3 p-7 md:p-12">
        <h1
          class="font-red-hat text-xl font-black text-neutral-700 md:text-summary-order"
        >
          Order Summary
        </h1>
        <p
          class="max-w-summary-paragraph-mobile text-center font-red-hat text-sm font-semibold text-neutral-600 md:mt-2 md:max-w-summary-paragraph-desktop md:text-base"
        >
          You can now listen to millions of songs, audiobooks, and podcasts on any device
          anywhere you like!
        </p>
        <div
          class="mt-3 flex w-full items-center justify-between rounded-summary-content bg-neutral-500 p-3 md:p-5"
        >
          <div class="flex items-center gap-x-4">
            <span class="flex size-10 items-center justify-center md:size-14">
              <img alt="icon-music" src="/images/icon-music.svg" />
            </span>
            <div class="flex flex-col items-center justify-center">
              <span
                class="font-red-hat text-sm font-extrabold text-neutral-700 md:text-base"
                >Annual Plan</span
              >
              <span class="font-red-hat text-sm text-neutral-600 md:text-base"
                >$59.99/year</span
              >
            </div>
          </div>
          <span
            class="font-red-hat text-sm font-bold text-primary-600/100 underline hover:cursor-pointer hover:text-primary-600/70 hover:no-underline"
          >
            Change
          </span>
        </div>
        <button
          class="mt-5 w-full rounded-summary-content bg-primary-600/100 py-4 font-red-hat font-bold text-white drop-shadow-2xl hover:cursor-pointer hover:bg-primary-600/70"
        >
          Proceed to Payment
        </button>
        <span
          class="mt-1 font-red-hat font-black text-neutral-700/50 hover:cursor-pointer hover:text-neutral-700/100 md:mt-4"
        >
          Cancel Order
        </span>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, computed } from "vue";

const currentWidth = ref(window.innerWidth);
const isDesktop = computed(() => currentWidth.value >= 1024);

const updateScreen = () => {
  currentWidth.value = window.innerWidth;
  console.log(isDesktop.value);
};
onMounted(() => {
  window.addEventListener("resize", updateScreen);
});
</script>
