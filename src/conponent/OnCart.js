import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../style/OnCart.css';

export default function OnCart() {

    const [cart, setCart] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3001/cart`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setCart(data);
        });

    }, []);
    
    function onBuying(){
        const buyItem = document.querySelectorAll('.wantBuy');
        
        for(let i = 0; i < buyItem.length; i++){
            if(buyItem[i].checked) {

                fetch(`http://localhost:3001/cart?id=${buyItem[i].id}`)
                    .then(res => {
                        return res.json();
                    })
                    .then(data => {
                        console.log(data);
                });
        

            }
        }

        alert("주문정보 출력이 완료되었습니다");
    }


    // function addCart() {
    //     fetch(`http://localhost:3001/cart/`, {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //             detailId: id,
    //         }),
    //     }).then(res => {
    //         if (res.ok) {
    //             alert("장바구니에 물건이 담겼습니다.");
    //         }
    //     });
    // }

    return (
        <>
            <section className="onCartSection">
                <table>
                    <thead>
                        <tr>
                            <td></td>
                            <td>상품이미지</td>
                            <td>상품명</td>
                            <td>상품설명</td>
                            <td>상품가격</td>
                            <td>출시날짜</td>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        cart ?
                            cart.map(cart => (
                                <tr key={cart.detailId}>
                                    <td>
                                        <input type="checkbox" id={cart.id} className="wantBuy"/>
                                        <label htmlFor={cart.id}></label>
                                    </td>
                                    <td>
                                        <Link to={`/goods/${cart.id}`} >
                                            <img src={cart.images} className="listImg" />
                                        </Link>
                                    </td>
                                    <td>
                                        {cart.title}
                                    </td>
                                    <td >
                                        {cart.description}
                                    </td>
                                    <td>
                                        {cart.price}
                                    </td>
                                    <td>{
                                        cart.createdAt.indexOf('/') == 1 ?
                                            `${cart.createdAt.slice(cart.createdAt.lastIndexOf('/') + 1)}-0${cart.createdAt.slice(0, 1)}-0${cart.createdAt.slice(cart.createdAt.indexOf('/') + 1, cart.createdAt.indexOf('/') + 2)}`
                                            : `${cart.createdAt.slice(cart.createdAt.lastIndexOf('/') + 1)}-${cart.createdAt.slice(0, 2)}-0${cart.createdAt.slice(cart.createdAt.indexOf('/') + 1, cart.createdAt.indexOf('/') + 2)}`
                                        }
                                    </td>
                                </tr>
                            )
                            )
                            : "loading"
                    }
                    </tbody>
                </table>
                <div className="cartButtonDiv">
                    <button onClick={onBuying} className="cartButtonStyle cart">주문하기</button>
                    <button className="cartButtonStyle buy"><Link className="cartButtonStyle buy" to={`/`} >쇼핑 계속하기</Link></button>
                </div>
            </section>
        </>

    );
}