<template>
  <div class="box-container">
    <div class="box-content">
      <css-doodle></css-doodle>
    </div>
    <pre class="box-source" textarea code live>
      :doodle{
        @grid: 30 x 1 / 40vmin;
      }
      @size: calc(75% / @I * @i);
      @place-cell: center;
      border: 1px solid hsla(
        calc(10 + 4 * @i), 70%, 68%, @r.8
      );
      border-radius: 25%;
      --d:@rand(20s,40s);
      --rf:@rand(360deg);
      --rt:calc(var(--rf) + @pick(1turn,-1turn));
      animation:spin var(--d) linear infinite; 
      @keyframes spin {
          from{
              transform: rotate(var(--rf));
          }
          to{
              transform: rotate(var(--rt));
          }
      }
    </pre>
  </div>
</template>

<script>
export default {
  name: "css-doodle-demo5",
};
</script>