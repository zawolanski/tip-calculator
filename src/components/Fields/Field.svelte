<script lang="ts">
  import { store } from '../../store/store';
  import TextField from '../TextField/TextField.svelte';
  import DolarIcon from '../../assets/icon-dollar.svg';
  import PersonIcon from '../../assets/icon-person.svg';
  import Tip from '../Tip/Tip.svelte';
  import { isFloat, isNumber, isPositive, isRequired, isZero } from '../../util/validators';

  $: touched = { ...$store.touched };
  $: errors = { ...$store.errors };

  const handleChange = (e: any) => {
    const name: 'bill' | 'numberOfPeople' = e.target.name;

    touched[name] = true;

    if (isRequired($store.values[name])) errors[name] = 'Field is required';
    else if (isNumber($store.values[name])) errors[name] = 'Must be a number';
    else if (isPositive($store.values[name])) errors[name] = 'Must be positive';
    else if (isZero($store.values[name])) errors[name] = "Can't be zero";
    else if (name === 'numberOfPeople' && isFloat($store.values[name]))
      errors[name] = 'Must be an integer';
    else errors[name] = null;

    store.update((store) => ({
      ...store,
      errors: { ...store.errors, ...errors },
      touched: { ...store.touched, ...touched },
    }));

    if (errors[name] !== null) return;
  };
</script>

<div class="field">
  <div class="field__container">
    <TextField
      label="Bill"
      name="bill"
      val="bill"
      handleChange={(e) => handleChange(e)}
      errorMsg={$store.errors.bill && $store.touched.bill ? $store.errors.bill : ''}
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
      handleChange={(e) => handleChange(e)}
      errorMsg={$store.errors.numberOfPeople && $store.touched.numberOfPeople
        ? $store.errors.numberOfPeople
        : ''}
    >
      <PersonIcon slot="icon" />
    </TextField>
  </div>
</div>

<style lang="scss">
  @import './Field';
</style>
