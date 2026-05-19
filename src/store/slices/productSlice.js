import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      id: 1,
      tag: "Juice",
      name: "She Care Juice",
      price: 541,
      image: "https://images.unsplash.com/photo-1610970881699-44a5587caa90?auto=format&fit=crop&w=500&q=80",
      category: "Juice",
      problem: "Immunity Wellness",
      shortDescription: "Boosts immune response and restores natural energy levels."
    },
    {
      id: 2,
      tag: "Capsule",
      name: "Diabic Care Capsules",
      price: 457,
      image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=500&q=80",
      category: "Capsule",
      problem: "Digestive Wellness",
      shortDescription: "Balances stomach acid and supports healthy insulin function."
    },
    {
      id: 3,
      tag: "Drop",
      name: "Orthovital Pain Drops",
      price: 320,
      image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=500&q=80",
      category: "Drop",
      problem: "Pain Reliever",
      shortDescription: "Relieves muscle soreness, stiffness, and supports joint mobility."
    },
    {
      id: 4,
      tag: "Juice",
      name: "Arjuna Cardiac Juice",
      price: 680,
      image: "https://images.unsplash.com/photo-1622484211148-7164a75e119d?auto=format&fit=crop&w=500&q=80",
      category: "Juice",
      problem: "Cardiac Wellness",
      shortDescription: "Strengthens heart muscles and promotes healthy blood circulation."
    },
    {
      id: 5,
      tag: "Drop",
      name: "Kumkumadi Glow Drops",
      price: 740,
      image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=500&q=80",
      category: "Drop",
      problem: "Skin Wellness",
      shortDescription: "Illuminates complexion and clears blemishes with saffron extracts."
    },
    {
      id: 6,
      tag: "Capsule",
      name: "Neem Blood Purifier Capsules",
      price: 420,
      image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=500&q=80",
      category: "Capsule",
      problem: "Blood Purifier",
      shortDescription: "Flushes out toxins, purifies blood, and promotes clean skin."
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
