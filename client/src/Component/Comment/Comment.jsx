import React, { useState } from 'react'
import "./Comment.css"
import Displaycommment from './Displaycommment'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { postcomment } from '../../action/comment'
const Comment = ({ videoid }) => {
    const dispatch = useDispatch()
    const [commenttext, setcommentext] = useState("")
    const currentuser = useSelector(state => state.currentuserreducer);
    const commentlist = useSelector(state => state.commentreducer)
    console.log(commentlist)
    // const commentlist=[{
    //     _id:1,
    //     commentbody:"hello",
    //     usercommented:"Abc"
    // },
    // {
    //     _id:2,
    //     commentbody:"hello2",
    //     usercommented:"Abc2"
    // }];
    const handleonsubmit = (e) => {
        e.preventDefault();
        if (currentuser) {
            if (!commenttext) {
                alert("please type your comment!!")
            }
            else {
                dispatch(postcomment({
                    videoid: videoid,
                    userid: currentuser?.result._id,
                    commentbody: commenttext,
                    usercommented: currentuser.result.name
                }))
                setcommentext("")
            }
        } else {
            alert("Please login to comment")
        }
    }


    return (
        <>
            <form className='comments_sub_form_comments' onSubmit={handleonsubmit}>
                <input type="text" onChange={(e) => setcommentext(e.target.value)} placeholder='add comment...' value={commenttext} className='comment_ibox' />
                <input type="submit" value="add" className='comment_add_btn_comments' />
            </form>
            <div className="display_comment_container">
                {commentlist?.data.filter((q) => videoid === q?.videoid)
                    .reverse()
                    .map((m) => {

                        return (<Displaycommment cid={m._id} userid={m.userid} commentbody={m.commentbody} commenton={m.commenton} usercommented={m.usercommented} />)
                    })}
            </div>
        </>
    )
}

export default Comment