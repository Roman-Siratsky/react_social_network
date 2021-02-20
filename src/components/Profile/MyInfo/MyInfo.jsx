import React from 'react';
import p from './MyInfo.module.css';


const MyInfo = () => {
    return (
        <div className={p.info}>
            <img className={p.image} src='https://i.pinimg.com/originals/eb/f0/02/ebf002d6348c3ae432649da4418fce40.jpg'></img>
            <div className={p.container}>
                <div>
                    <img className={p.avatar} src="https://cdn.iz.ru/sites/default/files/styles/1920x1080/public/article-2019-10/3_2.jpg?itok=490tTVov" alt="main-avatar" width='' height='120' />
                </div>
                <div className={p.block}>
                    <p className={p.description}>Lorem ipsum dolor sit amet</p>
                    <p className={p.description}>Lorem ipsum dolor sit amet</p>
                    <p className={p.description}>Lorem ipsum dolor sit amet</p>
                    <p className={p.description}>Lorem ipsum dolor sit amet</p>
                </div>
            </div>
        </div>
    )
}

export default MyInfo;