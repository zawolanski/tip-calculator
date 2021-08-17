<script lang="ts">
  import { store } from '../../store/store';
  import { validate } from '../../util/validate';
  import Radio from '../Radio/Radio.svelte';
  import TextField from '../TextField/TextField.svelte';

  const handleChange = () =>
    store.update((store) => ({
      ...store,
      values: { ...store.values, tip: null },
      errors: { ...store.errors, tip: null },
    }));
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
        errorMsg={$store.errors.tip__custom || ''}
        on:input={(e) => validate(e)}
        on:change={handleChange}
        on:keyup={handleChange}
      />
    </div>
  </div>
</fieldset>

<style lang="scss">
  @import './Tip';
</style>
