import React, { Component } from 'react';
import Title from './Title';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'; 

export default class Services extends 
Component {
    state={
        services: [
            {
               icon:<FaCocktail />,
               title: 'Free Cocktails',
               info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.' 
            },
            {
                icon:<FaHiking />,
                title: 'Endless Hicking',
                info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.' 
             },
             {
                icon:<FaShuttleVan />,
                title: 'Free Shuttle',
                info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.' 
             },
             {
                icon:<FaBeer />,
                title: 'Strongest Tea',
                info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.' 
             }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
