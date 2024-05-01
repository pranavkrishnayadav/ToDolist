// import styles from "./inline.css"; // Change this
import styles from "./inline.module.css"; // Update the import path to point to your CSS module

export default function InlineComponent() {
    return (
        <div>
            <h1 className={styles.header}>Inline InlineComponent</h1> {/* Use styles.header */}
        </div>
    );
}
