import React from "react";
import { Link } from "react-router-dom";
import './MovieComponent.css'
import { useNavigate } from "react-router-dom";
function MovieComponent() {
    return (
        <div>
            <div className="movie">
                <div>
                    <img
                        className="image"
                        src="https://thanhnien.mediacdn.vn/Uploaded/minhnguyet/2016_02_03/room_VIJE.jpg?"
                        alt="BRIE LARSON ROOM"
                    />
                </div>
                <div className="information">
                    <h3>Room</h3>
                    <p>117 min 2015</p>
                    <p>
                        The room opens with the sound of breathing with the image of the wall scratching, the rays of sunlight peeking through the mouth of the tiny skylight on the ceiling and the woman's voice whispering, "Go back to sleep, baby." Such is the life of Joy "Ma" Newsome (Brie Larson) and her 5-year-old son Jack (Jacob Tremblay) in a room less than 10 square meters where she was kidnapped and raped by a grandfather named Nick (Sean Bridgers) for 7 years. Jack was the result of those rapes.
                    </p>
                    <Link to='/'>
                        <button type="submit" >PLAY MOVIE</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default MovieComponent;