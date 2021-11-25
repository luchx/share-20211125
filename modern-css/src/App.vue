<template>
  <div id="app">
    <div class="reveal">
      <div class="slides">
        <section>
          <h1>现代化 <span class="inline-block transform rotate-12 text-pink-500">css</span> 方法论</h1>
          <p>卢创旭</p>
          <p>- 移动验房-前端 -</p>
        </section>
        <section>
          <h3>
            <span class="capitalize text-green-600 mr-8">part 1</span>
            <span>css 模块化</span>
          </h3>
          <p>
            <small class="mt-40 text-gray-100">时长约 5 分钟</small>
          </p>
        </section>
        <section>
          <section>
            <h3>css 模块化规范</h3>
            <ul>
              <li>约定式规范: 
                <a target="_blank" href="https://zhuanlan.zhihu.com/p/44851489">SMACSS</a>、
                <a target="_blank" href="https://en.bem.info">BEM</a>、
                <a target="_blank" href="https://suitcss.github.io">SUIT</a>、
                <a target="_blank" href="https://patternlab.io">ACSS</a>、
                <a target="_blank" href="https://csswizardry.net/talks/2014/11/itcss-dafed.pdf">ITCSS</a>
              </li>
              <li>工具式规范: css modules、vue-scoped、css in js、js in css</li>
            </ul>
          </section>
          <section>
            <h3>约定式规范</h3>
            <div class="text-left">
              <p>基本思想：</p>
            <div class="text-2xl">
              - 通过约定来规范css的命名，以解决命名冲突问题
              <br>
              - 通过提供或推荐分层设计好的css代码，来达到样式复用的目的
            </div>
            <p>典型实现方式：</p>
            <ul class="text-2xl">
              <li>BEM：BEM 的意思就是块（block）、元素（element）、修饰符（modifier）</li>
              <li>ACSS：引入实现 ATOMIC CSS 思想的 <a href="https://www.tailwindcss.cn" target="_blank">tailwind css</a> 框架</li>
            </ul>
            </div>
          </section>
          <section>
            <h3>工具式规范</h3>
            <div class="text-left">
              <p>基本思想：</p>
            <div class="text-2xl">
              - 编译时将类名替换成全局唯一的带有作用域的类名，来达到模块化 css 局部作用域的效果。
              <br>
              - 缺点是需要搭配相关工具实现，有一定的学习成本。
            </div>
            <p>典型实现方式：</p>
            <ul class="text-2xl">
              <li>css modules：通过 webpack 的 css-loader 中启用 css modules</li>
              <li>css in js：引入 styled-components 插件</li>
              <li>js in css：css houdini</li>
            </ul>
            </div>
          </section>
        </section>
        <section>
          <h3>
            <span class="capitalize text-green-600 mr-8">part 2</span>
            <span>css 处理器</span>
          </h3>
          <p>
            <small class="mt-40 text-gray-100">时长约 15 分钟</small>
          </p>
        </section>
        <section>
          <section>
            <h3>
              <span class="mb-40">css 预处理器</span>
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
              “a css preprocessor is a program that lets you generate css from the
              preprocessor's own unique syntax.”
            </p>
            <p class="text-left text-base">
              译：css预处理器是一个能让你通过预处理器自己独有的语法来生成css的程序。
            </p>
          </section>
          <section>
            <h3>预处理器变革</h3>
          </section>
          <section>
            <h4>青铜时代（模板）</h4>
            <pre>
              <code class="hljs css">
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
                <li>对 css 无感知</li>
                <li>错误无法追踪</li>
                <li>维护困难</li>
              </ul>
            </p>
          </section>
          <section data-auto-animate>
            <h4>白银时代（sass）</h4>
            <p class="text-left">
              <small>
                sass是诞生最早，也是世界上最成熟、最稳定、最强大的专业级css扩展语言！
              </small>
            </p>
            <pre>
              <code class="hljs css" data-trim data-line-numbers="|8-11">
                $font-stack: helvetica, sans-serif
                $primary-color: #333

                body
                  font: 100% $font-stack
                  color: $primary-color

                // 转换后
                body {
                  font: 100% helvetica, sans-serif;
                  color: #333;
                }
              </code>
            </pre>
          </section>
          <section>
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
          <section data-auto-animate>
            <h3>预处理器常用规范</h3>
            <ul>
              <li class="fragment highlight-red">变量</li>
              <li>混合（mixin）extend</li>
              <li class="fragment highlight-red">嵌套规则</li>
              <li>运算</li>
              <li class="fragment highlight-red">函数</li>
              <li>namespaces & accessors</li>
              <li>scope</li>
              <li>注释</li>
            </ul>
          </section>
        </section>
        <section>
          <section>
            <h3>css后处理器</h3>
            <ul>
              <li>css压缩 clean-css</li>
              <li>自动添加浏览器前缀 autoprefixer</li>
              <li>css更加美观排序 csscomb</li>
              <li>rework取代stylus 后处理器发热</li>
              <li>前后通吃 postcss</li>
            </ul>
          </section>
          <section>
            <img src="@/assets/images/postcss.png" />
          </section>
          <section>
            <img src="@/assets/images/ast.png" />
          </section>
          <section>
            <h3>postcss</h3>
            <p>css 界的 babel</p>
            <img src="@/assets/images/post.png" />
          </section>
          <section>
            <h3>安装使用</h3>
            <p>
              <a href="https://cssnext.github.io/" target="_blank">Tomorrow’s CSS syntax</a>
            </p>
          </section>
          <section>
            <h3>vue-cli</h3>
            <p class="text-lg">
              由于 vue-cli 脚手架默认使用 postcss@7，所以我们只需安装 postcss-import@12.0.0 postcss-preset-env@6.5.0
            </p>
            <pre>
                <code class="hljs bash">
    # postcss-import 用于支持 @import 引入 css
    # postcss-preset-env 用于支持 css-next 特性

    npm install -d postcss-import@12.0.0 postcss-preset-env@6.5.0
                </code>
              </pre>
          </section>
          <section data-auto-animate>
            <h3>webpack</h3>
            <pre>
              <code class="hljs">
    npm install -D css-loader style-loader postcss 
                   postcss-loader postcss-import postcss-preset-env
              </code>
            </pre>
            <pre data-id="code-animation">
              <code class="hljs js" data-trim data-line-numbers="|13-21">
                // 然后在 webpack 配置中添加
                const path = require("path");
                const htmlwebpackplugin = require("html-webpack-plugin");

                const resolve = (dir) => path.join(__dirname, dir);

                module.exports = {
                  mode: "development",
                  devserver: {
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
                    new htmlwebpackplugin({
                      template: resolve("index.html"),
                    }),
                  ],
                };
              </code>
            </pre>
          </section>
          <section data-auto-animate>
            <h3>配置文件</h3>
            <p>在根目录新建 .postcssrc.js 文件</p>
            <pre>
              <code class="hljs js" data-trim data-line-numbers="|3-9">
                module.exports = {
                  plugins: {
                    "postcss-import": {},
                    "postcss-preset-env": {
                      stage: 3,
                      features: {}
                    },
                  },
                };

              </code>
            </pre>
            <p class="text-left">
              - <a href="https://github.com/csstools/postcss-preset-env/blob/main/src/lib/plugins-by-id.js#l36" target="_blank">
                  postcss-preset-env
                </a>
                <br>
              - <a href="https://postcss.docschina.org/doc/plugins.html" target="_blank">
                  postcss plugins
                </a>
            </p>
          </section>
          <section>
            <h3>postcss值得收藏的插件</h3>
            <ul>
              <li><span class="text-green-600">postcss-custom-properties</span> 运行时变量</li>
              <li><span class="text-green-600">postcss-utilities</span> 包含常用mixins、shortcuts、helpers的工具集</li>
              <li><span class="text-green-600">postcss-simple-vars</span> 与scss一致的变量实现</li>
              <li><span class="text-green-600">postcss-mixins</span> 实现类似sass的@mixin的功能</li>
              <li><span class="text-green-600">postcss-extend</span> 实现类似sass的继承功能</li>
              <li><span class="text-green-600">postcss-import</span> 实现类似sass的import</li>
              <li><span class="text-green-600">postcss-preset-env</span> 面向未来语法</li>
            </ul>
          </section>
        </section>
        <section>
          <h3>
            <span class="capitalize text-green-600 mr-8">part 3</span>
            <span>css 魔法</span>
          </h3>
          <p>
            <small class="mt-40 text-gray-100">时长约 30 分钟</small>
          </p>
        </section>
        <section>
          <section>
            <h3>css-doodle</h3>
            <p>
              <a href="https://css-doodle.com">https://css-doodle.com</a>
            </p>
            <p class="text-center text-4xl">
              “A web component for drawing patterns with CSS.”
            </p>
            <div class="text-center text-base mb-24">
              译：一个用来绘制CSS图案的WEB组件。
            </div>
            <pre>
              <code class="hljs bash">
                npm install css-doodle

                /* import it */
                import 'css-doodle';
              </code>
            </pre>
          </section>
          <section>
            <css-doodle-demo1 />
          </section>
          <section>
            <css-doodle-demo2 />
          </section>
          <section>
            <css-doodle-demo3 />
          </section>
          <section>
            <css-doodle-demo4 />
          </section>
          <section>
            <css-doodle-demo5 />
          </section>
        </section>
        <section>
          <section>
            <h3 style="text-transform: unset">CSS Houdini</h3>
          </section>
          <section>
            <img src="@/assets/images/houdini.png" />
            <p class="text-base">图片来源: https://www.w3cplus.com/css/css-houdini.html</p>
          </section>
          <section>
            <img src="@/assets/images/houdini-api.png" />
          </section>
          <section>
            <h3 style="text-transform: unset">Houdini APIs</h3>
            <p class="text-left text-2xl">
              “CSS Houdini是一组底层API，它们公开了CSS引擎的各个部分，从而使开发者可以通过这组API来扩展CSS。它让开发者拥有了直接访问CSSOM的能力，开发者可以通过这组API来编写浏览器可解析的CSS代码，这让开发者可以在不需要等待浏览器的实现的前提下实现自己想要的CSS功能。”
            </p>
            <ul>
              <li>Typed OM API</li>
              <li>Properties & Values API</li> 
              <li>Paint API</li> 
              <li>Layout API</li> 
              <li>Animation worklet</li> 
              <li>Parser API</li> 
              <li>Font Metrics API</li> 
            </ul>
          </section>
          <section>
            <h3 style="text-transform: unset">Typed OM API</h3>
            <p class="text-left text-2xl mb-24">
              解决⽬前模型的⼀些问题，并实现 CSS Parsing API 和 CSS 属性与值 API 相关的特性。
            </p>
            <pre>
              <code class="hljs js">
    // CSSOM
    document.body.style.width = '100px';

    // Typed OM
    // CSS.px(100) => new CSSUnitValue(100, 'px');
    document.body.attributeStyleMap.set('width', '100px');
    // document.body.attributeStyleMap.get('width'); // CSSUnitValue {value: 100, unit: 'px'}
    // document.body.attributeStyleMap.delete('width');
    // document.body.attributeStyleMap.clear();

    // 手动拼接字符串和各种奇怪错误的日子已经结束了！
    // var opacity = document.body.style.opacity; // '0.1'
    // document.body.style.opacity = opacity + 0.2 // 0.1 => 0.10.2

    // var opacity = document.body.attributeStyleMap.get('opacity').value; // 0.1
    document.body.attributeStyleMap.set('opacity', opacity + 0.2)
    // 又或者实现 calc(1em + 5px * 2)
    new CSSMathSum(CSS.em(1), new CSSMathProduct(CSS.px(5), 2))
              </code>
            </pre>
            <p class="text-center text-base">
              更多方法请查看： <a href="https://drafts.css-houdini.org/css-typed-om">https://drafts.css-houdini.org/css-typed-om</a>
            </p>
          </section>
          <section>
            <h3 style="text-transform: unset">Properties & Values API</h3>
            <p class="text-left text-2xl mb-24">
              解决⽬前模型的⼀些问题，并实现 CSS Parsing API 和 CSS 属性与值 API 相关的特性。
            </p>
            <pre>
              <code class="hljs js">
    /**
     * name ：css 变量名
     * syntax ：css type 类型，更多类型见：https://drafts.css-houdini.org/css-properties-values-api/#supported-names
     * inherits ：是否可继承
     * initialValue ：变量的初始值
    */
    window.CSS.registerProperty({
      name: '--demo-color',
      syntax: '&ltcolor&gt',
      inherits: false,
      initialValue: '#ff0000',
    });
              </code>
            </pre>
            <p class="text-center text-base">
              更多方法请查看： <a href="https://drafts.css-houdini.org/css-properties-values-api">https://drafts.css-houdini.org/css-properties-values-api</a>
            </p>
          </section>
          <section>
            <h3 style="text-transform: unset">CSS Parser API</h3>
            <p class="text-left text-2xl mb-24">
              CSS Parser API 还没有被写⼊规范，所以下⾯我要说的内容随时都会有变化，但是它的基本思想不会变：允许开发者⾃由扩展 CSS 词法分析器，引⼊新的结构（constructs），⽐如新的媒体规则、新的伪类、嵌套、 @extends 、@apply 等等。
            </p>
            <p class="text-left text-2xl">
              只要新的词法分析器知道如何解析这些新结构，CSSOM 就不会直接忽略它们，⽽是把这些结构放到正确的地⽅。
            </p>
          </section>
          <section>
            <h3 style="text-transform: unset">CSS Layout API</h3>
            <p class="text-left text-2xl mb-24">
              CSS Layout API允许开发者可以通过 CSS Layout API 实现⾃⼰的布局模块（layout module），这⾥的 “ 布局模块 ” 指的是display 的属性值。也就是说，这个 API 实现以后，开发者⾸次拥有了像 CSS 原⽣代码（⽐如display:flex 、display:table）那样的布局能⼒。
            </p>
            <pre>
              <code class="hljs js">
                CSS.layoutWorklet.addModule('./xxx.js');
              </code>
            </pre>
          </section>
          <section>
            <h3 style="text-transform: unset">CSS Paint API</h3>
            <p class="text-left text-2xl mb-24">
              CSS Paint API 和 Layout API ⾮常相似。它提供了⼀个 registerPaint ⽅法，操作⽅式和registerLayout ⽅法也很相似。当想要构建⼀个CSS 图像的时候，开发者随时可以调⽤paint() 函数，也可以使⽤刚刚注册好的名字。
            </p>
            <pre>
              <code class="hljs js">
                CSS.paintWorklet.addModule('./xxx.js');
              </code>
            </pre>
          </section>
          <section>
            <h3 style="text-transform: unset">Worklets实战</h3>
            <p class="text-left text-2xl">
              Worklets 的概念和 web worker 类似，它们允许你引入脚本文件并执行特定的 JS 代码，这样的 JS 代码要满足两个条件：第一，可以在渲染流程中调用；第二，和主线程独立。
            </p>
          </section>
          <section data-background-color="#ffffff" :data-background-image="require('@/assets/images/houdini-ready.png')" data-background-size="contain">
            <a href="https://ishoudinireadyyet.com" target="_blank" style="position: fixed; top: 0; display: block;width: 100%; height: 100px; color:#f00"></a>
          </section>
        </section>
        <section>
          <h3>
            <span class="capitalize text-green-600 mr-8">part 4</span>
            <span>Q&A</span>
          </h3>
          <div class="text-left text-base mt-40">
            <p class="text-2xl">资料来源：</p>
            <ul>
              <li>https://blog.techbridge.cc/2017/05/23/css-houdini</li>
              <li>https://mp.weixin.qq.com/s/Zqw8f5jX6MmeURRzc44C6Q</li>
              <li>https://www.cnblogs.com/cyn941105/p/5590239.html</li>
              <li>https://yuanchuan.dev/talk/generative-art-with-css</li>
              <li>https://www.qed42.com/insights/coe/javascript/building-powerful-custom-properties-css-houdini</li>
              <li>https://github.com/GoogleChromeLabs/houdini-samples</li>
              <li>https://csstools.github.io/postcss-preset-env</li>
              <li>https://zhuanlan.zhihu.com/p/141725118</li>
              <li>https://www.postcss.com.cn/</li>
              <li>https://css-doodle.com</li>
            </ul>
          </div>
        </section>
        <section>
          <img src="@/assets/images/qrcode.jpg" style="display: block; height: 30vh;width:auto;margin: 0 auto" alt=""/>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import '@/utils/slide';
import reveal from "reveal.js";
import revealMarkdown from "reveal.js/plugin/markdown/markdown.esm";
import revealHighlight from "reveal.js/plugin/highlight/highlight.esm.js";
import revealNotes from "reveal.js/plugin/notes/notes.esm.js";

export default {
  name: "app",
  mounted() {
    reveal.initialize({
      hash: true,
      controls: false,
      mousewheel: true,
      // learn about plugins: https://revealjs.com/plugins/
      plugins: [revealMarkdown, revealHighlight, revealNotes],
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
    font-family: georgia, "hiragino sans gb", serif;
  }
}

/* .playground .doodle,
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
} */
</style>
