import React from "react";
import ProjectDetail from "./ProjectDetail";
import { getProjectBySlug, projects } from "../data/projectsData";
import "../../components/Solutions/solution.css";

export function generateStaticParams() {
    return projects.map((project) => ({ "portfolio-subpages": project.slug }));
}

export async function generateMetadata({ params }) {
    const resolvedParams = await params;
    const slug = resolvedParams?.["portfolio-subpages"];
    const project = getProjectBySlug(slug);

    if (!project) {
        return { title: "Project Not Found" };
    }

    return {
        title: `${project.title} | Base2Brand Portfolio`,
        description: project.description,
        openGraph: {
            title: project.title,
            description: project.description,
            images: project.image ? [project.image] : [],
        },
    };
}

export default async function Page({ params }) {
    const resolvedParams = await params;
    const slug = resolvedParams?.["portfolio-subpages"];

    return <ProjectDetail slug={slug} />;
}
