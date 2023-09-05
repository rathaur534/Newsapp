import react from "react";

function Card(card)
{
     const time=card.card.publishedAt;
    const dateTime = new Date(time). toLocaleString("en-US", {timeZone: 'Asia/Kolkata'});
   function clickHandler()
   {
       window.open(card.card.url,"_blank");
   }
    return (
        <div className="card" onClick={clickHandler}>
        <div className="card-header">
          <img  src={card.card.urlToImage
} alt="news-image" id="news-img"/>
        </div>

        <div className="card-content">
            <h3 className="news-title">{card.card.title.split(" ").slice(0, 10).join(" ") + "..."}</h3>
            <h6 className="news-source">{card.card.source.name} {dateTime}</h6>
            <p className="news-desc">{card.card.description.split(" ").slice(0, 20).join(" ") + "..."} 
              <span className="read-more">Read More</span>
            </p>
        </div>

       </div>
    );
}
export default Card;