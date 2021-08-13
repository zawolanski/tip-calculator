<script lang="ts">
  export let label: string;
  export let name: string;
  export let errorMsg: string = undefined;
</script>

<div class="field__label__wrapper">
  <label for={name} class="field__label">{label}</label>
  {#if errorMsg !== undefined}
    <p role="alert" class="field__error">{errorMsg}</p>
  {/if}
</div>
<div class="field__wrapper">
  <input
    type="number"
    id={name}
    {name}
    placeholder="0"
    class="field__input {errorMsg ? 'field__input--error' : ''}"
  />
  <div class="field__icon"><slot name="icon" /></div>
</div>

<style lang="scss">
  @import './TextField';
</style>
