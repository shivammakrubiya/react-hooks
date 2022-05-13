import React from 'react'
import { AuthorContext, BookContext } from '../../App'
function ComponentF() {
    return (
        <div>
            <AuthorContext.Consumer>
                {
                    author => {
                        return (
                            <BookContext.Consumer>
                                {
                                    book => {
                                        return <div>Author Name - {author}, Book - {book}</div>
                                    }
                                }
                            </BookContext.Consumer>)
                    }
                }
            </AuthorContext.Consumer>

        </div>
    )
}

export default ComponentF