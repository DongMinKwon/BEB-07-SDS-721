import './Home.css';
import NftCard from 'components/features/NftCard';
import { useState, useEffect } from 'react';

import sample1 from 'img/card_sample_1.jpg';
import sample2 from 'img/card_sample_2.jpg';
import sample3 from 'img/card_sample_3.jpg';
import sample4 from 'img/card_sample_4.jpg';
import profile_sample from 'img/profile_sample.jpg';

const Home = () => {
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    fetch('http://snowdelver.iptime.org/dev/nfts')
      .then((res) => res.json())
      .then((res) => {
        setNfts([...res]);
        console.log(res);
      });
  }, []);

  return (
    <div className="home">
      <div className="home-inner mx-auto mt-[19px] w-4/5">
        <p className="mx-auto mb-8 flex h-[84px] w-[876px] items-center justify-center text-6xl font-semibold">
          Explore, collect, and sell NFTs
        </p>
        <div className="mb-12 flex flex-wrap ">
          {/* <div className="mr-[50px] flex-1">
            <NftCard
              nft_img={nfts[0].img_link}
              nft_name={nfts[0].name}
              artist_name={nfts[0].creater}
              artist_profile={profile_sample}
              price={nfts[0].price}
            />
          </div> */}
          {nfts.map((nft) => (
            <div className="mr-[50px] mt-14">
              <NftCard
                nft_img={nft.img_link}
                nft_name={nft.name}
                artist_name={nft.creater}
                artist_profile={profile_sample}
                price={nft.price}
              />
            </div>
          ))}
          {/* <div className="mr-[50px] flex-1">
            <NftCard
              nft_img={sample1}
              nft_name="NFT Name"
              artist_name="NFT Artist"
              artist_profile={profile_sample}
              price="1.63"
            />
          </div>
          <div className="mr-[50px] flex-1">
            <NftCard
              nft_img={sample2}
              nft_name="NFT Name"
              artist_name="NFT Artist"
              artist_profile={profile_sample}
              price="1.63"
            />
          </div>
          <div className="mr-[50px] flex-1">
            <NftCard
              nft_img={sample3}
              nft_name="NFT Name"
              artist_name="NFT Artist"
              artist_profile={profile_sample}
              price="1.63"
            />
          </div>
           */}
          <div className="mr-[50px] mt-14">
            <NftCard
              nft_img={sample3}
              nft_name="NFT Name"
              artist_name="NFT Artist"
              artist_profile={profile_sample}
              price="1.63"
            />
          </div>
          <div className="mr-[50px] mt-14">
            <NftCard
              nft_img={sample4}
              nft_name="NFT Name"
              artist_name="NFT Artist"
              artist_profile={profile_sample}
              price="1.63"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
