import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ThemeState {
  value: string;
}

const initialState: ThemeState = {
  value: "light",
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
      console.log("Theme changed to:", action.payload);
      if (action.payload === "dark") {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;