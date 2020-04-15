import { useDateDiffState } from './component';

const DateDiff = (props) => {
    const {
        diff
    } = useDateDiffState(props);

    if (!diff) return null;

    return `${diff.years} years${!!diff.months ? ` and ${diff.months} month${diff.months > 1 ? `s` : ``}` : ``}`;
};

export default DateDiff;