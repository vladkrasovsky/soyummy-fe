import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import recipesReducer from './recipes/recipesSlice';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import shoppingListReducer from './shoppingList/shoppingListSlice';
import { mainRecipeReduser } from './previewCategories/categoriesSlice';
import favoriteRecipesReducer from './favoriteRecipes/favoriteRecipesSlice';
import myRecipesReducer from './myRecipes/myRecipesRecipesSlice';
import ingredientsReducer from './ingredients/ingredientsSlice';
import { searchReducer } from './search/searchSlice';
import categoriesReducer from './categories/categoriesSlice';
import subscribeReducer from './subscribe/subscribeSlice';

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistReducer,
} from 'redux-persist';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['accessToken', 'Login'],
};

export const persistedReducerAuth = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedReducerAuth,
    recipes: recipesReducer,
    shoppingList: shoppingListReducer,
    mainRecipes: mainRecipeReduser,
    favoriteRecipes: favoriteRecipesReducer,
    myRecipes: myRecipesReducer,
    ingredients: ingredientsReducer,
    search: searchReducer,
    categories: categoriesReducer,
    subscribe: subscribeReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
