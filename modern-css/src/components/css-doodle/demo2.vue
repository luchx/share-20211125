<template>
  <div class="box-container">
    <div class="box-content">
      <css-doodle click-to-update>
        :doodle {
          @grid: 50x1 / 40vmin;
          overflow: hidden;
          grid-auto-flow: dense;
          grid-auto-rows: 1vmin;
          grid-template-columns: 
            repeat(auto-fill, 1vmin);
        }
        :container {
          transform: scale(1.2);
        }

        margin: -.5px;
        grid-row-end: span @ri(2, 12);
        grid-column-end: span @ri(2, 12);
        border: calc(@i/@I*2px) solid @p(
          transparent,
          #FF1489, #FF5A59, #509DA6
        );
      </css-doodle>
    </div>
    <pre class="box-source" textarea code>
      :doodle {
        @grid: 50x1 / 40vmin;
        overflow: hidden;
        grid-auto-flow: dense;
        grid-auto-rows: 1vmin;
        grid-template-columns: 
          repeat(auto-fill, 1vmin);
      }
      :container {
        transform: scale(1.2);
      }

      margin: -.5px;
      grid-row-end: span @ri(2, 12);
      grid-column-end: span @ri(2, 12);
      border: calc(@i/@I*2px) solid @p(
        transparent,
        #FF1489, #FF5A59, #509DA6
      );
    </pre>
  </div>
</template>

<script>
export default {
  name: "css-doodle-demo2"
}
</script>
