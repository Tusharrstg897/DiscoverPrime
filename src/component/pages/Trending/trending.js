import axios from "axios";
import {useEffect, useState} from "react";
import Singlecontent from "../../Singlecontent/singlecontent";
import "./trending.css";
import CustomPagination from "../../CustomPage/Custompage";

const Trending = () => {

    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);

    const fetchtrending = async() => {
        const {data} = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`);
        setContent(data.results);
    };

    useEffect(()=>{
        fetchtrending();
        // eslint-disable-next-line
    }, [page]);

    return (
        <div>
        <span className="pagetitle">Trending</span>

        <div className="trending">
            {
                content && content.map((c) => (
                    <Singlecontent 
                        key={c.id}
                        id={c.id}
                        poster={c.poster_path}
                        title={c.title || c.name}
                        date={c.first_air_date || c.release_date}
                        media_type={c.media_type}
                        vote_average={c.vote_average}
                    />
                ))
            }
        </div>

            <CustomPagination setPage={setPage} numOfPages="10"/>
        </div>
    );
};

export default Trending;