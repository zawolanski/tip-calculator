<script lang="ts">
  export let label: string;
  export let name: string;
  export let errorMsg: string = undefined;
  export let placeholder = '0';
  export let isTip = false;
</script>

<div class="field__label__wrapper">
  <label for={name} class="field__label {isTip && 'visually-hidden'}">{label}</label>
  {#if errorMsg !== undefined && !isTip}
    <p role="alert" class="field__error">{errorMsg}</p>
  {/if}
</div>
<div class="field__wrapper">
  <input
    type="number"
    id={name}
    {name}
    {placeholder}
    class="field__input {errorMsg && 'field__input--error'} {isTip && 'field__input--tip'}"
  />
  {#if !isTip}<div class="field__icon"><slot name="icon" /></div>{/if}
</div>

<style lang="scss">
  @import './TextField';
</style>
