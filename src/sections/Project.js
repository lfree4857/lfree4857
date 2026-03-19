"use client";

import React, { useEffect, useState } from "react";
import { blogs } from "../constants/blogContent";
import { CLIENT } from "../constants/environment";
import useApi from "../CustomHooks/API";
import axios from "axios";
import styles from "../styles/blog.module.css";
import Link from 'next/link';

export const Project = () => {
    const [projects, setAllProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const apiUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/projects`;

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
                setAllProjects(response.data);
            } catch (err) {
                console.error("Failed to fetch blog projects:", err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const groupedProjects = [];
    for (let i = 0; i < projects?.length; i += 3) {
        groupedProjects.push(projects.slice(i, i + 3));
    }

    return (
        <section
            className="w-100 float-left blog-con padding-top padding-bottom position-relative"
            id="Blog"
        >
            <div className="container">
                <div className="blog-inner-con position-relative">
                    <div className="generic-title text-center">
                        <h2 className="mb-0">Projects and Products</h2>
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
                                Failed to load projects. Please try again
                                later.
                            </p>
                        </div>
                    ) : (
                        // Blog List
                        <div className={`${styles["blog-box"]} wow fadeInUp`}>
                            {groupedProjects.map((group, rowIdx) => (
                                <div
                                    key={rowIdx}
                                    className={`row ${rowIdx < groupedProjects.length - 1
                                        ? styles["row-gap"]
                                        : ""
                                        }`}
                                >
                                    {group.map((project, idx) => (
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
                                                    <Link href={`/project/${project._id}`}>
                                                        <figure className="mb-0">
                                                            <img
                                                                // src={project.image}
                                                                src="/image/projects.jpg"
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
                                                                project?.userId
                                                                    ?.username
                                                            }
                                                        </span>
                                                        <span className="float-lg-right">
                                                            {project.date}
                                                        </span>
                                                    </div>
                                                    <Link href={`/project/${project._id}`}>
                                                        <h4>
                                                            {project.title?.substring(0, 30)}{' '}
                                                            {project.title?.length > 30 ? '...' : ''}
                                                        </h4>
                                                    </Link>
                                                    <p>
                                                        {project.slug?.substring(
                                                            0,
                                                            100
                                                        )}{" "}
                                                        {project.slug?.length > 100
                                                            ? "..."
                                                            : ""}
                                                    </p>
                                                    <Link href={`/project/${project._id}`} className={styles['read-more']}>
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
