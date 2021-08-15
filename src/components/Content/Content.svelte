<script lang="ts">
  import Summary from '../Summary/Summary.svelte';
  import Field from '../Fields/Field.svelte';
</script>

<div class="content">
  <form class="content__form" autocomplete="off">
    <Field />
    <Summary />
  </form>
</div>

<style lang="scss">
  @import './Content';
</style>
