import { useContext } from 'react';
import Card from './Card';
import BillDetail from './BillDetail';
import CartContext from '../../ordering/components/Cart/CartController/CartContext';
import classes from './Bill.module.css';
import React  from 'react';
import {  Col, Row} from 'reactstrap';
import DropMenu from '../PaymentController/dropdown2';
import DropPayment from '../PaymentController/dropdown';

const Cart = (props) => {
  const cartContext = useContext(CartContext);
  const totalAmount = `${cartContext.totalAmount.toLocaleString('vi-VN')} VND`;
  sessionStorage.setItem("money", totalAmount);
  const cartItems = (
    <ul className = {classes['cart-items']}>
      {cartContext.items.map((item) => (
        <BillDetail
          key = {item.id}
          name = {item.name}
          amount = {item.amount}
          price = {item.price}
        />
      ))}
    </ul>
  );

        // console.log("Cart amount: ", cartContext.totalAmount);
  return (
      <Card>
        {cartItems}
        <div style={{paddingTop: "40px"}}>
        <div style={{ fontWeight: 'bold', fontSize: '3vw', textAlign: "left", float: "left"}}> 
           Thành tiền
          </div>
          <div style={{ fontWeight: 'bold', fontSize: '3vw', textAlign: "right"}}>
          {totalAmount}
        </div>
        </div>
        <Row >
          <Col style={{textAlign: "center"}}>
          <DropPayment  /> 
            </Col>
            <Col style={{textAlign: "center"}}>
            <DropMenu />
            </Col>
          </Row>
      </Card>
  );

};

export default Cart;
