import React from 'react';
import BallCanvas from "../threejs/Ball"
import { technologies } from '../data/data';
import Wrapper from './wrapper';


const Tech = () => {
  return (
    <Wrapper>
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
    </Wrapper>
  )
}

export default Tech