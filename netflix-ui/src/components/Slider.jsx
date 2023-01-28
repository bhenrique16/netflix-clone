import React from 'react';
import CardSlider from "./CardSlider";

export default React.memo ( function Slider({movies}) {

        const getMoviesFromRange=(from,to)=>{
            return movies.slice(from,to)
        }
  return (
    <div>
      <CardSlider title="Em alta" data={getMoviesFromRange(0,10)}/>
      <CardSlider title="Lançamentos" data={getMoviesFromRange(10,20)}/>
      <CardSlider
       title="Grandes Sucessos"
       data={getMoviesFromRange(20,30)}/>
      <CardSlider title="Populares na Netflix" data={getMoviesFromRange(30,40)}/>
      <CardSlider title="Filmes de ação" data={getMoviesFromRange(40,50)}/>
      <CardSlider title="Épicos" data={getMoviesFromRange(50,60)}/>
    </div>
  )
}
)
