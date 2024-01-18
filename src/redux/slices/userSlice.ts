import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type User = {
  name: string;
  image: string;
}

type UserInitialState = {
  user: null | User;
}

const initialState: UserInitialState = {
  user: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload || null;
    },
    removeUser: (state) => {
      state.user = null;
    }
  }
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
