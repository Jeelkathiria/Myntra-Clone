import React from "react";
import HomeItem from "../components/HomeItem";
import { useSelector } from "react-redux";


const Home = () => {
  const item = useSelector(store => store.items)
  console.log(item)

  return (
    <>
      <main>
        <div className="items-container">
          <HomeItem item={item[0]} />
        </div>
      </main>
    </>
  );
};                      

export default Home;
