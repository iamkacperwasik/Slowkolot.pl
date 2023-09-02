'use client';

import {IpPostResponse} from 'ip/route';
import {AiOutlineLike as LikeIcon} from 'react-icons/ai';

export const LikeButton = () => {
  const updateLikes = async () => {
    const response = await fetch('/ip', {
      method: 'POST',
    });

    const {ip}: IpPostResponse = await response.json();

    console.log(ip);
  };

  return (
    <button className='cursor-pointer' onClick={updateLikes}>
      <LikeIcon />
    </button>
  );
};
