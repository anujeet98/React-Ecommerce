


const MovieItem = (props) => {
    return (
        <li>
            <h2>{props.data.title}</h2>
            <h3>{props.data.releaseDate}</h3>
            <p>{props.data.openingText}</p>
        </li>
    )
}

export default MovieItem;