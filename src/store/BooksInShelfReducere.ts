export type NotesType = {
    page: number,
    noteContent: string,
    emotion: 'good' | 'bad' | 'ok' | 'funny' | 'sad'
}

export type BooksInShelfType = {
    id: string;
    title: string;
    author: string[];
    finishedPages: number,
    totalPageCount: number,
    publisher: string
    description: string;
    thumbnail: string;
    inProgress: "inProgress" | "complete" | "left";
    notes: NotesType[];
}

const initialState: BooksInShelfType[] = [
  {
    id: '1',
    title: 'Book 1',
    author: ['Author 1'],
    finishedPages: 60,
    totalPageCount: 100,
    publisher: 'Publisher 1',
    description: 'Description 1',
    thumbnail: 'thumbnail1.jpg',
    inProgress: 'inProgress',
    notes: [
        {
            page: 10,
            noteContent: 'Good book!',
            emotion: 'good'
        },
        {
            page: 20,
            noteContent: 'Not bad.',
            emotion: 'ok'
        }
    ]
  },
  
  {
    id: '1',
    title: 'Book 1',
    author: ['Author 1'],
    finishedPages: 0,
    totalPageCount: 100,
    publisher: 'Publisher 1',
    description: 'Description 1',
    thumbnail: 'thumbnail1.jpg',
    inProgress: 'inProgress',
    notes: [
        {
            page: 10,
            noteContent: 'Good book!',
            emotion: 'good'
        },
        {
            page: 20,
            noteContent: 'Not bad.',
            emotion: 'ok'
        }
    ]
  },
  {
    id: '1',
    title: 'Book 1',
    author: ['Author 1'],
    finishedPages: 80,
    totalPageCount: 100,
    publisher: 'Publisher 1',
    description: 'Description 1',
    thumbnail: 'thumbnail1.jpg',
    inProgress: 'inProgress',
    notes: [
        {
            page: 10,
            noteContent: 'Good book!',
            emotion: 'good'
        },
        {
            page: 20,
            noteContent: 'Not bad.',
            emotion: 'ok'
        }
    ]
  },
]

export const BooksInShelfReducere = (state: BooksInShelfType[] = initialState, action: any) => {
    switch (action.type) {
        default:
            return state;
    }
}