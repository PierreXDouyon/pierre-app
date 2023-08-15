<template>
  <button @click="scrollToTop" id="scrollToTop"></button>
</template>

<script>
export default {
  data() {
    return {
      showButton: false,
    };
  },
  methods: {
    scrollToTop() {
      const scrollStep = -window.scrollY / (500 / 15);
      const scrollInterval = setInterval(() => {
        if (window.scrollY !== 0) {
          window.scrollBy(0, scrollStep);
        } else {
          clearInterval(scrollInterval);
          this.showButton = false; // Hide the button after reaching top
          this.scrollToElement("h1"); // Scroll to the element with ID "h1"
        }
      }, 15);
    },
    handleScroll() {
      this.showButton = window.scrollY > 100;
    },
    scrollToElement(id) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>
