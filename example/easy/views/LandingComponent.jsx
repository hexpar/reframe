const React = require('react');
const el = React.createElement;

const LandingComponent = () => (
    <div>
        Hey there,
        <div>
            <a href='/about'>About Page</a>
        </div>
        <div>
            <a href='/counter'>Counter</a>
        </div>
        <div>
            <a href='/game-of-thrones'>Game of Thrones</a>
        </div>
    </div>
);

module.exports = {LandingComponent};
