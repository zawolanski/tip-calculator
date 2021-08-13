<script lang="ts">
  import TextField from '../TextField/TextField.svelte';
  import DolarIcon from '../assets/icon-dollar.svg';
  import PersonIcon from '../assets/icon-person.svg';
</script>

<div class="field">
  <div class="field__container">
    <TextField label="Bill" name="bill"><DolarIcon slot="icon" /></TextField>
  </div>
  <div class="field__container">
    <p class="field__label">Select Tip %</p>
    <div class="field__wrapper" />
  </div>
  <div class="field__container">
    <TextField label="Number of People" name="numberOfPeople"><PersonIcon slot="icon" /></TextField>
  </div>
</div>

<style lang="scss">
  @import './Field';
</style>
