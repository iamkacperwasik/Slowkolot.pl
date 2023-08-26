import {DislikeButton} from 'components/Dislike/DislikeButton';
import {LikeButton} from 'components/Like/LikeButton';
import {LikeCounter} from 'components/Like/LikeCounter';

export const Feedback = () => {
  return (
    <section className='flex gap-4 items-center mb-4 text-xl'>
      <div className='flex items-center gap-2'>
        <LikeButton />
        <LikeCounter />
      </div>

      <DislikeButton />
    </section>
  );
};
