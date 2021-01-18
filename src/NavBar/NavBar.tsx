import { execPath } from 'process';
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';
import { resourceLimits } from 'worker_threads';

type NavProps = {
    navType: string
}

/*
    TODO:

    Add component views to route objects below.

    main property replaces feed view on home 

    e.g. clicking notifications replaces feed and shows list of notification cards. 
        (likes, follows, rt's etc)

    Dispatch route to store. Read route in Feed component and render accordingly
**/

const routes: Array<object> = [
    {
        path: "/",
        exact: true,
        main: () => <h2>Home</h2>
    },
    {
        path: "/explore",
        main: () => <h2>Bubblegum</h2>
    },
    {
        path: "/notifications",
        main: () => <h2>Shoelaces</h2>
    },
    {
        path: "/messages",
        main: () => <h2>Bubblegum</h2>
    },
    {
        path: "/bookmarks",
        main: () => <h2>Shoelaces</h2>
    },
    {
        path: "/lists",
        main: () => <h2>Bubblegum</h2>
    },
    {
        path: "/profile",
        main: () => <h2>Shoelaces</h2>
    },
    {
        path: "/more",
        main: () => <h2>Bubblegum</h2>
    },
];
const leftNav = <ul className="navbar__list">
    <Router>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/explore">Explore</Link></li>
        <li><Link to="/notifications">Notifications</Link></li>
        <li><Link to="/message">Message</Link></li>
        <li><Link to="/bookmarks">Bookmarks</Link></li>
        <li><Link to="/lists">Lists</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/more">More</Link></li>
        <Switch>
            {routes.map((route: any, index: number) => (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact} />
            ))}

        </Switch>
    </Router>
    <button>Tweet</button>
</ul>

const rightNav = <aside className="navbar__content">

    <ul>
        <header>What's happening</header>
        <li>Trending story</li>
        <li>Trending story</li>
        <li>Trending story</li>
        <li>Trending story</li>
        <li>Trending story</li>
        <button>Show more</button>
    </ul>
    <ul>
        <header>Who to follow</header>
        <li>Account 1 <button>Follow</button></li>
        <li>Account 2 <button>Follow</button></li>
        <li>Account 3<button>Follow</button> </li>
        <button>Show more</button>
    </ul>
</aside>

const NavBar = ({ navType }: NavProps) => navType === 'routes' ? leftNav : rightNav

export default NavBar;