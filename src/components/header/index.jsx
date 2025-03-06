import { LogoIcon } from '@/assets/icon'
import { useSelector, useDispatch } from 'react-redux';
import { fetchMatches } from '@/store/matchSlice';
import Button from "@/components/buttons"
import { AlertIcon , LoadingIcon } from "@/assets/icon";


import styles from "./styles.module.scss"

export default function Header() {

    const { isLoading, error } = useSelector((state) => state.matches);

    const dispatch = useDispatch();

    return (
        <header className={styles.header}>
            <LogoIcon />

            <div>
                {error && <div><AlertIcon/>{error}</div>}
                <Button disabled={isLoading} onClick={() => dispatch(fetchMatches())} text={'Обновить'} icon={<LoadingIcon/>}/>
            </div>
        </header>
    );
}
