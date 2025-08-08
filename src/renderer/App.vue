<template>
  <div id="app">
    <h1>Window Tools</h1>
    <p>您的桌面工具应用</p>
    
    <!-- 在这里添加您的插件组件 -->
    <div class="plugin-container">
      <!-- AI 接口弹窗 -->
      <!-- 时间管理 -->
      <!-- 英语学习 -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    // 在这里注册您的组件
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 20px;
}

.plugin-container {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

h1 {
  color: #42b883;
}
</style>