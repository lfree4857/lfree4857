import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "../styles/blogDetail.module.css";
import spinnerStyles from "../styles/spinner.module.css";
import axios from "axios";

const BlogDetail = () => {
    const { postSlug } = useParams();
    const [individualPost, setIndividualPost] = useState({});
    const [recentPosts, setRecentPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const apiUrl = "https://ennovatorz.com/api/v1/mernapi/blog-posts";

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const params = {
                    offset: 0,
                    limit: 1,
                    order: "desc",
                    userId: "",
                    category: "",
                    slug: postSlug,
                    postId: "",
                    searchTerm: "",
                };
                const response = await axios.get(apiUrl, { params });
                setIndividualPost(response?.data?.data?.posts[0] || {});
            } catch (err) {
                console.error("Failed to fetch blog posts:", err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [postSlug]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const params = {
                    offset: 0,
                    limit: 3,
                    order: "desc",
                    userId: "",
                    category: "",
                    slug: "",
                    postId: "",
                    searchTerm: "",
                };
                const response = await axios.get(apiUrl, { params });
                setRecentPosts(response?.data?.data?.posts || []);
            } catch (err) {
                console.error("Failed to fetch blog posts:", err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) {
        return (
            <div className={spinnerStyles['loadingContainer']}>
                <div className={spinnerStyles['spinner']}></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className={styles["error"]}>
                Error loading blog post. Please try again later.
            </div>
        );
    }

    if (!individualPost || Object.keys(individualPost).length === 0) {
        return <div className={styles["not-found"]}>Blog post not found.</div>;
    }

    return (
        <div className={styles["blog-detail"]}>
            {/* Main Blog Content */}
            {individualPost && (
                <>
                    <div className={styles["blog-hero"]}>
                        <img
                            src={individualPost.image}
                            alt="blog-img"
                            className={styles["blog-image"]}
                        />
                        <div className={styles["blog-overlay"]}>
                            <h1>{individualPost.title}</h1>
                        </div>
                    </div>
                    <div className={styles["blog-meta"]}>
                        <div className={styles["author-info"]}>
                            <div className={styles["author-avatar"]}></div>
                            <span>By {individualPost?.userId?.username}</span>
                        </div>
                    </div>
                    <div className={styles["blog-content-wrapper"]}>
                        <p>{individualPost.slug}</p>
                    </div>
                    <Link to="/" className={styles["back-link"]}>
                        Back to Blog List
                    </Link>
                </>
            )}

            {/* Recent Blogs Section */}
            {recentPosts.length > 0 && (
                <div className={styles["recent-blogs"]}>
                    <h2>Recent Blogs</h2>
                    <div className="row">
                        {recentPosts.map((recentBlog, idx) => (
                            <div
                                key={idx}
                                className="col-12 col-md-4 col-lg-4 mb-4"
                            >
                                <div className={styles["blog-box-item"]}>
                                    <div className={styles["blog-img"]}>
                                        <Link to={`/post/${recentBlog.slug}`}>
                                            <figure className="mb-0">
                                                <img
                                                    src={recentBlog.image}
                                                    alt="blog-img"
                                                    className="img-fluid"
                                                />
                                            </figure>
                                        </Link>
                                    </div>
                                    <div className={styles["blog-content"]}>
                                        <div
                                            className={
                                                styles["blog-auteher-title"]
                                            }
                                        >
                                            <span>
                                                By{" "}
                                                {recentBlog?.userId?.username}
                                            </span>
                                            <span className="float-lg-right">
                                                {recentBlog.date}
                                            </span>
                                        </div>
                                        <Link to={`/post/${recentBlog.slug}`}>
                                            <h4>
                                                {recentBlog.title?.substring(
                                                    0,
                                                    30
                                                )}{" "}
                                                {recentBlog.title?.length > 30
                                                    ? "..."
                                                    : ""}
                                            </h4>
                                        </Link>
                                        <p>
                                            {recentBlog.slug?.substring(0, 100)}{" "}
                                            {recentBlog.slug?.length > 100
                                                ? "..."
                                                : ""}
                                        </p>
                                        <Link
                                            to={`/post/${recentBlog.slug}`}
                                            className={styles["read-more"]}
                                        >
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default BlogDetail;
