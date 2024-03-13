import React from "react";
import { Link } from "react-router-dom";
import './MovieComponent.css'

function MadmaxComponent() {
    return (
        <div>
            <div>
                <div className="movie">
                    <img
                        className="image"
                        src="https://i.imgur.com/t1Qqt3Tl.jpg"
                        alt="BRIE LARSON ROOM"
                    />
                    <div className="information">
                        <h3>Room</h3>
                        <p>120 min 2015</p>
                        <p>
                            opens with the sound of breathing with the image of the wall scratching, the rays of sunlight peeking through the mouth of the tiny skylight on the ceiling and the woman's voice whispering, "Go back to sleep, baby." Such is the life of Joy "Ma" Newsome (Brie Larson) and her 5-year-old son Jack (Jacob Tremblay) in a room less than 10 square meters where she was kidnapped and raped by a grandfather named Nick (Sean Bridgers) for 7 years. Jack was the result of those rapes.
                        </p>
                        <Link to='/'>
                            <button type="submit" >PLAY MOVIE</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MadmaxComponent;