import { BooksInShelfType } from '../store/BooksInShelfReducere'
import './ComponentsStyles.css'

type BookShelfCardType = {
    book: BooksInShelfType
}

export const BookShelfCard = (props: BookShelfCardType) => {

    const percent = props.book.finishedPages / props.book.totalPageCount * 100
    return (
        <div>
            <div className={`BookShelfCardWrapper ${props.book.inProgress}`}>
                <div className='BookShelfCardContent'>
                </div>
            </div>
            <div>
                <div className='ProgressBar'>
                    <div className={'ProgressBarInner'} style={{ width: `${percent}%` }}></div>
                </div>
            </div>
        </div>
    )
}