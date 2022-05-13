import React, { useContext } from 'react'
import ComponentF from './ComponentF'
import { AuthorContext, BookContext } from '../../App'


function ComponentE() {
    const author = useContext(AuthorContext);
    const book = useContext(BookContext)
    return (
        <div>
            {/* <ComponentF /> */}
            <div>Author - {author}, Book - {book}</div>

        </div>
    )
}

export default ComponentE