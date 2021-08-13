<script lang="ts">
  import Logo from './assets/logo.svg';
  import Content from './components/Content/Content.svelte';
</script>

<div class="main">
  <div class="logo">
    <Logo style="margin: 0 auto; display: block" />
  </div>
  <Content />
</div>

<style lang="scss">
  .main {
    max-width: 920px;
    width: 100%;
    margin: 0 auto;
  }

  .logo {
    height: 144px;
    padding-top: 50px;
  }
</style>
