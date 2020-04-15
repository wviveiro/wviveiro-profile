import React from 'react';
import { ProfileContainer } from './style';
import DateDiff from 'components/date-diff';

const Profile = () => {
    return (
        <ProfileContainer>
            <div>
                <img src="/assets/images/me.jpg" alt="Wellington Viveiro" className="img-profile" />
                <h1>Wellington Viveiro</h1>
                <p>
                    Wellington Viveiro is an Analyst Programmer living in Sydney, NSW, Australia. He has worked with web development for <strong><DateDiff date={`2008-08-19`} /></strong> and with system analysis for <strong><DateDiff date={`2011-03-21`} /></strong>.
                    &nbsp;Currently working at <a href="https://asmex.io">Asmex</a> and developing some useful components with Node js and React.
                </p>
                <div className="links">
                    <a href="https://twitter.com/wellviveiro" alt="Twitter Wellington Viveiro">
                        <i className="fab fa-twitter" />
                    </a>
                    <a href="https://github.com/wviveiro" alt="Github Wellington Viveiro">
                        <i className="fab fa-github" />
                    </a>
                    <a href="https://www.linkedin.com/in/wviveiro/" alt="Linkedin Wellington Viveiro">
                        <i className="fab fa-linkedin" />
                    </a>
                </div>
            </div>
        </ProfileContainer>
    );
};

export default Profile;