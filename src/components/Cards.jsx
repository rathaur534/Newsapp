import { useContext, useEffect, useState } from 'react';
import Card from './Card';
import Spinner from './Spinner'
import MyContext from '../context/MyContext';

function Cards()
{  
  const {data}=useContext(MyContext);
     return (
        <main>
        <div className="cards-container container flex">
          {
              data.map((card,index)=>{
                if(card.urlToImage)
                {
                return <Card key={index} card={card}/>
                }
              })
          }
      </div>
            </main>
     );
}
export default Cards;