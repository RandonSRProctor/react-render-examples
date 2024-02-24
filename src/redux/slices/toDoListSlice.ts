import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

// This is an interface in the docs.  Curious if a type is okay.
type ToDoListState = {
  isLargeFontEnabled: boolean;
  backgroundColor: string;
  userNickname: string;
  isNicknameFormOpen: boolean;
  listContents: string[];
  inputText: string;
  page: 'main' | 'sign-in';
};

const initialState: ToDoListState = {
  isLargeFontEnabled: false,
  backgroundColor: 'bg-sky-400',
  userNickname: '',
  isNicknameFormOpen: false,
  listContents: ['This', 'is', 'the', 'initial', 'state'],
  inputText: '',
  page: 'main',
};

export const toDoListSlice = createSlice({
  name: 'toDoList',
  initialState,
  reducers: {
    toggleTextSize: slice => {
      slice.isLargeFontEnabled = !slice.isLargeFontEnabled;
    },
    updateBackgroundColor: (slice, action: PayloadAction<string>) => {
      slice.backgroundColor = action.payload;
    },
    updateUserNickname: (slice, action: PayloadAction<string>) => {
      slice.userNickname = action.payload;
    },
    toggleNicknameForm: slice => {
      slice.isNicknameFormOpen = !slice.isNicknameFormOpen;
    },
    addToDo: (state, action: PayloadAction<string>) => {
      state.listContents = [...state.listContents, action.payload];
      state.inputText = '';
    },
    updateInputText: (state, action: PayloadAction<string>) => {
      state.inputText = action.payload;
    },
    changePage: (state, action: PayloadAction<'main' | 'sign-in'>) => {
      state.page = action.payload;
    },
  },
});

export const {
  toggleTextSize,
  updateBackgroundColor,
  updateUserNickname,
  toggleNicknameForm,
  addToDo,
  updateInputText,
  changePage,
} = toDoListSlice.actions;

export const selectIsLargeFontEnabled = (state: RootState) =>
  state.toDoListSlice.isLargeFontEnabled;

export const selectBackgroundColor = (state: RootState) =>
  state.toDoListSlice.backgroundColor;

export const selectUserNickname = (state: RootState) =>
  state.toDoListSlice.userNickname;

export const selectIsNicknameFormOpen = (state: RootState) =>
  state.toDoListSlice.isNicknameFormOpen;

export const selectInputText = (state: RootState) =>
  state.toDoListSlice.inputText;

export const selectPage = (state: RootState) => state.toDoListSlice.page;

export default toDoListSlice.reducer;
