import React from "react";
import SortBy from "./SortBy";

function HogList({ hogs, selectHog, setSort }) {
    const list = hogs.map((hog) => {
        let greased;
        if (hog.greased){
            greased = "Greased"
        } else {
            greased = "Not Greased"
        }
        if (hog.selected === false) {
            return (
                <div key={hog.name} className={"ui card eight wide column"} style={{'marginTop': 14}} onClick={(e) => {selectHog(hog)}}>
                    <div className={"image"}>
                        <img src={hog.image} alt={""}/>
                    </div>
                    <div className={"content"}>
                        <p className={"header"}>{hog.name}</p>
                    </div>
                </div>
            )
        } else {
            return (
                <div key={hog.name} className={"ui card eight wide colume"} style={{'marginTop': 14, width: 480.5}}>
                    <div className={"content"}>
                        <div>
                            <p className={"header"}>{hog.name}</p>
                        </div>
                        <div>Specialty: {hog.specialty}</div>
                        <div>Weight: {hog.weight}</div>
                        <div>{greased}</div>
                        <div>Highest Medal Achieved: {hog["highest medal achieved"]}</div>
                    </div>
                </div>
            )
        }
    })
    const array = [...list]
    return (
        <div>
            <SortBy setSort={setSort}/>
            <div className="ui grid container">
                {array}
            </div>
        </div>
    )
}

export default HogList;