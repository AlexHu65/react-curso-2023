export const Card = ({id, title, url}) => {
    return(
        <div key={id} className="card">
            <p>{title}</p>
            <img src={url} alt="" />
        </div>
    );
}