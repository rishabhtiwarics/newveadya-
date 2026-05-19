import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      id: 1,
      tag: "Botanical Oil",
      name: "Ashwagandha Gold",
      price: 1850,
      image: "/images/product/1.jfif",
      category: "Stress Relief",
      shortDescription: "Relieves stress and restores vitality."
    },
    {
      id: 2,
      tag: "Face Elixir",
      name: "Saffron Glow",
      price: 2450,
      image: "/images/product/2.jfif",
      category: "Skin Care",
      shortDescription: "Illuminates skin with pure saffron."
    },
    {
      id: 3,
      tag: "Herbal Tea",
      name: "Brahmi Focus",
      price: 950,
      image: "/images/product/3.jfif",
      category: "Cognitive",
      shortDescription: "Enhances mental clarity and focus."
    },
    {
      id: 4,
      tag: "Bath Salts",
      name: "Neem Purify",
      price: 1250,
      image: "/images/product/4.jfif",
      category: "Body Care",
      shortDescription: "Deeply cleanses and detoxifies skin."
    },
    {
      id: 5,
      tag: "Face Mist",
      name: "Rose Water",
      price: 750,
      image: "/images/product/5.jfif",
      category: "Skin Care",
      shortDescription: "Hydrates and tones for a fresh look."
    },
    {
      id: 6,
      tag: "Hair Oil",
      name: "Bhringraj Vital",
      price: 1550,
      image: "/images/product/6.jfif",
      category: "Hair Care",
      shortDescription: "Nourishes scalp and strengthens hair."
    }
  ],
  loading: false,
  error: null
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.items = action.payload;
    }
  }
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
