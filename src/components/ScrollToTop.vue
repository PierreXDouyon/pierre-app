<template>
  <button @click="scrollToTop" id="scrollToTop"></button>
</template>

<script>
export default {
  name: "ScrollToTop",
  data() {
    return {
      showscrollToTop: false,
    };
  },
  methods: {
    scrollToTop() {
      const c = document.documentElement.scrollTop || document.body.scrollTop;
      if (c > 0) {
        window.requestAnimationFrame(this.scrollToTop);
        window.scrollTo(0, c - c / 8);
      }
    },
  },
};
</script>
