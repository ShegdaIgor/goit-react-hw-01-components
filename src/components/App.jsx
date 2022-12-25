import css from 'components/App.module.css';

import { Profile } from './Profile/Profile.jsx';
import { Statistics } from './Statistics/Statistics';
import { FriendsList } from './FriendsList/FriendsList.jsx';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

import user from './info/user.json';
import data from '../components/info/data.json';
import friends from '../components/info/friends.json';
import transactions from '../components/info/transactions.json';

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
      {/* <Statistics stats={data} /> */}
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
