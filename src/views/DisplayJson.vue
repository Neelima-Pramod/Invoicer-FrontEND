<template>
<div>
   <h1 class="title has-text-centered .mt5">Welcome to Invoicer</h1>
    <login></login>
</div>

 
</template>

<script>
import Login from './Login'
export default {
  name: "DisplayJson",
  components:{Login}
};
</script>

<style scoped>
.md-theme-default a:not(.md-button) {
  color: white;
}
</style>

