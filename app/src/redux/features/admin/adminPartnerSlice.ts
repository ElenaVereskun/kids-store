import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import APIService from '@shared/api/services';
import { IForm, ServiceResult, State } from '@shared/api/types/interface/IPartner';
import urlToFile from '@shared/utils/urlToFile';

const host = process.env.NEXT_PUBLIC_BACKEND_API_HOST;

const initialState: State = {
  partner: null,
  isLoading: false,
  error: null
};

export const addPartner = createAsyncThunk<ServiceResult, IForm, { rejectValue: string }>(
  'partner/add',
  async (items) => {
    const formData = new FormData();
    formData.append('title', items.description);
    formData.append('link', items.link);
    formData.append('imageFile', items.image);
    return APIService({ url: '/partners', method: 'POST', body: formData });
  }
);

export const editPartner = createAsyncThunk<ServiceResult, IForm, { rejectValue: string }>(
  'partner/edit',
  async (items, { rejectWithValue }) => {
    const formData = new FormData();
    formData.append('title', items.description);
    formData.append('link', items.link);
    if (typeof items.image === 'string') {
      try {
        const file = (await urlToFile(items.image, 'downloaded_image.jpg')) as Blob;
        formData.append('imageFile', file);
      } catch (error) {
        console.error('Error converting URL to file:', error);
        if (error instanceof Error) {
          return rejectWithValue(error.message);
        }
      }
    } else {
      formData.append('imageFile', items.image);
    }
    return APIService({ url: `/partners/${items.id}`, method: 'PATCH', body: formData });
  }
);

export const deletePartner = createAsyncThunk<ServiceResult, number, { rejectValue: string }>(
  'partner/deleteID',
  async (id) => {
    return APIService({ url: `/partners/${id}`, method: 'DELETE' });
  }
);

const setSrcImg = (image: string | undefined): string =>
  image ? image.replace(/localhost/i, host || '') : '/missing_picture.jpg';

export const getPartnerID = createAsyncThunk<ServiceResult, number, { rejectValue: string }>(
  'partners/getID',
  async (id) => {
    return APIService({ url: `/partners/${id}` });
  }
);

export const adminPartnerSlice = createSlice({
  name: 'partnerSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // add
      .addCase(addPartner.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addPartner.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addPartner.rejected.type, (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // edit
      .addCase(editPartner.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editPartner.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(editPartner.rejected.type, (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // delete
      .addCase(deletePartner.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deletePartner.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deletePartner.rejected.type, (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // get ID
      .addCase(getPartnerID.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPartnerID.fulfilled, (state, action: PayloadAction<ServiceResult>) => {
        state.partner = {
          ...action.payload.data,
          imageUrl: setSrcImg(action.payload.data.imageUrl)
        };
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getPartnerID.rejected.type, (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export default adminPartnerSlice.reducer;
