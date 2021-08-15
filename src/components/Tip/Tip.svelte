<script lang="ts">
  import { store } from '../../store/store';
  import { isNumber } from '../../util/validators';

  import Radio from '../Radio/Radio.svelte';
  import TextField from '../TextField/TextField.svelte';

  $: touched = { ...$store.touched };
  $: errors = { ...$store.errors };

  const handleChange = () => {
    touched.tip__custom = true;

    if (
      isNumber($store.values.tip__custom) ||
      ($store.values.tip__custom !== null && parseInt($store.values.tip__custom) < 0) ||
      ($store.values.tip__custom !== null && +$store.values.tip__custom) > 100
    )
      errors.tip__custom = 'An invalid number';
    else errors.tip__custom = null;

    store.update((store) => ({
      values: { ...store.values, tip: null },
      errors: { ...store.errors, ...errors },
      touched: { ...store.touched, ...touched },
    }));

    if (errors.tip__custom !== null) return;
  };
</script>

<fieldset>
  <legend class="checkboxs__label">Select Tip %</legend>
  <div class="checkboxs__container">
    <Radio id="tip__5" label="5" value="5" />
    <Radio id="tip__10" label="10" value="10" />
    <Radio id="tip__15" label="15" value="15" />
    <Radio id="tip__25" label="25" value="25" />
    <Radio id="tip__50" label="50" value="50" />
    <div>
      <TextField
        label="Custom tip"
        name="tip__custom"
        placeholder="Custom"
        isTip
        val="tip__custom"
        errorMsg={$store.errors.tip__custom && $store.touched.tip__custom
          ? $store.errors.tip__custom
          : ''}
        {handleChange}
      />
    </div>
  </div>
</fieldset>

<style lang="scss">
  @import './Tip';
</style>
