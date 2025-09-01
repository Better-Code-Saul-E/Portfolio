import styles from './StyledHr.module.scss';

function StyledHr({alignment}) {
    const alignmentClass = styles[alignment];
    return (
        <hr className={`${styles.hr} ${alignmentClass}`} />
    )
}

export default StyledHr;

