<template>
  <div class="box-container">
    <div class="box-content">
      <css-doodle click-to-update></css-doodle>
    </div>
    <pre class="box-source" textarea code live>
      :doodle {
        @grid: 5 / 40vmin;
      }

      border-width: 1px;
      border-style: solid;
      border-color: hsla(
        calc(100 + 20 * @i), 70%, 68%, @r.8
      );
      margin: -.5px;
    </pre>
  </div>
</template>

<script>
export default {
  name: "css-doodle-demo1"
}
</script>
