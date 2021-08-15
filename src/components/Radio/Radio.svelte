<script lang="ts">
  import { store } from '../../store/store';

  export let name = 'tip';
  export let id: string;
  export let label: string;
  export let value: string;

  const handleChange = () =>
    store.update((store) => ({
      ...store,
      values: { ...store.values, tip__custom: null },
      errors: { ...store.errors, tip__custom: null },
    }));
</script>

<div class="checkbox__wrapper">
  <input
    type="radio"
    {id}
    {name}
    {value}
    bind:group={$store.values.tip}
    class="checkbox__field"
    on:change={handleChange}
  />
  <label for={id} class="checkbox__label">{label}</label>
</div>

<style lang="scss">
  @import './Radio.scss';
</style>
