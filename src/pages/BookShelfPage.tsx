import { useSelector } from "react-redux"
import './PageStyles.css'
import { RootState } from "../store/store"
import { BooksInShelfType } from "../store/BooksInShelfReducere"
import { BookShelfCard } from "../components/BookshelfCard"

export const BookShelfPage = () => {
    const books = useSelector<RootState, BooksInShelfType[]>(state => state.booksInShelf)


    return (
        <>
            <h1>МОИ КНИГИ</h1>
            <div className="BookShelfContainer">
                <div className='BookShelfWrapper'>
                    {books.map((book => <BookShelfCard book={book}/>))}
                </div>
            </div>
        </>
    )
}