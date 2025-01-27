import { useSelector } from "react-redux"
import { RootState } from "../store/store"
import { BooksInShelfType } from "../store/BooksInShelfReducere"

export const InfoBar = () => {
    const books = useSelector<RootState, BooksInShelfType[]>(state => state.booksInShelf)

    const percent = () => {
        
    }

    return (
        <div>
            InfoBar
        </div>
    )
}