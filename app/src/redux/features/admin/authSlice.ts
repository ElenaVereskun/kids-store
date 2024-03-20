import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import APIService from '@shared/api/services';
import { IInitialState, ServiceResult } from '@shared/api/types/interface/IAuthorization';

const initialState: IInitialState = {
  isAuth: false,
  username: '',
  item: undefined,
  token: null,
  loading: false,
  error: null
};

export const fetchLogin = createAsyncThunk<
  ServiceResult | null,
  { username: string; password: string },
  { rejectValue: string }
>('fetchLogin', async function (loginDetails) {
  const codedLoginDetails = btoa(`${loginDetails.username}:${loginDetails.password}`);
  return APIService({
    url: '/auth/login',
    headers: { Authorization: `Basic ${codedLoginDetails}` }
  });
});

export const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    refreshTokens: (state, action) => {
      sessionStorage.setItem('accessToken', action.payload?.accessToken);
      sessionStorage.setItem('refreshToken', action.payload?.refreshToken);
      sessionStorage.setItem('typeAuth', action.payload?.type);
      state.token = {
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
        type: action.payload.type
      };
    },
    loadFromSessionStorage: (state) => {
      const serializedValue = sessionStorage.getItem('isAuth');
      const isAuth = serializedValue ? JSON.parse(serializedValue) : null;
      if (isAuth) {
        state.isAuth = true;
        state.username = 'admin';
        state.token = {
          accessToken: sessionStorage.getItem('accessToken'),
          refreshToken: sessionStorage.getItem('refreshToken'),
          type: sessionStorage.getItem('typeAuth')
        };
      } else {
        state.isAuth = false;
      }
    },
    logout: (state) => {
      sessionStorage.removeItem('isAuth');
      sessionStorage.removeItem('accessToken');
      sessionStorage.removeItem('refreshToken');
      sessionStorage.removeItem('typeAuth');
      state.isAuth = false;
      state.username = '';
      state.token = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        sessionStorage.setItem('isAuth', JSON.stringify(true));
        sessionStorage.setItem('accessToken', action.payload?.data?.accessToken || 'undefined');
        sessionStorage.setItem('refreshToken', action.payload?.data?.refreshToken || 'undefined');
        sessionStorage.setItem('typeAuth', action.payload?.data?.type || 'undefined');
        state.isAuth = true;
        state.username = 'admin';
        state.loading = false;
        state.token = {
          accessToken: action.payload?.data?.accessToken,
          refreshToken: action.payload?.data?.refreshToken,
          type: action.payload?.data?.type
        };
      })
      .addCase(fetchLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ? action.payload : 'Unknown error';
      });
  }
});

export default auth.reducer;
export const { loadFromSessionStorage, logout, refreshTokens } = auth.actions;
