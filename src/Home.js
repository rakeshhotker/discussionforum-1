import React from "react";
import "./Home.css";
import {Button} from '@mui/material'
function Home() {
  return (
    <div>
      <div id="title_bar">
        <div id="title_logo">
          <img src="" alt='college logo'/>
        </div>
        <div>
          <h2 id="title_text">VASAVI CONNECT</h2>
        </div>
        <div>
          <div id="notifications"></div>
          <div id="profile_settings"></div>
        </div>
      </div>
      <div id="question_box">
        <form>
          <div className="question_box_input">
            <textarea
              
              placeholder="ASK YOUR QUESTION!"
            />
          </div>
          <Button className="question_box_questionButton">
            POST
          </Button>
        </form>
      </div>
      <div>
        {/*
                This will be the users feed.
                */}
      </div>
    </div>
  );
}

export default Home;
