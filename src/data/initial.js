//this gets imported on the index.js page

import { Map, List } from "immutable"; //Importing Map and List from the Library Immutable. Map is object, List is array.

const initial = Map({ //set up an initial state variable of a Map(Object) with key value pairs, the titles made up of an empty immutable List (array) and articles made up of a imm. Map(object).

    titles: List([]),
    articles: Map(),

});

export default initial;

//so this needs to be wrapped in a immutable Map so that it can be 