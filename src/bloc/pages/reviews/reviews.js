import React, { useEffect } from 'react';

import'../../../sass/sassTemplates/hat.scss';
import '../../../sass/base/_base.scss';
import './reviews.scss';
import { useNavigate } from 'react-router-dom';
import { useGetAllReviewsQuery } from '../../../store/api/reviewApi';
import { ReviewItem } from './reviewItem';

import { textCh, anonimCh,  } from '../../../store/rewiewSlice'

const Reviews = () => {


    const { data, isLoading } = useGetAllReviewsQuery();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    let content = <></>
    
    if(isLoading){
        content = <h5>Загрузка отзывов...</h5>
    }

    if(!isLoading && !data ){
        content = <h5>Отзывы не доступны</h5>
    }

    if(!isLoading){
        content = data.map(item=>{
            const {_id, text, rate, date, anonim, name} = item;
            return <ReviewItem
                key = {_id}
                text = {text}
                rate = {rate}
                date = {date}
                anonim = {anonim}
                name = {name}
            />
        })
    }

    return ( 
        <>
            <section className="hat">
                <div className="container">
                    <div className="hat__header hat__header-right">
                        <h1 className="hat__title">Отзывы</h1>
                    </div>
                </div>
            </section>
            <section className="reviews">
                <div className="container">
                    <div className="reviews__top">
                        <img className="reviews__main-img" src="img/review_img.png" alt="reviews" />
                        <button onClick={() => navigate('/personal/feedback') } className="reviews__btn">
                            <p>
                                <img src="../img/quote.png" alt="quote"/>Написать отзыв
                            </p>
                        </button>
                    </div>

                    {content}                

                </div>
            </section>
        </>
    );
};

export default Reviews ;