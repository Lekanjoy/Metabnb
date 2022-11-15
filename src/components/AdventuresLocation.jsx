import React from 'react'
import stars from '../assets/Adventures assets/stars.svg'

const AdventuresLocation = ({img, name, distance, price, availability}) => {
  return (
    <div className=" flex flex-col rounded-[15px] border border-[#D7D7D7] p-4 md:w-[292px] md:h-[372px]">
      <img className='mb-4 md:max-w-[260px] md:h-[265px]' src={img} alt="adventure image" />
      <div className="flex gap-x-[9px] justify-between text-xs text-[#434343]">
        <div className="flex flex-col gap-y-[10px]">
          <p>{name}</p>
          <p>{distance}</p>
          <img src={stars} alt="" />
        </div>
        <div className="flex flex-col gap-y-[10px]">
          <p className="font-bold">{price}</p>
          <p>{availability}</p>
        </div>
      </div>
    </div>
  );
}

export default AdventuresLocation