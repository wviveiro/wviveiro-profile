import React, {useEffect, useCallback, useRef} from 'react';
import './profile.scss';
import date from '../date';
import createState from 'react-hook-setstate';


const getDiff = (dteDiff) => {
    const dt = date();
    return dt.diff(dteDiff);  
}

const dtWeb = '2008-08-19';
const dtAnalyst = '2011-03-21';

const DateShow = React.forwardRef((props, ref) => {
    const {diff} = props;

    return (
        <span ref={ref} className="date-show">
            &nbsp;{diff.years} years and 
                    &nbsp;{diff.months} months
        </span>
    );
});

const FullDate = React.forwardRef((props, ref) => {
    const {diff} = props;

    return (
        <div ref={ref} className="full-date">
            {diff.years} years, {diff.months} months, {diff.days} days, {diff.hours} hours, {diff.minutes} minutes, {diff.seconds} seconds
        </div>
    );
});



const Profile = (props) => {
    const [webDiff, setWebDiff] = createState(getDiff(dtWeb));
    const [analystDiff, setAnalystDate] = createState(getDiff(dtAnalyst));
    const wb = useRef();
    const ab = useRef();
    const wf = useRef();
    const af = useRef();

    const loader = useCallback(() => {
        setTimeout(() => {
            setWebDiff(getDiff(dtWeb));
            setAnalystDate(getDiff(dtAnalyst));
            loader();
        }, 1000);
    }, [setWebDiff, setAnalystDate]);

    
    useEffect(() => {
        loader();
        
        const _hover = (type) => {
            return () => {
                if (type === 'web') wf.current.classList.add('active');
                if (type === 'analysis') af.current.classList.add('active');
            }
        }

        const _unhover = (type) => {
            return () => {
                if (type === 'web') wf.current.classList.remove('active');
                if (type === 'analysis') af.current.classList.remove('active');
            }
        }

        wb.current.removeEventListener('mouseover', _hover('web'));
        wb.current.addEventListener('mouseover', _hover('web'));
        ab.current.removeEventListener('mouseover', _hover('analysis'));
        ab.current.addEventListener('mouseover', _hover('analysis'));

        wb.current.removeEventListener('mouseleave', _unhover('web'));
        wb.current.addEventListener('mouseleave', _unhover('web'));
        ab.current.removeEventListener('mouseleave', _unhover('analysis'));
        ab.current.addEventListener('mouseleave', _unhover('analysis'));
        

    }, [loader]);
    
    

    return (
        <div className="my-profile">
            <div className="inner-content">
                <div className="my-picture" />
                <div className="content">
                    <h1>Wellington Viveiro</h1>
                    <p>
                        Wellington Viveiro is an Analyst Programmer living in Sydney, NSW, Australia. He has worked with web development for <DateShow ref={wb} diff={webDiff} /> and with system analysis for <DateShow ref={ab} diff={analystDiff} />.
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
                    <FullDate ref={wf} diff={webDiff} />
                    <FullDate ref={af} diff={analystDiff} />
                </div>
            </div>
        </div>
    );
}

export default Profile;