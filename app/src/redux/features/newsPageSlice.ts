import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import INews from '@shared/api/types/interface/INews';

const port = process.env.NEXT_PUBLIC_BACKEND_API_PORT;
const host = process.env.NEXT_PUBLIC_BACKEND_API_HOST;

type TFetchOptions = number | undefined;
type THeaderOptions = {
  'Content-Type': string;
};

interface NewsState {
  news: INews;
  isLoading: boolean;
  error: string | null;
  isDataInvalid: boolean;
}

const initialState: NewsState = {
  news: {
    title: '',
    description: '',
    createdDate: '',
    id: undefined,
    imageNameList: [],
    lastModifiedDate: '',
    mainImage: null,
    videoLink: ''
  },
  isLoading: false,
  error: null,
  isDataInvalid: false
};

const getHeaders = (
  method: string,
  options: THeaderOptions = {
    'Content-Type': 'application/json'
  }
) => ({
  method,
  headers: {
    ...options
  }
});

export const getNewsForPage = createAsyncThunk<INews, TFetchOptions>(
  'news/getPage',
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(`http://${host}:${port}/news/${id}`, {
        ...getHeaders('GET')
      });

      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);

const setSrcImg = (image: string | undefined): string =>
  image ? image.replace(/localhost/i, host || '') : '/missNews.png';

const getNewsWithImg = (news: INews): INews => ({
  ...news,
  mainImage: {
    imageId: news.mainImage?.imageId ?? 0,
    imageName: setSrcImg(news.mainImage?.imageName ?? '')
  },
  imageNameList: news.imageNameList
    ? news.imageNameList?.map((el) => ({ ...el, imageUrl: setSrcImg(el.imageName) }))
    : []
});

export const newsPageSlice = createSlice({
  name: 'newsPage',
  initialState,
  reducers: {
    setInvalid(state) {
      state.isDataInvalid = true;
    }
  },
  extraReducers(builder) {
    builder.addCase(getNewsForPage.fulfilled, (state, action: PayloadAction<INews>) => {
      state.news = getNewsWithImg(action.payload);
      state.isLoading = false;
      state.error = null;
      state.isDataInvalid = false;
    });

    builder.addCase(getNewsForPage.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getNewsForPage.rejected.type, (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  }
});

export default newsPageSlice.reducer;
