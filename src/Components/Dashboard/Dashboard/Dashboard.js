import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';
import './Dashboard.css'


const Dashboard = () => {
    return (
    <div>
        <Topbar></Topbar>
        <div class="container-fluid">
        <div class="row">
            <Sidebar></Sidebar>
            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                Dashboard
            </main>
        </div>
        </div>
    </div>
    );
};

export default Dashboard;