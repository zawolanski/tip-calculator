<script lang="ts">
  import Summary from '../Summary/Summary.svelte';
  import Field from '../Fields/Field.svelte';
</script>

<main class="content">
  <form class="content__form" autocomplete="off">
    <Field />
    <Summary />
  </form>
</main>

<style lang="scss">
  .content {
    background-color: var(--white);
    border-radius: 25px 25px 0px 0px;

    @media only screen and (min-width: 940px) {
      min-height: fit-content;
      border-radius: 25px;
      width: 920px;
    }
  }

  .content__form {
    @media only screen and (min-width: 940px) {
      display: flex;
    }
  }
</style>
