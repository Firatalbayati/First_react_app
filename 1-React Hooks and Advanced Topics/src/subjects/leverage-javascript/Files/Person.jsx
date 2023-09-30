import React from 'react';
import avatar from '../../../assets/default-avatar.svg';

export function Person({ name, nickName = 'shakeAndBake', images }) {

  const img = images?.[0]?.small?.url || avatar;
  //const img =(images && images[0] && images[0].small && images[0].small.url) || avatar;
  // Combining with the nullish coalescing operator ??
  // const img = images?.[0]?.small?.url ?? avatar; ?? vs || - please utilize the search engine

  return (

    <div>
      <img src={img} alt={name} style={{ width: '50px' }} />
      <h4>{name} </h4>
      <p>Nickname : {nickName}</p>
    </div>
  );

}

export default Person;