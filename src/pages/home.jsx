import React from "react";
import Slider from "../components/Slider";
import PopularGames from "../components/PopularGames";

const Home = () => {
    return(
        <div>
            <title>GameHub-A9 / Home</title>
            <Slider></Slider>
            <PopularGames></PopularGames>
        </div>
    );
};

export default Home;