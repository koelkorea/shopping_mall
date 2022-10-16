import { useParams } from "react-router-dom";

import '../style/Detail.css';
import {useState, useEffect } from 'react';

export default function Detail() {

    const [detail, setDetail] = useState(null);

    const id = useParams().id;
    console.log(id);


    // useEffect(() => {
    //     setDetail(db.goods.filter(good => good.id == id));
    //     console.log(db.goods.filter(good => good.id == id));
    // }, []);


    useEffect(() => {
        fetch(`http://localhost:3001/goods?id=${id}`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setDetail(data);
                console.log(data);
        });

        // fetch(`http://localhost:3001/cart`)
        //     .then(res => {
        //         return res.json();
        //     })
        //     .then(data => {
        //         setCart(data);
        // });

    }, []);

    function addCart() {
        fetch(`http://localhost:3001/cart/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                detailId: id,
                images: detail[0].images,
                title: detail[0].title,
                description: detail[0].description,
                price: detail[0].price,
                createdAt: detail[0].createdAt,
            }),
        }).then(res => {
            if (res.ok) {
                console.log(res);
                alert("장바구니에 물건이 담겼습니다.");
            }
        });
    }

    return (

        <>
            {
                detail ?
                    detail.map(goods => (
                        <span key={goods.id} className="details">
                            <div className="detailsImgDiv" >
                                <img src={goods.images} className="detailsImg" />
                            </div>
                            <div className="detailsInfoDiv">
                                <div className="detailsInfoDiv_1">
                                    <div className="detailsDiv" >
                                        <h3> 상품명 : {goods.title}  </h3>
                                    </div>
                                    <div className="detailsDiv" >
                                        <h3> 상품설명 : {goods.description} </h3>
                                    </div>
                                    <div className="detailsDiv" >
                                        <h3> 상품가격 : {goods.price} </h3>
                                    </div>
                                </div>
                                <div className="detailsInfoDiv_2" >
                                    <span className="detailsButtonDiv">
                                        <button className="detailButtonStyle buy">구매하기</button>
                                        {/* <button onClick={ addCart } className="detailButtonStyle cart"><Link className="detailButtonStyle cart" to={`/OnCart`} >장바구니</Link></button> */}
                                        <button onClick={addCart} className="detailButtonStyle cart">장바구니</button>
                                    </span>
                                    <div className="detailsDiv">
                                        <h3 >
                                            출시날짜 : {goods.createdAt.indexOf('/') == 1 ?
                                                `${goods.createdAt.slice(goods.createdAt.lastIndexOf('/') + 1)}-0${goods.createdAt.slice(0, 1)}-0${goods.createdAt.slice(goods.createdAt.indexOf('/') + 1, goods.createdAt.indexOf('/') + 2)}`
                                                : `${goods.createdAt.slice(goods.createdAt.lastIndexOf('/') + 1)}-${goods.createdAt.slice(0, 2)}-0${goods.createdAt.slice(goods.createdAt.indexOf('/') + 1, goods.createdAt.indexOf('/') + 2)}`}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </span>
                    )
                    )
                    : "loading"
            }
        </>

    );

}