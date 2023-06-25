import React, { useState } from 'react';
import AllOrdersTab from '../AllOrdersTab';
import RegularDeliveryTab from '../RegularDeliveryTab';
import ExpressDeliveryTab from '../ExpressDeliveryTab';
import './OrderManagement.css';

const OrderManegement = () => {
    const [activeTab, setActiveTab] = useState('all');

    const handleTabChange = (tab) => {
      setActiveTab(tab);
    };
    return (
        <div className="order-management">
      <div className="tab-buttons">
        <button
          className={activeTab === 'all' ? 'active' : ''}
          onClick={() => handleTabChange('all')}
        >
          All Orders
        </button>
        <button
          className={activeTab === 'regular' ? 'active' : ''}
          onClick={() => handleTabChange('regular')}
        >
          Regular Delivery
        </button>
        <button
          className={activeTab === 'express' ? 'active' : ''}
          onClick={() => handleTabChange('express')}
        >
          Express Delivery
        </button>
      </div>
      {activeTab === 'all' && <AllOrdersTab />}
      {activeTab === 'regular' && <RegularDeliveryTab />}
      {activeTab === 'express' && <ExpressDeliveryTab />}
    </div>
    );
};

export default OrderManegement;