import {DownVoteButton} from '../DownVote/DownVoteButton';
import {UpVoteButton} from '../UpVote/UpVoteButton';
import {UpVotesCounter} from '../UpVote/UpVoteCounter';

export const Feedback = () => {
  return (
    <section className='flex gap-4 items-center text-[20px]'>
      <div className='flex items-center gap-2'>
        <UpVoteButton />
        <UpVotesCounter />
      </div>

      <DownVoteButton />
    </section>
  );
};
