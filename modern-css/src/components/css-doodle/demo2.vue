<template>
  <div class="box-container">
    <div class="box-content">
      <css-doodle click-to-update>
        :doodle {
          @grid: 1x50 / 50vmin;
          overflow: hidden;
          grid-auto-flow: dense;
          grid-auto-rows: 1vmin;
          grid-template-columns: repeat(auto-fill, 1vmin);
          border: 1px solid #fff;
        }
        :container {
          transform: scale(1.2);
        }

        margin: -.5px;
        grid-row-end: span @ri(2, 12);
        grid-column-end: span @ri(2, 12);
        border: 1px solid #fff;
      </css-doodle>
    </div>
    <pre class="box-source" textarea code>
      :doodle {
        @grid: 1x50 / 50vmin;
        grid-auto-flow: dense;
        /* ... */
      }

      grid-row-end: span @ri(2, 12);

      grid-column-end: span @ri(2, 12);
    </pre>
  </div>
</template>

<script>
export default {
  name: "css-doodle-demo2"
}
</script>
