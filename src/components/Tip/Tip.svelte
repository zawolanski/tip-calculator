<script lang="ts">
  import Radio from '../Radio/Radio.svelte';
  import TextField from '../TextField/TextField.svelte';
</script>

<fieldset>
  <legend class="checkboxs__label">Select Tip %</legend>
  <div class="checkboxs__container">
    <Radio id="tip__5" label="5" value="5" />
    <Radio id="tip__10" label="10" value="10" />
    <Radio id="tip__15" label="15" value="15" />
    <Radio id="tip__25" label="25" value="25" />
    <Radio id="tip__50" label="50" value="50" />
    <div><TextField label="Custom tip" name="tip__custom" placeholder="Custom" isTip /></div>
  </div>
</fieldset>

<style lang="scss">
  @import './Tip';
</style>
