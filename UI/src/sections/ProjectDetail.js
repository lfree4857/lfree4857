import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "../styles/blogDetail.module.css";
import spinnerStyles from "../styles/spinner.module.css";
import axios from "axios";

const ProjectDetail = () => {
    const { projectSlug } = useParams();
    const [individualProject, setIndividualProject] = useState({});
    const [recentProjects, setRecentProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const apiUrl = "https://ennovatorz.com/api/v1/mernapi/projects";

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
                    slug: projectSlug,
                    postId: "",
                    searchTerm: "",
                };
                const response = await axios.get(apiUrl, { params });
                setIndividualProject(response?.data?.data?.projects[0] || {});
            } catch (err) {
                console.error("Failed to fetch blog projects:", err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [projectSlug]);

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
                setRecentProjects(response?.data?.data?.projects || []);
            } catch (err) {
                console.error("Failed to fetch projects:", err);
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
                Error loading project. Please try again later.
            </div>
        );
    }

    if (!individualProject || Object.keys(individualProject).length === 0) {
        return <div className={styles["not-found"]}>Project not found.</div>;
    }

    return (
        <div className={styles["blog-detail"]}>
            {/* Main Blog Content */}
            {individualProject && (
                <>
                    <div className={styles["blog-hero"]}>
                        <img
                            src={individualProject.image}
                            alt="blog-img"
                            className={styles["blog-image"]}
                        />
                        <div className={styles["blog-overlay"]}>
                            <h1>{individualProject.title}</h1>
                        </div>
                    </div>
                    <div className={styles["blog-meta"]}>
                        <div className={styles["author-info"]}>
                            <div className={styles["author-avatar"]}></div>
                            <span>By {individualProject?.userId?.username}</span>
                        </div>
                    </div>
                    <div className={styles["blog-content-wrapper"]}>
                        <p>{individualProject.slug}</p>
                    </div>
                    <Link to="/" className={styles["back-link"]}>
                        Back to Project List
                    </Link>
                </>
            )}

            {/* Recent Projects Section */}
            {recentProjects.length > 0 && (
                <div className={styles["recent-blogs"]}>
                    <h2>Recent Projects</h2>
                    <div className="row">
                        {recentProjects.map((recentProject, idx) => (
                            <div
                                key={idx}
                                className="col-12 col-md-4 col-lg-4 mb-4"
                            >
                                <div className={styles["blog-box-item"]}>
                                    <div className={styles["blog-img"]}>
                                        <Link to={`/project/${recentProject.slug}`}>
                                            <figure className="mb-0">
                                                <img
                                                    src={recentProject.image}
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
                                                {recentProject?.userId?.username}
                                            </span>
                                            <span className="float-lg-right">
                                                {recentProject.date}
                                            </span>
                                        </div>
                                        <Link to={`/project/${recentProject.slug}`}>
                                            <h4>
                                                {recentProject.title?.substring(
                                                    0,
                                                    30
                                                )}{" "}
                                                {recentProject.title?.length > 30
                                                    ? "..."
                                                    : ""}
                                            </h4>
                                        </Link>
                                        <p>
                                            {recentProject.slug?.substring(0, 100)}{" "}
                                            {recentProject.slug?.length > 100
                                                ? "..."
                                                : ""}
                                        </p>
                                        <Link
                                            to={`/post/${recentProject.slug}`}
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

export default ProjectDetail;

