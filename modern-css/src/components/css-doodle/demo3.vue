<template>
  <div class="box-container">
    <div class="box-content">
      <css-doodle click-to-update>
        :doodle {
          @grid: 15 / 40vmin;
        }

        --s: 1vmin solid #fff;

        @random {
          border-top: var(--s);
        }

        @random {
          border-left: var(--s);
        }
      </css-doodle>
    </div>
    <pre class="box-source" textarea code>
      :doodle {
        @grid: 15 / 40vmin;
      }

      --s: 1vmin solid #fff;

      @random {
        border-top: var(--s);
      }

      @random {
        border-left: var(--s);
      }
    </pre>
  </div>
</template>

<script>
export default {
  name: "css-doodle-demo3"
}
</script>
