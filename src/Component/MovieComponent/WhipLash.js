import React from "react";
import { Link } from "react-router-dom";
import './MovieComponent.css'
function WhipLaseComponent() {
    return (
        <div>
            <div>
                <div className="movie">
                    <img
                        className="image"
                        src="https://lh6.googleusercontent.com/proxy/PP1C8CAPx69xXZ6X7eLjiN8V7fJkA7aYl7_COA4CBfgNNxQp0FMp_STScAOcmTaHH81Bi2_i8jzKb2ZN16kOjXH3EiNiv-J5telzeaQBsGL525eXC-OasOIEOWdcMRKiIEypFA=w1200-h630-p-k-no-nu"
                        alt="BRIE LARSON ROOM"
                    />
                    <div className="information">
                        <h3>Room</h3>
                        <p>167 min 2015</p>
                        <p>
                            The film is about a man named Oh Gwang, a real estate broker who had an accident on a deserted mountain road and was saved by a family, but unexpectedly this family had been accidentally harmed by him in the past through transactions. real estate translation. Can Oh Gwang escape the forest or must he pay the price for what he did?
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

export default WhipLaseComponent;