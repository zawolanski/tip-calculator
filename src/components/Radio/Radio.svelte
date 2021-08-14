<script lang="ts">
  export let name = 'tip';
  export let id: string;
  export let label: string;
  export let value: string;
</script>

<div class="checkbox__wrapper">
  <input type="radio" {id} {name} {value} class="checkbox__field" />
  <label for={id} class="checkbox__label">{label}</label>
</div>

<style lang="scss">
  @import './Radio.scss';
</style>
