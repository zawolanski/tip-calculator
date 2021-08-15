import { writable } from 'svelte/store';

interface IStore {
  values: {
    bill: string | null;
    tip: string | null;
    numberOfPeople: string | null;
    tip__custom: string | null;
  };
  errors: {
    bill: string | null;
    numberOfPeople: string | null;
    tip__custom: string | null;
  };
  touched: {
    bill: boolean;
    numberOfPeople: boolean;
    tip__custom: boolean;
  };
}

export const store = writable<IStore>({
  values: {
    bill: null,
    tip: null,
    numberOfPeople: null,
    tip__custom: null,
  },
  errors: { bill: null, numberOfPeople: null, tip__custom: null },
  touched: { bill: false, numberOfPeople: false, tip__custom: false },
});
