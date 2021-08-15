<script>
  import { store } from '../../store/store';

  $: total = 0;
  $: tipAmount = 0;

  $: {
    let tip = $store.values.tip || $store.values.tip__custom;
    let bill = $store.values.bill;
    let numberOfPeople = $store.values.numberOfPeople;
    let errors = $store.errors;
    let touched = $store.touched;

    if (
      errors.bill === null &&
      touched.bill &&
      bill &&
      errors.numberOfPeople === null &&
      touched.numberOfPeople &&
      numberOfPeople &&
      numberOfPeople !== '0'
    ) {
      total = +bill / +numberOfPeople;

      if (
        (errors.tip__custom === null && touched.tip__custom && tip__custom !== null) ||
        tip !== null
      ) {
        tipAmount = total * (+tip / 100);
        total += tipAmount;
      }
    } else {
      total = 0;
      tipAmount = 0;
    }
  }

  const resetForm = () => {
    store.update((store) => ({
      ...store,
      values: { bill: null, numberOfPeople: null, tip: null, tip__custom: null },
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
        $store.values.tip__custom === null}
      type="reset"
      on:click={resetForm}
      class="summary__button">reset</button
    >
  </div>
</div>

<style lang="scss">
  @import './Summary.scss';
</style>
