import React from 'react'

const CommentDetail = (props) => {


    return (
        <div>
            <p>{props.author}</p>
            <br/>
            <p>{props.comment}</p>
        </div>
    )

}

export default CommentDetail