import { h } from 'hyperapp';
import avatarUrl from "url:../assets/images/user-avatar.png";

const Hello = ({ name }) => (
    <div>
        <img src={avatarUrl} />
        <h1>Hello {name}!</h1>
    </div>
);

export default Hello;