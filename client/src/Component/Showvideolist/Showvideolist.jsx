import React from 'react'
import Showvideo from "../Showvideo/Showvideo"
import vid from "../Video/vid.mp4"
import { useSelector } from 'react-redux'
const Showvideolist = ({videoid}) => {
  const vids=useSelector(state=>state.videoreducer)
    // const vids=[
    //     {
    //       _id:1,
    //       video_src:vid,
    //       chanel:"wvjwenfj3njfwef",
    //       title:"video 1",
    //       uploader:"abc",
    //       description:"description of video 1"
    //     },
    //     {
    //       _id:1,
    //       video_src:vid,
    //       chanel:"wvjwenfj3njfwef",
    //       title:"video 1",
    //       uploader:"abc",
    //       description:"description of video 1"
    //     },
    //     {
    //       _id:2,
    //       video_src:vid,
    //       chanel:"wvjwenfj3njfwef",
    //       title:"video 2",
    //       uploader:"abc",
    //       description:"description of video 2"
    //     },
    //     {
    //       _id:3,
    //       video_src:vid,
    //       chanel:"wvjwenfj3njfwef",
    //       title:"video 3",
    //       uploader:"abc",
    //       description:"description of video 3"
    //     },
    //     {
    //       _id:4,
    //       video_src:vid,
    //       chanel:"wvjwenfj3njfwef",
    //       title:"video 4",
    //       uploader:"abc",
    //       description:"description of video 4"
    //     },
    //   ]
      console.log(videoid)
  return (
    <div className="Container_ShowVideoGrid">
        {
            vids?.data.filter(q=>q._id===videoid).map(vi=>{
                return(
                    <div className="video_box_app" key={vi._id}>
                        <Showvideo vid={vi}/>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Showvideolist