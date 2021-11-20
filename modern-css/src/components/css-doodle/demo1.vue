<template>
  <div class="box-container">
    <div class="box-content">
      <css-doodle></css-doodle>
    </div>
    <pre class="box-source" textarea code live>
      :doodle {
        @grid: 5 / 50vmin;
      }

      border: 1px solid #fff;
      margin: -.5px;
    </pre>
  </div>
</template>

<script>
export default {
  name: "css-doodle-demo1"
}
</script>
