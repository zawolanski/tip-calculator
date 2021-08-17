<script lang="ts">
  import { store } from '../../store/store.js';
  export let label: string;
  export let name: string;
  export let val: 'bill' | 'numberOfPeople' | 'tip__custom';
  export let errorMsg: string | undefined = undefined;
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
    id={name}
    {name}
    {placeholder}
    bind:value={$store.values[val]}
    on:keyup
    on:change
    on:input
    class="field__input {errorMsg && 'field__input--error'} {isTip && 'field__input--tip'}"
  />
  {#if !isTip}<div class="field__icon"><slot name="icon" /></div>{/if}
</div>

<style lang="scss">
  @import './TextField';
</style>
