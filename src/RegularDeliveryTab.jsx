import React, { useEffect, useState } from 'react';
import './OrdersTab.css';
const RegularDeliveryTab = () => {
    const [Orders, setOrder]=useState([]);
   
    useEffect(()=>{
        fetch('../public/FateData.json')
        .then(res=>res.json())
        .then(data=>{
            const regularOrders = data.filter(order => order.deliveryType==="Regular")
            setOrder(regularOrders);
        }
           
          
        );
        
    }, [])

    const ordersPerPage = 5; 
    const [currentPage, setCurrentPage] = useState(1);
  
    
    const indexOfLastOrder = currentPage * ordersPerPage;
    const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
    const currentOrders = Orders.slice(indexOfFirstOrder, indexOfLastOrder);
  
    const totalPages = Math.ceil(Orders.length / ordersPerPage);
  
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
