
import Image from "next/image"
import styles from "../styles/Home.module.css"

import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();

    return (
      <div className={styles.container}>

        {/* Top Section */}

        <h1 className={styles.h1}> NFT Staking Contract </h1>
          <div className={styles.nftBoxGrid}>
            <div
                className={styles.optionSelectBox}
                role="button"
                onClick={() => router.push(`/mint`)}
            >

            {/* Mint a new NFT */}

            <Image src="/icons/drop.webp" alt="drop" width={64} height={64} />
            <h2 className={styles.selectBoxTitle}> Mint a new NFT </h2>
            <p className={styles.selectBoxDescription}> claim NFT </p>
           </div>
  
          <div
              className={styles.optionSelectBox}
              role="button"
              onClick={() => router.push(`/stake`)}
          >

            {/* Staking an NFT */}

            <Image src="/icons/token.webp" alt="token" width={64} height={64} />
            <h2 className={styles.selectBoxTitle}> Stake Your NFTs </h2>
            <p className={styles.selectBoxDescription}> stake your NFTs and earn ERC20 tokens </p>
          </div>
        </div>
      </div>
    );
};

export default Home;