import React, {Component} from 'react';
import { Container , Col, Row} from 'reactstrap';
import './payment.css'
import Bill from '../PaymentModel/Bill';
import CartProvider from '../../ordering/components/Cart/CartController/CartProvider';
import { useState } from 'react';
import NavigationView1 from './NavigationView1';

function Paymentbycash() {
    const [cartIsShown, setCartIsShown] = useState(false);
    const showCartHandler = () => {
        setCartIsShown(true);
    };
    const hideCartHandler = () => {
        setCartIsShown(false);
    };
//     return (
//         <Container>
   
//             <Row>
//             <Col xs={3}> 
//             <img class=" img-fluid mai " src="/assets/images/caphe.png" alt=""/>
//               </Col>
           
//               <Col xs={6} >
//         <CartProvider>
//             {cartIsShown && <Bill onClose={hideCartHandler} />}
//             <NavigationView1 onShowCart={showCartHandler} />
//             <h2 style={{textAlign: 'center', color: "orange",fontSize: "2vw", fontWeight: 'bold'}}>Quý khách vui lòng cầm hóa đơn điện tử ra quầy thu ngân để tính tiền</h2>
//         </CartProvider>  
//       </Col>
//       <Col xs={3}>  
//       <img class=" img-fluid mai " src="/assets/images/caphe.png" alt=""/>
//               </Col>
              
//             </Row>     
//           </Container>
//     );
// }
return (
   
            <div class="row w-100 pt-5 ps-2">
        <div class="d-flex justify-content-center">
        <div class="col-2 pe-3"> 
        <img class=" img-fluid mai " src="/assets/images/caphe.png" alt=""/>
          </div>
       
          <div class="col-7 themain">
    <CartProvider>
        {cartIsShown && <Bill onClose={hideCartHandler} />}
        <NavigationView1 onShowCart={showCartHandler} />
        <h2 class="pt-3" style={{textAlign: 'center', color: "orange",fontSize: "3vw", fontWeight: 'bold'}}>Quý khách vui lòng cầm hóa đơn điện tử ra quầy thu ngân để tính tiền</h2>
    </CartProvider>  
    </div>
  <div class="col-2 ps-3">  
  <img class=" img-fluid mai " src="/assets/images/caphe.png" alt=""/>
          </div>
          
        </div>   
        </div>  

);
}
export default Paymentbycash;