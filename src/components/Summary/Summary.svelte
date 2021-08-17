<script lang="ts">
  import { store } from '../../store/store';

  $: total = 0;
  $: tipAmount = 0;

  $: {
    let bill = $store.values.bill || 0;
    let numberOfPeople = $store.values.numberOfPeople || 1;
    let tip = $store.values.tip;
    let tip__custom = $store.values.tip__custom || 0;
    let errors = $store.errors;

    if (errors.bill === '' && errors.numberOfPeople === '') {
      total = +bill / +numberOfPeople;

      if (errors.tip__custom === '') tipAmount = total * (+tip__custom / 100);
      else if (tip) tipAmount = total * (+tip / 100);
      else tipAmount = 0;

      total += tipAmount;
    } else {
      total = 0;
      tipAmount = 0;
    }
  }

  const resetForm = () => {
    store.update((store) => ({
      ...store,
      values: { bill: null, numberOfPeople: null, tip: null, tip__custom: null },
      errors: { bill: null, numberOfPeople: null, tip__custom: null },
    }));
  };
</script>

<div class="wrapper">
  <div>
    <div>
      <div class="summary">
        <div>
          <p class="summary__title">Tip Amount</p>
          <p class="summary__person">/&nbsp;person</p>
        </div>
        <p class="summary__amount">{tipAmount.toFixed(2)}</p>
      </div>
      <div class="summary summary--2">
        <div>
          <p class="summary__title">Total</p>
          <p class="summary__person">/&nbsp;person</p>
        </div>
        <p class="summary__amount">{total.toFixed(2)}</p>
      </div>
    </div>
    <button
      disabled={$store.values.bill === null &&
        $store.values.numberOfPeople === null &&
        $store.values.tip__custom === null &&
        $store.values.tip === null}
      type="reset"
      on:click={resetForm}
      class="summary__button">reset</button
    >
  </div>
</div>

<style lang="scss">
  @import './Summary.scss';
</style>
