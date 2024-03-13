import React from "react";
import { Link } from "react-router-dom";
import './MovieComponent.css'

function ReventComponent() {
    return (
        <div>
            <div>
                <div className="movie">
                    <img
                        className="image"
                        src="https://upload.wikimedia.org/wikipedia/en/b/b6/The_Revenant_2015_film_poster.jpg"
                        alt="BRIE LARSON ROOM"
                    />
                    <div className="information">
                        <h3>Room</h3>
                        <p>156 min 2015</p>
                        <p>
                            The Revenant is a 2015 American Western action drama film[5] directed by Alejandro G. Iñárritu. The screenplay by Mark L. Smith and Iñárritu is based in part on Michael Punke's 2002 novel The Revenant, which describes frontiersman Hugh Glass's experiences in 1823, and which is based on the 1915 poem The Song of Hugh Glass. The film stars Leonardo DiCaprio and Tom Hardy.
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

export default ReventComponent;