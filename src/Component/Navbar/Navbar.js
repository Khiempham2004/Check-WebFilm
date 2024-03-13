import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style.css'
import { Link } from 'react-router-dom';
const Navbar = () => {
    const movies = [
        {
            id: "1",
            title: "Room",
            image: "https://thanhnien.mediacdn.vn/Uploaded/minhnguyet/2016_02_03/room_VIJE.jpg?"

        },
        {
            id: "2",
            title: "WHISLAPE",
            image: "https://lh6.googleusercontent.com/proxy/PP1C8CAPx69xXZ6X7eLjiN8V7fJkA7aYl7_COA4CBfgNNxQp0FMp_STScAOcmTaHH81Bi2_i8jzKb2ZN16kOjXH3EiNiv-J5telzeaQBsGL525eXC-OasOIEOWdcMRKiIEypFA=w1200-h630-p-k-no-nu"
        },
        {
            id: "3",
            title: "MadMax",
            iamge: "https://lh6.googleusercontent.com/proxy/PP1C8CAPx69xXZ6X7eLjiN8V7fJkA7aYl7_COA4CBfgNNxQp0FMp_STScAOcmTaHH81Bi2_i8jzKb2ZN16kOjXH3EiNiv-J5telzeaQBsGL525eXC-OasOIEOWdcMRKiIEypFA=w1200-h630-p-k-no-nu"
        },
        {
            id: "4",
            title: "The REVENANT",
            image: "https://i.imgur.com/t1Qqt3Tl.jpg"
        }
    ]

    const [isMovie, setMovie] = useState([movies])
    const [searchMovie, setSearchMovie] = useState('')
    const [searchResult, setSearchResult] = useState([])

    // const handleChange = (event) => {
    //     setSearchMovie(event.target.value);
    //     const search = movies.filter(movie =>
    //         movie.toLowerCase().includes(event.target.value.toLowerCase())
    //     );
    //     setSearchResult(search);
    // };

    const navigate = useNavigate();

    return (
        <div className='body'>
            <div>
                <h1> Movie <b>UI</b></h1>
                <input type="submit" value='search'   />
                <i className='bx bx-search-alt-2 bx-ms'></i>
                <ul>
                    {
                        searchResult.map((movie) => (
                            <li key={movie.id}>
                                <img src={movie.image} alt={movie.title} />
                                {movie.title}
                            </li>
                        ))
                    }
                </ul>
            </div>
            <hr></hr>
            <p>Most Popular Movies</p>
            <div className='anhMovie'>
                <div className='imade'>
                    <Link to='/brie-larson'>
                        <img
                            className="room"
                            src="https://thanhnien.mediacdn.vn/Uploaded/minhnguyet/2016_02_03/room_VIJE.jpg?"
                            alt="BRIE LARSON ROOM"
                        />
                    </Link>
                    <h3>ROOM</h3>
                    <h3> 117 min 2015</h3>
                </div>
                <div>
                    <Link to='/WHISLAPE'>
                        <img
                            className='room'
                            src='https://lh6.googleusercontent.com/proxy/PP1C8CAPx69xXZ6X7eLjiN8V7fJkA7aYl7_COA4CBfgNNxQp0FMp_STScAOcmTaHH81Bi2_i8jzKb2ZN16kOjXH3EiNiv-J5telzeaQBsGL525eXC-OasOIEOWdcMRKiIEypFA=w1200-h630-p-k-no-nu'
                            alt='WhisLash'
                        />
                    </Link>
                    <h3>Whispash</h3>
                    <h3> 167 min 2015</h3>
                </div>
                <div>
                    <Link to='/MadMax'>
                        <img
                            className='room'
                            src='https://i.imgur.com/t1Qqt3Tl.jpg'
                            alt='conduongtuthan'
                        />
                    </Link>
                    <h3>Mad Max</h3>
                    <h3> 117 min 2015</h3>
                </div>
                <div>
                    <Link to='/The REVENANT'>
                        <img
                            className='room'
                            src='https://upload.wikimedia.org/wikipedia/en/b/b6/The_Revenant_2015_film_poster.jpg'
                            alt='The ReVentANT'
                        />
                    </Link>
                    <h3>The Revenent</h3>
                    <h3> 117 min 2015</h3>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
