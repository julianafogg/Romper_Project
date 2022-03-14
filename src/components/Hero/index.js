import React from 'react';
import LockUp from "../LockUp";
import ThreeUp from "../ThreeUp";
import TwoUp from '../TwoUp';
import FourUp from '../FourUp';

import "./hero.scss"

const Hero = ({ data }) => {
 
  return (
    <div className="hero">
        <h1>{data.title}</h1>
        <LockUp lockUp={data.lockUp} list={data.list} /> {/* <right-list} />*/}
        <ThreeUp items={data.treeUp} />  {/* 3 photos />*/}
        <TwoUp items={data.twoUp} />  {/* 2 photos />*/}
        <FourUp items={data.fourUp} />  {/* 4 photos />*/}
      </div>
  );
};

export default Hero;