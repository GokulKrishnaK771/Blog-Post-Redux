import { parseISO, formatDistanceToNow, differenceInDays, format } from "date-fns";


const TimeAgo = ({ timestamp }) => {

    let timeAgo = '';

    if (timestamp) {
        const date = parseISO(timestamp);
        const daysDifference = differenceInDays(new Date(), date)

        if (daysDifference >= 7) {
            timeAgo = format(date, 'MMM d, yyyy');
        } else {
            const timePeriod = formatDistanceToNow(date);
            timeAgo = `${timePeriod} ago`
        }
    }


    return (
        <span title={timestamp}>
            &nbsp; <i>{timeAgo}</i>
        </span>
    )
}

export default TimeAgo