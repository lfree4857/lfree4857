"use client";

import React, { useEffect, useState } from "react";
import { blogs } from "../constants/blogContent";
import { CLIENT } from "../constants/environment";
import useApi from "../CustomHooks/API";
import axios from "axios";
import styles from "../styles/blog.module.css";
import Link from 'next/link';

export const Blog = () => {
    const [posts, setAllPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const apiUrl = "https://ennovatorz.com/api/v1/mernapi/blog-posts";

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);

                const params = {
                    offset: 0,
                    limit: 9,
                    order: "desc",
                    userId: "",
                    category: "",
                    slug: "",
                    postId: "",
                    searchTerm: "",
                };

                const response = await axios.get(apiUrl, { params });
                setAllPosts(response.data);
            } catch (err) {
                console.error("Failed to fetch blog posts:", err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const groupedPosts = [];
    for (let i = 0; i < posts?.data?.posts.length; i += 3) {
        groupedPosts.push(posts.data.posts.slice(i, i + 3));
    }

    return (
        <section
            className="w-100 float-left blog-con padding-top padding-bottom position-relative"
            id="Blog"
        >
            <div className="container">
                <div className="blog-inner-con position-relative">
                    <div className="generic-title text-center">
                        <h6>Latest News</h6>
                        <h2 className="mb-0">Blog & Articles</h2>
                    </div>

                    {loading ? (
                        // Loader
                        <div className="text-center my-5">
                            <div
                                className="spinner-border text-primary"
                                role="status"
                            >
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    ) : error ? (
                        // Error Message
                        <div className="text-center text-danger">
                            <p>
                                Failed to load blog posts. Please try again
                                later.
                            </p>
                        </div>
                    ) : (
                        // Blog List
                        <div className={`${styles["blog-box"]} wow fadeInUp`}>
                            {groupedPosts.map((group, rowIdx) => (
                                <div
                                    key={rowIdx}
                                    className={`row ${
                                        rowIdx < groupedPosts.length - 1
                                            ? styles["row-gap"]
                                            : ""
                                    }`}
                                >
                                    {group.map((blog, idx) => (
                                        <div
                                            key={idx}
                                            className="col-4 col-lg-4"
                                        >
                                            <div
                                                className={
                                                    styles["blog-box-item"]
                                                }
                                            >
                                                <div
                                                    className={
                                                        styles["blog-img"]
                                                    }
                                                >
                                                    <Link href={`/post/${blog.slug}`}>
                                                        <figure className="mb-0">
                                                        <img
                                                            src={blog.image}
                                                            alt="blog-img"
                                                            className="img-fluid"
                                                        />
                                                        </figure>
                                                    </Link>
                                                </div>
                                                <div
                                                    className={
                                                        styles["blog-content"]
                                                    }
                                                >
                                                    <div
                                                        className={
                                                            styles[
                                                                "blog-auteher-title"
                                                            ]
                                                        }
                                                    >
                                                        <span>
                                                            By{" "}
                                                            {
                                                                blog?.userId
                                                                    ?.username
                                                            }
                                                        </span>
                                                        <span className="float-lg-right">
                                                            {blog.date}
                                                        </span>
                                                    </div>
                                                    <Link href={`/post/${blog.slug}`}>
                                                        <h4>
                                                        {blog.title?.substring(0, 30)}{' '}
                                                        {blog.title?.length > 30 ? '...' : ''}
                                                        </h4>
                                                    </Link>
                                                    <p>
                                                        {blog.slug?.substring(
                                                            0,
                                                            100
                                                        )}{" "}
                                                        {blog.slug?.length > 100
                                                            ? "..."
                                                            : ""}
                                                    </p>
                                                   <Link href={`/post/${blog.slug}`} className={styles['read-more']}>
                                                        Read More
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};
