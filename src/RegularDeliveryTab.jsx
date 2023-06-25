import React, { useEffect, useState } from 'react';
import './OrdersTab.css';
const RegularDeliveryTab = () => {
    const Orders=[
        { "id": 1, "name": "John Doe", "deliveryType": "Regular" },
        { "id": 2, "name": "Jane Smith", "deliveryType": "Express" },
        { "id": 3, "name": "Alice Johnson", "deliveryType": "Regular" },
        { "id": 4, "name": "Robert Davis", "deliveryType": "Express" },
        { "id": 5, "name": "Emily Wilson", "deliveryType": "Regular" },
        { "id": 6, "name": "Michael Brown", "deliveryType": "Express" },
        { "id": 7, "name": "Olivia Taylor", "deliveryType": "Regular" },
        { "id": 8, "name": "Daniel Anderson", "deliveryType": "Express" },
        { "id": 9, "name": "Sophia Thompson", "deliveryType": "Regular" },
        { "id": 10, "name": "Matthew Davis", "deliveryType": "Express" },
        { "id": 11, "name": "Emma Wilson", "deliveryType": "Regular" },
        { "id": 12, "name": "David Clark", "deliveryType": "Express" },
        { "id": 13, "name": "Ava Johnson", "deliveryType": "Regular" },
        { "id": 14, "name": "Joseph White", "deliveryType": "Express" },
        { "id": 15, "name": "Oliver Thomas", "deliveryType": "Regular" },
        { "id": 16, "name": "Mia Rodriguez", "deliveryType": "Express" },
        { "id": 17, "name": "William Garcia", "deliveryType": "Regular" },
        { "id": 18, "name": "Sofia Hernandez", "deliveryType": "Express" },
        { "id": 19, "name": "James Smith", "deliveryType": "Regular" },
        { "id": 20, "name": "Isabella Martinez", "deliveryType": "Express" }
      ]
      const RegularOrders = Orders.filter(order => order.deliveryType==="Regular")

    const ordersPerPage = 5; 
    const [currentPage, setCurrentPage] = useState(1);
  
    
    const indexOfLastOrder = currentPage * ordersPerPage;
    const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
    const currentOrders = RegularOrders.slice(indexOfFirstOrder, indexOfLastOrder);
  
    const totalPages = Math.ceil(RegularOrders.length / ordersPerPage);
  
    const handlePageChange = (page) => {
      setCurrentPage(page);
    };
  return (
    <>
       <table className="orders-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Delivery Type</th>
        </tr>
      </thead>
      <tbody>
        {currentOrders.map((order) => (
          <tr key={order.id}>
          <td>{order.id}</td>
          <td>{order.name}</td>
          <td>{order.deliveryType}</td>
        </tr>
        ))}
      </tbody>
    </table>
    <div className='pagination'>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
          <button key={page} onClick={() => handlePageChange(page)}>
            {page}
          </button>
        ))}
      </div>
    </>
 
  );
};

export default RegularDeliveryTab;
