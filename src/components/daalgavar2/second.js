import React from "react";
import './container.css'
import './top.css'
import './bottom.css'
import './top-2.css'
import './top-3.css'
import './top-4.css'
import './top-5.css'
import Top1 from "./top1";
import Top3 from "./top-3_1";
import Bottombox from "./bottombox";
const Second = () => {
    return(
        <div className="container">
            <div className="top">
                <Top1/>
                <Top1/>
                <div className="top-2">

                </div>
                <div className="top-3">
                  <div className="top-4">
                    <Top3/>
                    <Top3/>
                  </div>
                    <div className="top-5">

                    </div>
                </div>
            </div>
            <div className="bottom">
                <Bottombox/>
                <Bottombox/>
                <Bottombox/>
                <Bottombox/>
                <Bottombox/>
            </div>
        </div>
    )
}
export default Second