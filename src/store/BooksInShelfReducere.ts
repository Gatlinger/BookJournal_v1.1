export type BooksInShelfType = {
    id: string;
    title: string;
    author: string;
    inProgress: "inProgress" | "complete" | "left";
}

const initialState: BooksInShelfType[] = [
    {
        id: "1",
        title: "Book 1",
        author: "Author 1",
        inProgress: "inProgress"
    },
    {
        id: "2",
        title: "Book 2",
        author: "Author 2",
        inProgress: "complete"
    },
    {
        id: "3",
        title: "Book 3",
        author: "Author 3",
        inProgress: "left"
    },
]

export const BooksInShelfReducere = (state: BooksInShelfType[] = initialState, action: any) => {
    switch (action.type) {
        default:
            return state;
    }
}