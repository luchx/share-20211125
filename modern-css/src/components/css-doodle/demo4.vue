<template>
  <div class="box-container">
    <div class="box-content">
      <css-doodle click-to-update>
        :doodle {
          @grid: 1x50 / 40vmin;
          overflow: hidden;
          grid-auto-rows: 1vmin;
          grid-template-columns: repeat(auto-fill, 1vmin);
          border: 1px solid #223141;
        }
        :container {
          transform: scale(1.2);
        }

        margin: -.5px;
        grid-row-end: span @ri(2, 12);
        grid-column-end: span @ri(2, 12);
        border: 1px solid #fff;

        :after {
          position: absolute;
          content: '';
          border: 1px solid #223141;
          left: -1px;
          bottom: -1px;
          @size: @r(10%, 90%);
          background: @p(
            transparent,
            #FF5A59, #E6BBC2, #509DA6
          );
        }
      </css-doodle>
    </div>
    <pre class="box-source" textarea code>
      /* ... */

      :after {
        position: absolute;
        content: '';
        border: 1px solid #223141;
        left: -1px;
        bottom: -1px;
        @size: @r(10%, 90%);
        background: @p(
          transparent,
          #FF1489, #FF5A59, #509DA6
        );
      }
    </pre>
  </div>
</template>

<script>
export default {
  name: "css-doodle-demo4",
};
</script>