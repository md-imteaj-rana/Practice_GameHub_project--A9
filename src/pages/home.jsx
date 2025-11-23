import React from "react";
import Slider from "../components/Slider";
import PopularGames from "../components/PopularGames";
import Newsletter from "../components/Newsletter";

const Home = () => {
    return(
        <div>
            <title>GameHub-A9 / Home</title>
            <Slider></Slider>
            <PopularGames></PopularGames>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;