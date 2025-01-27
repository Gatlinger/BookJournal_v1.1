import { BooksInShelfType } from '../store/BooksInShelfReducere'
import './ComponentsStyles.css'

type BookShelfCardType = {
    book: BooksInShelfType
}

export const BookShelfCard = (props: BookShelfCardType) => {
    return (
        <div className={`BookShelfCardWrapper ${props.book.inProgress}`}>
            <div className='BookShelfCardContent'>
            </div>
        </div>
    )
}