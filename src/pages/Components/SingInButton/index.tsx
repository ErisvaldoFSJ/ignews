import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import styles from './styles.module.scss'
export function SingInButton() {
    const isUserLoggedIn = true;

    return isUserLoggedIn ? (
        <button type="button" className={styles.SingInButton}>
            <FaGithub color="#04d361" />
            Diego Fernandes
            <FiX color="#737380" className={styles.closeIcon} />
        </button>
    ) : (
        <button type="button" className={styles.SingInButton}>
            <FaGithub color="#eba417" />
            Sing In with Github
        </button >
    )
}