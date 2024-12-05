import React from 'react'
import styles from "./comparisonCard.module.css";
import { image } from "../../../../public/odoo";
import { classNames } from '@/app/utils';
import Image from 'next/image';


export default function ComparisonCard() {
    return (
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
    )
}
