"use client";
import React from "react";
import styles from "./blogDetails.module.css";
import layout from "../../styles/layout.module.css";
import { images } from "../../../../public/newsBlogs";
import Image from "../../components/image";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import Faqs from "@/app/components/faqs";
import BlogsCards from "../newsBlogs/blogsCards";
import { classNames } from "@/app/utils";
import blogsData from "@/app/data/blogs";

const strategies = [
  {
    heading: "Advertising:",
    txt: "Companies can use various forms of advertising, such as TV, print, and online, to reach a large audience and raise brand awareness.",
  },
  {
    heading: "Influencer Marketing:",
    txt: "Accompanying the influencers who have a large following on social media can help reach a wider audience and increase brand awareness.",
  },
  {
    heading: "Content Marketing:",
    txt: "Creating and sharing engaging and informative content can help build brand awareness and reach new audiences.",
  },
  {
    heading: "Event Sponsorship:",
    txt: "Sponsoring events or participating in trade shows can help increase brand visibility and reach new audiences.",
  },
  {
    heading: "Social Media Marketing:",
    txt: "Utilizing social media platforms to connect with customers and promote products or services can help increase brand awareness and reach.",
  },
];

const costEffective = [
  "A cost-effective marketing strategy is one of the key advantages of social media marketing for business growth. Unlike traditional advertising methods, which can be expensive, businesses can promote their products and services on social media for little or no cost. This makes social media marketing a cost-effective way to reach a large and diverse audience, making it an ideal marketing strategy for businesses of all sizes.",
  "In addition to the low cost, social media marketing allows businesses to target their advertising to specific demographics, ensuring that they reach their desired audience and maximize the return on investment. For example, businesses can target their social media advertising to specific age groups, locations, and interests, allowing them to reach their target audience effectively and efficiently.",
  "By using social media as a cost-effective marketing strategy, businesses can increase brand awareness, improve customer engagement, and drive sales without breaking the bank. Social media marketing offers a high ROI, making it an ideal investment for businesses looking to grow their brand and reach new customers.",
];

function BlogsDetail() {
  return (
    <>
      <Header />
      <div
        className={[layout.grid, layout.grid_col80, styles.blogs_bg].join(" ")}
      >
        <div className={layout.block__inner}>
          <div className={styles.blogsDetails}>
            <div className={styles.marketing}>
              <div className={styles.content}>
                <h2>
                  ADVANTAGES of SOCIAL MEDIA MARKETING FOR BUSINESS GROWTH
                </h2>
                <p className={styles.date}>March 22, 2023</p>
                <p>
                  In the digital age, social media has become a critical tool
                  for businesses looking to grow their brand and reach new
                  customers. With over 4 billion active social media users
                  globally, enterprises of all sizes can use this powerful
                  marketing channel to reach their target audience and drive
                  growth.{" "}
                </p>
              </div>
              <div className={styles.img}>
                <Image src={images.marketing} alt="" />
              </div>
            </div>

            <div className={styles.brandAwareness}>
              <h4>INCREASED BRAND AWARENESS AND REACH</h4>
              <p>
                One of the primary benefits of social media marketing is the
                ability to reach a large and diverse audience. Platforms like
                Facebook, Twitter, Instagram, and LinkedIn have a massive user
                base, and businesses can leverage this to increase brand
                awareness and reach new customers. Social media allows
                businesses to showcase their products, services, and brand
                personality, helping to establish a strong brand image and reach
                a wider audience.
              </p>
            </div>
            <div className={styles.strategies}>
              <h4>
                THERE ARE A FEW STRATEGIES THAT BUSINESSES CAN USE TO INCREASE
                BRAND AWARENESS AND REACH, INCLUDING:
              </h4>
              <div className={styles.strategiesGrid}>
                {strategies.map((item, index) => (
                  <>
                    <div className={styles.innerContent} key={index}>
                      <h5>{item.heading.toUpperCase()}</h5>
                      <p>{item.txt}</p>
                    </div>
                  </>
                ))}
              </div>
              <p>
                In short, increased brand awareness and reach are essential for
                businesses that want to succeed in today’s market. By
                implementing various marketing and advertising strategies,
                companies can increase their visibility and reach more potential
                customers.
              </p>
            </div>
            <div className={styles.customerEngagement}>
              <div className={styles.customerContent}>
                <h4>IMPROVED CUSTOMER ENGAGEMENT AND LOYALTY</h4>
                <p>
                  Improved customer engagement and loyalty is other key
                  advantage of social media marketing for business growth.
                  Social media allows businesses to interact with their
                  customers in real-time, creating a more personal connection
                  and improving customer engagement. By responding to customer
                  inquiries, comments, and feedback on social media, businesses
                  can demonstrate their commitment to customer service and build
                  a loyal following. <br />
                  <br />
                  In addition, social media provides businesses with valuable
                  insights into their customers’ needs and preferences. By
                  monitoring customer feedback on social media, businesses can
                  identify common issues and concerns and make improvements to
                  their products and services to better meet their customers’
                  needs. This can help to improve customer satisfaction and
                  increase customer loyalty, leading to repeat business and
                  positive word-of-mouth recommendations. <br />
                  <br />
                  Social media also provides businesses with an opportunity to
                  showcase their products and services in a creative and
                  engaging way. By using visuals, videos, and interactive
                  content, businesses can make their products and services more
                  appealing to customers, increasing their chances of making a
                  sale. <br />
                  <br />
                  Overall, improved customer engagement and loyalty is a key
                  advantage of social media marketing for business growth. By
                  using social media to interact with customers, businesses can
                  create a more personal connection, build customer loyalty, and
                  drive sales, making it an essential part of any successful
                  marketing strategy.
                </p>
              </div>
              <div className={styles.engagementImage}>
                <Image src={images.engagement} alt="" />
              </div>
            </div>

            <div className={styles.costEffective}>
              <h4>COST-EFFECTIVE MARKETING STRATEGY</h4>
              <div className={styles.effectiveContainer}>
                {costEffective.map((cost, index) => (
                  <>
                    <div key={index}>
                      <p>{cost}</p>
                    </div>
                  </>
                ))}
              </div>
              <div className={styles.costImage}>
                <Image src={images.cost} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.blogs_bg}>
        <div className={styles.moreBlogs}>
          <h4>More Blogs</h4>
        </div>
      </div>
      <div
        className={classNames(
          layout.grid,
          layout.grid_col80,
          styles.blogs_padding
        )}
      >
        <div className={layout.block__inner}>
          <BlogsCards blogsCard={blogsData} />
        </div>
      </div>
      <Faqs />
      <Footer />
    </>
  );
}

export default BlogsDetail;
