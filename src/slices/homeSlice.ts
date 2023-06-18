import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type formNameTypes =
  | 'phone'
  | 'email'
  | 'nickname'
  | 'name'
  | 'sername'
  | 'sex'
  | 'advantages'
  | 'checkbox'
  | 'about';

// | 'checkbox'
// | 'radio';

interface IPayload {
  name: formNameTypes;
  value: any;
}

// interface initial{
//   number: string,
//   email: string,
//   nickname: string,
//   name: string,
//   sername: string,
//   sex: string,
//   advantages: string[],
//   radio:  number,
//   checkbox: number[],
//   step: number,
// }

const initialState = {
  phone: '+7 (978) 729-61-39',
  email: 'lehasazonoff@mail.ru',
  nickname: '',
  name: '',
  sername: '',
  sex: '',
  advantages: ['', '', ''],
  radio: null,
  checkbox: [],
  step: 0,
  about: '',
};

const homeSlice = createSlice({
  name: 'HomeP',
  initialState,
  reducers: {
    setState: (state, action: PayloadAction<IPayload>) => {
      state[action.payload.name] = action.payload.value;
    },
    setStep: (state, action) => {
      state.step = action.payload;
    },
    setRadio: (state, action) => {
      state.radio = action.payload;
    },
  },
});

export const { setState, setStep, setRadio } = homeSlice.actions;

export default homeSlice.reducer;
