# IndieNexus Client
_A hub for independent music artists to showcase themselves, gain exposure, and connect with fans._

Live app: https://indienexus-client.vercel.app/

## Summary
View all artists (without having to log in), register an account, log in as your user, and create an artist profile.

Artist profiles currently allow you to have an artist name, bio (description), and ability to embed a soundcloud track or playlist. (Instructions on page for how to get the embed code.) Once the profile is created, it can be viewed in the list of artists.

## Technologies Used
This projects uses React, Node, Express, knexJS, PostgreSQL, and JWT for user authentication.

## Screenshots
<div class='row'>
    <span class='full-width'>
    <p>hompage (desktop)</p>
    <img src='https://github.com/jessegilbride/indienexus-client/blob/master/screenshots/IndieNexus-homepage-desktop.jpeg?raw=true' class='' />
</span>
</div>

<div class='row'>
    <   '>
    <p>homepage (mobile)</p>
    <img src='https://github.com/jessegilbride/indienexus-client/blob/master/screenshots/IndieNexus-homepage-mobile.jpeg?raw=true' class='' />
    </span>
    <span class='half-width right'>
    <p>artist list (mobile)</p>
    <img src='https://github.com/jessegilbride/indienexus-client/blob/master/screenshots/IndieNexus-artist-list-mobile.jpeg?raw=true' class='' />
    </span>
</div>

<div class='row'>
    <span class='half-width left'>
    <p>login (mobile)</p>
    <img src='https://github.com/jessegilbride/indienexus-client/blob/master/screenshots/IndieNexus-login-mobile.jpeg?raw=true' class='' />
    </span>
    <span class='half-width right'>
    <p>create profile (mobile)</p>
    <img src='https://github.com/jessegilbride/indienexus-client/blob/master/screenshots/IndieNexus-create-profile-mobile.jpeg?raw=true' class='' />
    </span>
</div>

<style>
.row {
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;
}
.row p {
    margin-block-end: 0;
    padding-bottom: 0.5rem;
    font-size: larger;
    text-align: center;
    border-bottom: 1px solid lightgrey;
}
.full-width {
    width: auto;
    margin: 0 auto;
}
.full-width img {
    display: block;
    max-width: 100%;
    margin: 0 auto;
}
.half-width {
    max-width: 375px;
    margin: 20px auto 0;
}
.half-width img {
    width: 100%;
}
@media screen and (min-width: 768px) {
    .row {
        flex-direction: row;
    }
    .half-width {
        max-width: unset;
        width: 46%;
        margin: 40px 2% 0;
    }
}
</style>