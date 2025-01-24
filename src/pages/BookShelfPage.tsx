import { BookshelfCard } from "../components/BookshelfCard"
import './PageStyles.css'

export const BookshelfPage = () => {
    return (
        <div className='BookshelfWrapper'>
            <h1>My Bookshelf</h1>
            <BookshelfCard />
            <BookshelfCard />
            <BookshelfCard />
            <BookshelfCard />
        </div>
    )
}