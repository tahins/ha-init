import { h, app } from "hyperapp";
import Hello from "./src/components/Hello";

import './index.scss';

const init = {
    name: "World"
};

app({
    init,
    view: ({ name }) => (< Hello name={name} />),
    node: document.getElementById("app")
});