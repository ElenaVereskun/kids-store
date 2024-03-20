import { ContactsData, IForm } from '@shared/api/types/interface/IContact';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IInitialStateSet } from '@shared/api/types/interface/IContact';

const port = process.env.NEXT_PUBLIC_BACKEND_API_PORT;
const host = process.env.NEXT_PUBLIC_BACKEND_API_HOST;

const initialState: IInitialStateSet = {
  items: null,
  loading: false,
  error: null
};

export const setContacts = createAsyncThunk<ContactsData, IForm, { rejectValue: string }>(
  'setContacts',
  async function (items: IForm, { rejectWithValue }) {
    const accessToken = sessionStorage.getItem('accessToken');
    const type = sessionStorage.getItem('typeAuth');

    const phoneNumberConverted = items.phoneNumbers?.filter((item) => item.value.trim() !== '');

    const dataConverted = {
      phoneNumber: phoneNumberConverted.map((item) => {
        return item.value;
      }),
      email: items.emails[0].value,
      address: items.addresses,
      telegram: items.telegram,
      vkLink: items.vkLink,
      youtubeLink: items.youtubeLink,
      rutubeLink: items.rutubeLink
    };

    try {
      const response = await fetch(`http://${host}:${port}/contacts/1`, {
        method: 'PUT',
        headers: {
          Authorization: `${type} ${accessToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataConverted)
      });
      if (!response.ok) {
        const text = await response.text();
        console.error(`Error: ${response.status} - ${text}`);
        throw new Error('Server Error');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const setContactsSlice = createSlice({
  name: 'setContacts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setContacts.pending, (state) => {
        state.loading = true;
      })
      .addCase(setContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(setContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ? action.payload : 'Unknown error';
      });
  }
});

export default setContactsSlice.reducer;
