import { useState } from "react";
import axios from "axios";
import { useGlobalContext } from '../Context/WalletContext';
const ListAll = () => {
    const { isAddress, setIsAddress } = useGlobalContext();
    const xKey = "5Bg8vrE-x6zPYo6S";//enter your x api key here
    const [network, setNetwork] = useState("devnet");
    const [isLoaded, setLoaded] = useState(false);
    const [dataFetched, setDataFetched] = useState();


    const fetchNFTs = (e) => {
        e.preventDefault();
        let nftUrl = `https://api.shyft.to/sol/v1/nft/read_all?network=devnet&address=${isAddress}`;
        axios({
            url: nftUrl,
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": xKey,
            },
        })
            .then((res) => {
                console.log(res.data);
                setDataFetched(res.data);
                setLoaded(true);
            })
            .catch((err) => {
                console.warn(err);
            });
    };
    return (
        <div className="grd-back">
            <div className="text-center p-3">
                <button
                    className="button-24"
                    onClick={fetchNFTs}
                >
                    Get
                </button>
            </div>
            <div className="container-lg">
                <div className="cards-section py-4">
                    <div className="row">
                        {isLoaded && <div class="loadingspinner">
                            <div id="square1"></div>
                            <div id="square2"></div>
                            <div id="square3"></div>
                            <div id="square4"></div>
                            <div id="square5"></div>
                        </div>
                        }
                        {isLoaded &&
                            dataFetched.result.map((item) => (
                                <div className="NFTlist" key={item.mint}>
                                    <div className="Nftcard">
                                        <div className="card-body">
                                            <a href={`/get-details?token_address=${item.mint}&network=${network}`} target="_blank" rel="noreferrer">
                                                <img className="card-image img-fluid" src={item.image_uri} alt="img" />
                                            </a>
                                            <a href={`/get-details?token_address=${item.mint}&network=${network}`} target="_blank" rel="noreferrer">
                                                <h5>{item.name}</h5>
                                            </a>

                                        </div>
                                    </div>
                                </div>
                            ))}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListAll;
