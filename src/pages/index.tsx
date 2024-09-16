import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import { useAccount } from 'wagmi';
import Hero from '../components/Hero';

const Home: NextPage = () => {
  const { address } = useAccount();
  return (
    <div className={styles.container}>
        <div className="bg-blue-500/40 select-none text-center py-[20%]">
            <h1 className=" text-7xl">Home <sup>01</sup></h1>
            <p>{JSON.stringify(address)}</p>
            <Hero/>
        </div>
    </div>
  );
};

export default Home;
