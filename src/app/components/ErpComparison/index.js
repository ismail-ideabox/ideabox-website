import React from 'react'
import styles from "./comparisonCard.module.css";
import { image } from "../../../../public/odoo";
import { classNames } from '@/app/utils';
import Image from 'next/image';

const comparisonData = [
    {
        id: 1,
        erpLogo: image.sap,
        percent: 53,
        details: [
            {
                id:1,
                title: "",
                description: ""
            },
            {
                id:2,
                title: "",
                description: ""
            },
            {
                id:3,
                title: "",
                description: ""
            },
            {
                id:4,
                title: "",
                description: ""
            },
        ]

    }
]


export default function ErpComparison() {
    return (
        <>
            <div className={styles.comparison_container}>
                <div className={styles.comparison_item}>
                    <div className={styles.erpLogo}> <Image src={image.sap} className={styles.sapImg} /></div>

                    <div className={styles.percent}>
                        <svg>
                            <circle cx="90" cy="90" r="85"></circle>
                            <circle cx="90" cy="90" r="85" className={styles.circle1}></circle>
                        </svg>
                        <div className={styles.number}>
                            <h3>53<span>%</span></h3>
                        </div>
                    </div>
                    <ul>
                        <li><strong>Modular Design</strong> Low, more monolithic, and integrated</li>
                        <li><strong>Industry Focus</strong> Manufacturing, retail, healthcare, finance, and more</li>
                        <li><strong>Deployment</strong> On-premise or cloud</li>
                        <li><strong>Innovation</strong> Low, less frequent, and less innovative updates</li>
                        <li><strong>Implementation Time</strong> Long (months to years)</li>
                    </ul>
                </div>
                <div className={styles.comparison_item}>
                    <div className={styles.erpLogo}>
                        <Image src={image.netsuit} className={styles.netsuitImg} />
                    </div>
                    <div className={styles.percent}>
                        <svg>
                            <circle cx="90" cy="90" r="85"></circle>
                            <circle cx="90" cy="90" r="85" className={styles.circle2}></circle>
                        </svg>
                        <div className={styles.number}>
                            <h3>56<span>%</span></h3>
                        </div>
                    </div>
                    <ul>
                        <li><strong>Modular Design</strong> Low, more monolithic, and integrated</li>
                        <li><strong>Industry Focus</strong> Manufacturing, retail, healthcare, finance, and more</li>
                        <li><strong>Deployment</strong> On-premise or cloud</li>
                        <li><strong>Innovation</strong> Low, less frequent, and less innovative updates</li>
                        <li><strong>Implementation Time</strong> Long (months to years)</li>
                    </ul>
                </div>
                <div className={styles.comparison_item}>
                    <div className={styles.erpLogo}><Image src={image.dynamic} className={styles.dynamicImg} /></div>
                    <div className={styles.percent}>
                        <svg>
                            <circle cx="90" cy="90" r="85"></circle>
                            <circle cx="90" cy="90" r="85" className={styles.circle3}></circle>
                        </svg>
                        <div className={styles.number}>
                            <h3>65<span>%</span></h3>
                        </div>
                    </div>
                    <ul>
                        <li><strong>Modular Design</strong> Low, more monolithic, and integrated</li>
                        <li><strong>Industry Focus</strong> Manufacturing, retail, healthcare, finance, and more</li>
                        <li><strong>Deployment</strong> On-premise or cloud</li>
                        <li><strong>Innovation</strong> Low, less frequent, and less innovative updates</li>
                        <li><strong>Implementation Time</strong> Long (months to years)</li>
                    </ul>
                </div>
                <div className={classNames(styles.comparison_item, styles.odoo)}>
                    <div className={styles.erpLogo}><Image src={image.odoo} className={styles.odooImg} /></div>
                    <div className={styles.percent}>
                        <svg>
                            <circle cx="90" cy="90" r="85"></circle>
                            <circle cx="90" cy="90" r="85" className={styles.circle4}></circle>
                        </svg>
                        <div className={styles.number}>
                            <h3>90<span>%</span></h3>
                        </div>
                    </div>
                    <ul>
                        <li><strong>Modular Design</strong> Low, more monolithic, and integrated</li>
                        <li><strong>Industry Focus</strong> Manufacturing, retail, healthcare, finance, and more</li>
                        <li><strong>Deployment</strong> On-premise or cloud</li>
                        <li><strong>Innovation</strong> Low, less frequent, and less innovative updates</li>
                        <li><strong>Implementation Time</strong> Long (months to years)</li>
                    </ul>
                </div>
            </div>
            {/* <div
                className={[
                    layout.block__inner,
                    styles.blogs_container,
                    styles.blogs_mobile,
                ].join(" ")}
            >
                <Swiper
                    className="blogsSwiper"
                    slidesPerView={1}
                    spaceBetween={20}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                >
                    {blogsCard.map((blogCard, index) => (
                        <SwiperSlide key={index}>
                            <div className={styles.blogs_card}>
                                <div className={styles.card_image}>
                                    <Image
                                        src={blogCard.cardImage}
                                        alt="Card Image for the Blog"
                                    />
                                </div>
                                <div className={styles.card_content}>
                                    <Link href={""}>
                                        <h2>{blogCard.blogTitle}</h2>
                                    </Link>
                                    <div className={styles.blog_description}>
                                        <p>{blogCard.blogDescription}</p>
                                    </div>
                                    <div className={styles.author_details}>
                                        <div className={styles.blogs_read_more}>
                                            <Link href={""}>
                                                <p className={styles.read_more}>Read More</p>
                                            </Link>
                                        </div>
                                        <div className={styles.day_date}>
                                            <p>{blogCard.date}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div> */}
        </>
    )
}
