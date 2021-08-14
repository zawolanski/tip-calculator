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
    max-width: 940px;
    width: 100%;
    margin: 0 auto;

    @media only screen and (min-width: 940px) {
      padding: 0 10px;
    }
  }

  .logo {
    padding: 50px 0 40px;

    @media only screen and (min-width: 940px) {
      padding: 100px 0 75px;
    }
  }
</style>
