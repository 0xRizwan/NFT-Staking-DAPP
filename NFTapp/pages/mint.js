import { Web3Button } from "@thirdweb-dev/react";
import { useRouter } from "next/router";
import { nftDropContractAddress } from "../constants/contractAddresses";
import styles from "../styles/Home.module.css"

const Mint = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
    <h1 className={styles.h1}> Mint An NFT! </h1>

    <p className={styles.explain}> Lazy minted NFTs </p>
    <hr className={`${styles.smallDivider} ${styles.detailPageHr}`} />

    <Web3Button
              colorMode="dark"
              accentColor="#5204BF"
              contractAddress={nftDropContractAddress}
              action={(contract) => contract.erc721.claim(1)}
              onSuccess={() => {
              alert("NFT Claimed!");
              router.push("/stake");
              }}
              onError={(error) => {
              alert(error);
              }}
    >
              Claim An NFT
    </Web3Button>
  </div>  
  )
};

export default Mint;