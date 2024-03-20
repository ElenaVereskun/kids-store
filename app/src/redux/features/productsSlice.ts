import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import ServiceNews from "@shared/api/functionRequest/SerivceNews";
import IProducts, {
  IForm,
  ImagesToAdd,
  ImagesToDelete,
} from "../../../api/types/IProducts";

const port = process.env.NEXT_PUBLIC_BACKEND_API_PORT;
const host = process.env.NEXT_PUBLIC_BACKEND_API_HOST;

type THeaderOptions = {
  "Content-Type": string;
};

interface ProductsState {
  products: IProducts[];
  isLoading: boolean;
  error: string | null;
  isDataInvalid: boolean;
  needUpdate: boolean;
}

const initialState: ProductsState = {
  products: [],
  isLoading: false,
  error: null,
  isDataInvalid: true,
  needUpdate: false,
};

const getHeaders = (
  method: string,
  options: THeaderOptions = {
    "Content-Type": "application/json",
  }
) => ({
  method,
  headers: {
    ...options,
  },
});

export const getNews = createAsyncThunk<
  IProducts[],
  undefined,
  { rejectValue: string }
>("news/getFull", async (_, { rejectWithValue }) => {
  try {
    const response = await fetch(`http://${host}:${port}/products`, {
      ...getHeaders("GET"),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
  }
});

export const addNewsReducer = createAsyncThunk<undefined, IForm>(
  "news/add",
  async (data, { rejectWithValue }) => {
    try {
      await ServiceNews.addNews(data);
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue("Some error");
      }
    }
  }
);

export const updateNewsReducer = createAsyncThunk<
  undefined,
  {
    id: number;
    data: IForm;
    imagesToAdd: ImagesToAdd[];
    imagesToDelete: ImagesToDelete[];
  }
>(
  "news/update",
  async ({ data, id, imagesToAdd, imagesToDelete }, { rejectWithValue }) => {
    try {
      ServiceNews.updateNews(id, data, imagesToAdd, imagesToDelete);
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue("Some error");
      }
    }
  }
);

export const deleteNewsById = createAsyncThunk<undefined, number>(
  "news/del",
  async (id, { rejectWithValue }) => {
    try {
      ServiceNews.deleteNews(id);
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue("Some error");
      }
    }
  }
);

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setInvalid(state) {
      state.isDataInvalid = true;
    },
  },
  extraReducers(builder) {
    builder

      // get all
      .addCase(getNews.fulfilled, (state, action: PayloadAction<INews[]>) => {
        const newsWithImg = action.payload;
        state.news = newsWithImg;
        state.isLoading = false;
        state.error = null;
        state.isDataInvalid = false;
        state.needUpdate = false;
      })
      .addCase(getNews.pending, (state) => {
        state.isLoading = true;
      })

      // delete
      .addCase(deleteNewsById.rejected, (state) => {
        state.error = "Some Error";
      })
      .addCase(deleteNewsById.fulfilled, (state) => {
        state.isDataInvalid = true;
        state.isLoading = false;
        state.needUpdate = true;
      })
      .addCase(deleteNewsById.pending, (state) => {
        state.isLoading = true;
      })

      // update
      .addCase(updateNewsReducer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateNewsReducer.fulfilled, (state) => {
        state.isDataInvalid = true;
        state.isLoading = false;
        state.needUpdate = true;
      })
      .addCase(updateNewsReducer.rejected, (state) => {
        state.error = "Some Error";
      })

      // add
      .addCase(addNewsReducer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addNewsReducer.fulfilled, (state) => {
        state.isDataInvalid = true;
        state.isLoading = false;
        state.needUpdate = true;
      })
      .addCase(addNewsReducer.rejected, (state) => {
        state.error = "Some Error";
      });
  },
});

export default newsSlice.reducer;
