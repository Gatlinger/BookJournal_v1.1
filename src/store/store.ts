import { configureStore } from "@reduxjs/toolkit";
import { BooksInShelfReducere } from "./BooksInShelfReducere";


export const store = configureStore({
    reducer: {
        booksInShelf: BooksInShelfReducere
    }
  })

  export type RootState = ReturnType<typeof store.getState>