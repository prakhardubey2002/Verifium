// import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react'
import WorkIcon from '@mui/icons-material/Work';
import SignalWifiStatusbar4BarIcon from '@mui/icons-material/SignalWifiStatusbar4Bar';
import PersonIcon from '@mui/icons-material/Person';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { useGlobalContext } from '../Context/WalletContext';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
const Admin = () => {
    const [loader, setLoader] = useState(false);
    const [loaderx, setLoaderx] = useState(true);
    const [load, setLoad] = useState(false);
    const [data, setData] = useState();
    const [user, setUser] = useState();
    const { isAddress, setIsAddress } = useGlobalContext();
    useEffect(() => {
        console.log("z")
        fetch('http://localhost:3000/ali/UserDataView', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(response => response.json())
            .then(users => {
                console.log(users);
                setUser(users);
                // setLoader(false);
                setLoad(true);
            })

        fetch('http://localhost:3000/ali', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(response => response.json())
            .then(
                data => {
                    // console.log(data.address);

                    console.log(data);
                    setData(data);
                    setLoader(true);
                    setLoaderx(false);
                    // data.address.map(item => console.log(item));
                    // console.log(data[0].address)
                }
            )
    }, [])

    return (
        <>
            <div className="admin">
                {loader && <>
                    <div className='Stats'>
                        <div className="operat">

                            <h2>Current Opertional Stats</h2>
                            <br />
                            <div className="cardx">

                                <div class="card">
                                    <div class="tools">
                                        <div class="circle">
                                            <span class="red box"></span>
                                        </div>
                                        <div class="circle">
                                            <span class="yellow box"></span>
                                        </div>
                                        <div class="circle">
                                            <span class="green box"></span>
                                        </div>
                                    </div>
                                    <div class="card__content">
                                        <WorkIcon />
                                        <h2>Current Chain</h2>
                                        <p>Solana</p>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="tools">
                                        <div class="circle">
                                            <span class="red box"></span>
                                        </div>
                                        <div class="circle">
                                            <span class="yellow box"></span>
                                        </div>
                                        <div class="circle">
                                            <span class="green box"></span>
                                        </div>
                                    </div>
                                    <div class="card__content">
                                        <SignalWifiStatusbar4BarIcon />
                                        <h2>System Status</h2>
                                        <p>Active</p>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="tools">
                                        <div class="circle">
                                            <span class="red box"></span>
                                        </div>
                                        <div class="circle">
                                            <span class="yellow box"></span>
                                        </div>
                                        <div class="circle">
                                            <span class="green box"></span>
                                        </div>
                                    </div>
                                    <div class="card__content">
                                        <PersonIcon />
                                        <h2>Total User</h2>
                                        <p>
                                            {
                                                data.data.length
                                            }
                                        </p>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="tools">
                                        <div class="circle">
                                            <span class="red box"></span>
                                        </div>
                                        <div class="circle">
                                            <span class="yellow box"></span>
                                        </div>
                                        <div class="circle">
                                            <span class="green box"></span>
                                        </div>
                                    </div>
                                    <div class="card__content">
                                        <AdminPanelSettingsIcon />
                                        <h2>Admin address </h2>
                                        <p>{isAddress.substring(0, 17)}....</p>
                                    </div>
                                </div>

                            </div>
                            <br />
                        </div>
                        {/* <SupervisorAccountIcon /> */}
                        {
                            load && <>
                                <h2>Registered User Data  </h2>
                                <br />
                                <table>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>InstituteName</th>
                                        <th>Course </th>
                                        <th>Feedback</th>
                                    </tr>
                                    {user?.data?.map((datax) =>
                                        <tr>
                                            <th>{datax.id}</th>
                                            <th>{datax.name}</th>
                                            <th>{datax.institute_name}</th>
                                            <th>{datax.course_specialisation}</th>
                                            <th>{datax.feedback}</th>
                                        </tr>
                                    )}
                                </table></>
                        }
                        <>
                            <h2>All Current Registered  User ! </h2>
                            <br />
                            <table>
                                <tr>
                                    <th>Sno</th>
                                    <th>Address</th>
                                </tr>
                                {data.data.map((item, index) =>
                                    <tr>
                                        <th>{index}</th>
                                        <th>{item.address}</th>
                                    </tr>
                                )}
                            </table>


                        </>

                    </div>
                </>}
                {loaderx && <div class="loadingspinner">
                    <div id="square1"></div>
                    <div id="square2"></div>
                    <div id="square3"></div>
                    <div id="square4"></div>
                    <div id="square5"></div>
                </div>

                }
            </div>
        </>
    )
}

export default Admin