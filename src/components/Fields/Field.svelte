<script lang="ts">
  import TextField from '../TextField/TextField.svelte';
  import DolarIcon from '../../assets/icon-dollar.svg';
  import PersonIcon from '../../assets/icon-person.svg';
  import Checkbox from '../Tip/Tip.svelte';
</script>

<div class="field">
  <div class="field__container">
    <TextField label="Bill" name="bill"><DolarIcon slot="icon" /></TextField>
  </div>
  <div class="field__container">
    <Checkbox />
  </div>
  <div class="field__container field__container--last">
    <TextField label="Number of People" name="numberOfPeople"><PersonIcon slot="icon" /></TextField>
  </div>
</div>

<style lang="scss">
  @import './Field';
</style>
