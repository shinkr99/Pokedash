import { createSlice, configureStore } from "@reduxjs/toolkit";

// import { Pokemon } from "../types";

const appSlice = createSlice({
  name: "app",
  initialState: {
    // pokemons: [] as Array<Pokemon>,
    search: "",
  },
  reducers: {
    // setPokemons: (state, { payload }) => {
    //   state.pokemons = payload;
    // },
    setSearch: (state, { payload }) => {
      state.search = payload;
    },
  },
});

// export const { setPokemons } = appSlice.actions;
export const { setSearch } = appSlice.actions;

const store = configureStore({
  reducer: appSlice.reducer,
});

export type AppState = ReturnType<typeof store.getState>;

export default store;
