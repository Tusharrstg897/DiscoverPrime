import {img_300, unavailable} from "../../Config/config";
import "./singlecontent.css";
import Badge from '@material-ui/core/Badge';

function Singlecontent(props){

    return(
        <div className="media">

            <Badge badgeContent={props.vote_average} color={"primary"}></Badge>

            <img className="poster" src={props.poster ? `${img_300}/${props.poster}` : unavailable} alt={props.title}/>
            <b className="title">{props.title}</b>
            <span className="subtitle">{
                props.media_type==="tv" ? "TV Series" : "Movie"}
                <span className="subtitle">{props.date.slice(0, 4)}</span>
            </span>

        </div>
    );
}

export default Singlecontent;