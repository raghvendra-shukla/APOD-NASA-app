import React, { useEffect,useState } from 'react'
import Card from './Card'

function Home() {
  let date1=new Date();
  let Today=`${date1.getFullYear()}-${date1.getMonth()+1}-${date1.getDate()}`;
  const [data, setData] = useState("Nothing to Show");
  const [date, setDate] = useState(Today);
  const Handleonchange=(e)=>{
    localStorage.setItem("date",e.target.value);
  }
  const Handleonclick=(e)=>{
    e.preventDefault();
    // console.log("clicked");
    let oldDate=localStorage.getItem("date");
    console.log(oldDate);
    setDate(oldDate);
    // console.log(date);
  }
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("title");
  const update=async()=>{
    let url=`https://api.nasa.gov/planetary/apod?api_key=6TIFNq2h5L0g2qNUFbodVKh2FKjkKzroPf2H2UJA&date=${date}`;
    let data= await fetch(url);
    let parseddata=await data.json();
    setData(parseddata.explanation);
    setImage(parseddata.hdurl);
    setTitle(parseddata.title);
  }
  useEffect(()=>{
    update();
  })
  return (
    <>
    <div className="container">
      <div className="container m-2">
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="date" placeholder="date" onChange={Handleonchange} aria-label="Search"/>
          <button className="btn btn-primary" type="submit" onClick={Handleonclick}>Show Pictures</button>
        </form>
      </div>
      <Card image={image} data={data} title={title} date={date}/>
    </div>
    </>
  )
}

export default Home