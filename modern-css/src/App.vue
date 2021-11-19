<template>
  <div id="app">
    <div class="reveal">
      <div class="slides">
        <section>
          <h1>现代化 <span class="text-pink-500">CSS</span> 方法论</h1>
          <p>卢创旭</p>
          <p>- 移动验房-前端 -</p>
        </section>
        <section>
          <h3>
            <span class="capitalize text-green-600 mr-8">part 1</span>
            <span>CSS 处理器</span>
          </h3>
          <p>
            <small class="mt-40 text-gray-100">时长约10分钟</small>
          </p>
        </section>
        <section>
          <h3>
            <span class="mb-40">CSS 预处理器</span>
          </h3>
          <span>
            <img
              src="@/assets/images/css.png"
              style="
                height: 35vh;
                margin: 40px auto 4rem auto;
                background: transparent;
              "
            />
          </span>
          <p class="text-left text-4xl">
            “A CSS preprocessor is a program that lets you generate CSS from the
            preprocessor's own unique syntax.”
          </p>
          <p class="text-left text-base">
            译：CSS预处理器是一个能让你通过预处理器自己独有的语法来生成CSS的程序。
          </p>
        </section>
        <section>
          <section>
            <h3>预处理器变革</h3>
          </section>
          <section>
            <h4>青铜时代（模板）</h4>
            <pre>
              <code class="hljs css" style="word-wrap: break-word;">
                body {
                  left: <%= left %>px;
                  color: <%= color|height: 10% %>px;
                }
              </code>
            </pre>
          </section>
          <section data-auto-animate>
            <h4>特点</h4>
            <p>
              <ul>
                <li>对 CSS 无感知</li>
                <li>错误无法追踪</li>
                <li>维护困难</li>
              </ul>
            </p>
          </section>
          <section>
            <h4>白银时代</h4>
            <p class="text-left">
              <small>
                sass是诞生最早，也是世界上最成熟、最稳定、最强大的专业级CSS扩展语言！
              </small>
            </p>
            <pre>
              <code class="hljs css" style="word-wrap: break-word;">
                $font-stack: Helvetica, sans-serif
                $primary-color: #333

                body
                  font: 100% $font-stack
                  color: $primary-color

                // 转换后
                body {
                  font: 100% Helvetica, sans-serif;
                  color: #333;
                }
              </code>
            </pre>
          </section>
          <section data-auto-animate>
            <h4>特点</h4>
            <div class="flex items-center">
              <div>
                <img src="@/assets/images/sass.svg" style="height: 15rem;" alt=""/>
              </div>
              <p class="text-4xl">
                <ul>
                  <li>基于缩进，语法简洁，但可控性差</li>
                  <li>对于前端开发并不友好</li>
                  <li>实现对css的感知</li>
                </ul>
              </p>
            </div>
          </section>
          <section>
            <h3>黄金时代（css超集）</h3>
            <div class="grid grid-cols-3 gap-4">
              <div class="flex item-center">
                <img class="object-cover" src="@/assets/images/less.png" />
              </div>
              <div>
                <img class="object-cover" src="@/assets/images/scss.png" />
              </div>
              <div>
                <img class="object-cover" src="@/assets/images/stylus.webp" />
              </div>
            </div>
          </section>
          <section data-auto-animate>
            <h4>特点</h4>
            <p>
              <ul>
                <li>对前端更加友好</li>
                <li>不基于缩进，不简洁但更安全</li>
                <li>与自定义DSL同样强大的语言能力</li>
                <li>可以直接使用css书写</li>
              </ul>
            </p>
          </section>
          <section>
            <h3>预处理器常用规范</h3>
            <ul>
              <li class="text-red-500">变量</li>
              <li>混合（Mixin）Extend</li>
              <li class="text-red-500">嵌套规则</li>
              <li>运算</li>
              <li class="text-red-500">函数</li>
              <li>Namespaces & Accessors</li>
              <li>Scope</li>
              <li>注释</li>
            </ul>
          </section>
        </section>
        <section>
          <section>
            <h3>CSS后处理器</h3>
            <ul>
              <li>CSS压缩 CLEAN-CSS</li>
              <li>自动添加浏览器前缀 Autoprefixer</li>
              <li>CSS更加美观排序 CSScomb</li>
              <li>Rework取代Stylus 后处理器发热</li>
              <li>前后通吃 PostCSS</li>
            </ul>
          </section>
          <section>
            <img src="@/assets/images/postcss.png" />
          </section>
          <section>
            <img src="@/assets/images/ast.png" />
          </section>
          <section>
            <img src="@/assets/images/post.png" />
            <a href="https://csstools.github.io/postcss-preset-env">
              postcss-preset-env
            </a>
          </section>
          <section>
            <h3>安装使用</h3>
          </section>
          <section>
            <h3>vue-cli</h3>
            <p class="text-lg">
              由于 vue-cli 脚手架默认使用 postcss，所以我们只需安装 postcss-import postcss-preset-env
            </p>
            <pre>
                <code class="hljs bash" style="word-wrap: break-word;">
                  # postcss-import 用于支持 @import 引入 css

                  # postcss-preset-env 用于支持 css-next 特性

                  npm install -D postcss-import postcss-preset-env
                </code>
              </pre>
          </section>
          <section>
            <h3>webpack</h3>
            <pre>
              <code class="hljs bash" style="word-wrap: break-word;">
                npm install -D css-loader 
                  style-loader postcss postcss-loader 
                  postcss-import postcss-preset-env
              </code>
            </pre>
            <pre data-id="code-animation">
              <code class="hljs js" style="word-wrap: break-word;">
                // 然后在 webpack 配置中添加
                const path = require("path");
                const HtmlWebpackPlugin = require("html-webpack-plugin");

                const resolve = (dir) => path.join(__dirname, dir);

                module.exports = {
                  mode: "development",
                  devServer: {
                    port: 3000,
                  },
                  module: {
                    rules: [
                      {
                        test: /\.css$/,
                        use: [
                          "style-loader", 
                          "css-loader", 
                          "postcss-loader"
                        ],
                      },
                    ],
                  },
                  plugins: [
                    new HtmlWebpackPlugin({
                      template: resolve("index.html"),
                    }),
                  ],
                };
              </code>
            </pre>
          </section>
          <section>
            <h3>
              <span class="capitalize text-green-600 mr-8">part 2</span>
              <span>CSS 魔术师Houdini</span>
            </h3>
            <p>
              <small class="mt-40 text-gray-100">时长约20分钟</small>
            </p>
          </section>
        </section>
      </div>
    </div>
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
  display: block;
  height: 100vh;
  width: 100vw;
  & section {
    font-family: Georgia, "Hiragino Sans GB", serif;
  }
}

.playground .doodle,
.playground .source {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  transition: all 0.2s ease;
  flex: 1;
  height: 100%;
  position: relative;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
}
</style>
