import {img_300, unavailable} from "../../Config/config";
import "./singlecontent.css";
import Badge from '@material-ui/core/Badge';

function Singlecontent(props){

    return(
        <div className="media">

            <Badge badgeContent={props.vote_average} color={"primary"}></Badge>

            <img className="poster" src={props.poster ? `${img_300}/${props.poster}` : unavailable} alt={props.title}/>
            <a href={`https://www.imdb.com/find?q=${props.title}&ref_=nv_sr_sm`} target="_blank" rel="noopener noreferrer" className="title"><b>{props.title}</b></a>
            <span className="subtitle">{
                props.media_type==="tv" ? "TV Series" : "Movie"}
                {props.date && <span className="subtitle">{props.date.slice(0, 4)}</span>}
            </span>

        </div>
    );
}

export default Singlecontent;