import React from 'react'
import Leftsidebar from '../Leftsidebar/Leftsidebar'
import "./WHL.css"
import WHLvideolist from "./WHLvideolist"
import { useSelector,useDispatch } from 'react-redux'
import { clearhistory } from '../../action/history'
const WHL = ({page,videolist}) => {
    // console.log(videolist)
    const currentuser=useSelector(state => state.currentuserreducer);
    const dispatch=useDispatch()
    const handleclearhistory=()=>{
        if(currentuser){
            dispatch(clearhistory({
                userid:currentuser?.result._id
            }))
        }
    }
  return (
    <div className="container_Pages_App">
        <Leftsidebar/>
        <div className="container2_Pages_App">
            <p className="conatiner_whl">
                <div className="box_WHL leftside_whl">
                    <b>Your {page} Shown Here</b>
                    {
                        page === "History" &&
                        <div className="clear_History_btn" onClick={()=>handleclearhistory()}>Clear History</div>
                    }
                </div>
                <div className="rightSide_whl">
                    <h1>{page}</h1>
                    <div className="whl_list">
                        <WHLvideolist page={page} currentuser={currentuser.result._id} videolist={videolist}/>
                    </div>
                </div>
            </p>
        </div>
    </div>
  )
}

export default WHL