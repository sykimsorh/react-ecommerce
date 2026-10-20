import { useEffect, useState } from "react"
import Card from "../components/Card"
import axios from "axios"


function Home() {
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try{
        const res = await axios.get('https://fakestoreapi.com/products?limit=8')
        setData(res.data);
        console.log(res.data);
      } catch (error) {
        console.log('Error: ', error);
      }
    };
    fetchData();
  },[])

  return (
    <div className="font-jost">
      <div className="bg-[url('./c5b8c6c78bf8bf03eb19da0d4b8c0d1d.jpg')] bg-secondary bg-right  bg-no-repeat bg-cover lg:bg-contain flex items-center text-black h-screen px-4 lg:px-40">
        <div>
          <h2 className="text-xl font-bold">New Collection</h2>
          <h1 className="text-6xl lg:text-7xl font-bold mb-2">Luxury Without <br />Labels</h1>
          <p>Explore new-in product and best sellers</p>
          <button className="bg-primary text-white px-8 py-2 mt-4">View Collection</button>
        </div>
      </div>

      <div className="my-20 max-w-[90%] lg:max-w-5xl mx-auto">
        <h2 className="text-center text-3xl font-bold">Best Seller</h2>
        <p className="text-center">Explore our best seller produects</p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          
          {
            data.map(item => (
              <Card key={item.id} data={item}/>
            ))
          }

        </div>

        <div className="flex justify-center mt-8">
          <button className="bg-transparent px-8 py-2 border border-primary hover:bg-primary hover:text-white transition-all">Explore More</button>
        </div>
      </div>
    </div>
  )
}

export default Home
