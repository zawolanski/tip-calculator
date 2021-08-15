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

    console.log(errors);

    if (
      errors.bill === null &&
      touched.bill &&
      errors.numberOfPeople === null &&
      touched.numberOfPeople
    ) {
      total = +bill / +numberOfPeople;

      if (errors.tip__custom === null && touched.tip__custom) {
        tipAmount = total * (+tip / 100);
        total += tipAmount;
      }
    } else {
      total = 0;
    }
  }
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
    <button disabled type="reset" class="summary__button">reset</button>
  </div>
</div>

<style lang="scss">
  @import './Summary.scss';
</style>
