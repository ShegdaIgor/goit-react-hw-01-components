import css from 'components/App.module.css';
import { Profile } from './Profile/Profile.jsx';
import user from './info/user.json';
import { Statistics } from './Statistics/Statistics';
import data from '../components/info/data.json';
import { FriendsList } from './FriendsList/FriendsList.jsx';
import friends from '../components/info/friends.json';

export const App = () => {
  return (
    <div className={css.cardApp}>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />

      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friends} />
    </div>
  );
};
