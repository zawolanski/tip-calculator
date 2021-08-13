<script>
  import Fields from './Fields.svelte';
  import Summary from './Summary.svelte';
</script>

<div class="content">
  <form>
    <Fields />
    <Summary />
  </form>
</div>

<style>
  .content {
    background-color: var(--white);
    border-radius: 25px 25px 0px 0px;
    min-height: calc(100vh - 144px);
  }
</style>
