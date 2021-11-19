<template>
  <div id="app" class="reveal">

  </div>
</template>

<script>
import Reveal from "reveal.js";
import RevealMarkdown from "reveal.js/plugin/markdown/markdown.esm";
import RevealHighlight from "reveal.js/plugin/highlight/highlight.esm.js";
import RevealNotes from "reveal.js/plugin/notes/notes.esm.js";

export default {
  name: "App",
  mounted() {
    Reveal.initialize({
      hash: true,
      mouseWheel: true,
      // Learn about plugins: https://revealjs.com/plugins/
      plugins: [RevealMarkdown, RevealHighlight, RevealNotes],
    });
  },
};
</script>

<style lang="postcss">
#app {
  position: relative;
  font-family: system-ui;
}
</style>
