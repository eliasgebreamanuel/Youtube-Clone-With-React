import React from 'react'
import "./SearchPage.css";
import TuneIcon from '@mui/icons-material/Tune';
import ChannelPage from './ChannelPage';
import VideoRow from './VideoRow';
function SearchPage() {
  return (
    <div className = "searchPage">
        <div className="searchPage__filter">
            <TuneIcon />
            <h2>Filter</h2>
        </div>
        <hr />
        <ChannelPage 
            image = "https://images.unsplash.com/photo-1682238028915-d95a4263e01c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60"
            channel = "Clever Programmer"
            verified
            subs  ="893K"
            noOfVideos = {345}
            description = "One of the best programming language channels"
        />
        <hr />
        <VideoRow
            views = "1.4M"
            subs = "659K"
            descriptio = "Do u want a free onw hour training"
            timestamp = "59 seconds a go"
            channel  ="Clever Programmer"
            title = "Let's Buld a YouTube Clone with React Js"
            image = "https://plus.unsplash.com/premium_photo-1673264931454-307101fb2c31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60"
        />
    </div>
  )
}

export default SearchPage