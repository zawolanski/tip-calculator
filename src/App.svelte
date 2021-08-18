<script lang="ts">
  import Logo from './assets/logo.svg';
  import Content from './components/Content/Content.svelte';
</script>

<div class="main">
  <header class="logo">
    <h1 class="visually-hidden">Tip calculator</h1>
    <Logo style="margin: 0 auto; display: block" />
  </header>
  <Content />
</div>

<style lang="scss">
  .main {
    max-width: 940px;
    width: 100%;
    margin: 0 auto;

    @media only screen and (min-width: 940px) {
      padding: 0 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
  }

  .logo {
    margin: 50px 0 40px 0;

    @media only screen and (min-width: 940px) {
      margin: 100px 0 75px;
    }
  }

  .visually-hidden {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
</style>
