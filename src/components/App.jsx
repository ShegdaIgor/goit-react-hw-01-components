import css from 'components/App.module.css';
import { Profile } from './Profile/Profile.jsx';
import user from '../user.json';
export const App = () => {
  return (
    <div className={css.cardApp}>
      <Profile
        key={user.username}
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
    </div>
  );
};
