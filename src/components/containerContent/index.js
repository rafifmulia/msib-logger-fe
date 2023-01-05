import styles from './index.module.css';

function ContainerContent({ children }) {
  return(
    <main className={styles.container}>
      {children}
    </main>
  )
}

export default ContainerContent;
