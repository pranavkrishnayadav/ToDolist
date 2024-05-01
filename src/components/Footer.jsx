import styles from "./footer.module.css"
export default function Footer({completeditems,TotalToDos}){
    return(
        <div className={styles.footer}>

        <span className={styles.item}>CompletedToDos :{completeditems}</span>
        <span className={styles.item}>TotalToDos:{TotalToDos}</span>

        </div>
    );
}