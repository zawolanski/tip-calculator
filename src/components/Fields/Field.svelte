<script lang="ts">
  import { store } from '../../store/store';
  import TextField from '../TextField/TextField.svelte';
  import DolarIcon from '../../assets/icon-dollar.svg';
  import PersonIcon from '../../assets/icon-person.svg';
  import Tip from '../Tip/Tip.svelte';
  import { validate } from '../../util/validate';
</script>

<div class="field">
  <div class="field__container">
    <TextField
      label="Bill"
      name="bill"
      val="bill"
      errorMsg={$store.errors.bill || ''}
      on:input={(e) => validate(e)}
    >
      <DolarIcon slot="icon" />
    </TextField>
  </div>
  <div class="field__container">
    <Tip />
  </div>
  <div class="field__container field__container--last">
    <TextField
      label="Number of People"
      name="numberOfPeople"
      val="numberOfPeople"
      errorMsg={$store.errors.numberOfPeople || ''}
      on:input={(e) => validate(e)}
    >
      <PersonIcon slot="icon" />
    </TextField>
  </div>
</div>

<style lang="scss">
  @import './Field';
</style>
