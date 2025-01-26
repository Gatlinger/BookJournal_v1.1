import { BookshelfCard } from "../components/BookshelfCard"
import './PageStyles.css'

export const BookShelfPage = () => {
    return (
        <>
            <h1>My BookShelf</h1>
            <div className="BookShelfContainer">
                <div className='BookShelfWrapper'>
                    <BookshelfCard />
                    <BookshelfCard />
                    <BookshelfCard />
                    <BookshelfCard />
                </div>
            </div>
        </>
    )
}