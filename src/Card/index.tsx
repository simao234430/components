/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";

import "./Card.css";

export interface CardProps {
    img: { src: string; alt: string };
    title: string;
}

export function Card ({
    img,
    title,
    children,
}: React.PropsWithChildren<CardProps>) {
    return (
      <article data-card>
    	// eslint-disable-next-line @next/next/no-img-element
    	<img data-card-img src={img.src} alt={img.alt} />
   	 <h2>{title}</h2>
   	 {children}
      </article>
    );
}