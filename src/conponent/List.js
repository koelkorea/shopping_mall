import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

import '../style/List.css';

export default function List() {

    const [goods, setGoods] = useState(null);

    // useEffect(() => {
    //     setGoods(db.goods);
    // }, []);

    // useEffect(() => {

    //     async function fetchData() {

    //         const res = await fetch('./data.json');
    //         const data = await res.json();
    //         console.log(data);

    //         return data;
    //     };

    //     const data = fetchData();
    //     data.then( 
    //         function (response) {
    //             setGoods(response.goods);
    //         } 
    //     );

    // }, []);

    useEffect(() => {
        fetch("http://localhost:3001/goods")
            .then(res => {
                return res.json();
            })
            .then(data => {
                setGoods(data);
            });
    }, []);

    return (
        <div className="goodsList">
            {
                goods ?
                    goods.map(goods => (
                        <span key={goods.id} className="listSpan">
                            <div className="listImgDiv" >
                                <Link to={`/goods/${goods.id}`} >
                                    <img src={goods.images} className="listImg" />
                                </Link>
                            </div>
                            <div className="listDiv" >
                                <h3> 상품명 : {goods.title}  </h3>
                            </div>
                            <div className="listDescriptionDiv" >
                                <h3> 상품설명 : {goods.description} </h3>
                            </div>
                            <div className="listDiv" >
                                <h3> 상품가격 : {goods.price} </h3>
                            </div>
                            <div className="listDiv" >
                                <h3>
                                    출시날짜 : {goods.createdAt.indexOf('/') == 1 ?
                                        `${goods.createdAt.slice(goods.createdAt.lastIndexOf('/') + 1)}-0${goods.createdAt.slice(0, 1)}-0${goods.createdAt.slice(goods.createdAt.indexOf('/') + 1, goods.createdAt.indexOf('/') + 2)}`
                                        : `${goods.createdAt.slice(goods.createdAt.lastIndexOf('/') + 1)}-${goods.createdAt.slice(0, 2)}-0${goods.createdAt.slice(goods.createdAt.indexOf('/') + 1, goods.createdAt.indexOf('/') + 2)}`}
                                </h3>
                            </div>
                        </span>
                    )
                    )
                    : "loading"
            }
        </div>
    );
}