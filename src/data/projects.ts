export type Project = {
    slug: string;
    title: string;
    description: string;
    stack: string[];
    github: string;
    demo: string;
    challenge: string;
    solution: string;
    outcome: string;
};

export const projects: Project[] = [
    {
        slug: "full-stack-ai-agent",
        title: "Full-Stack AI Agent",
        description:
        "An Ai-powered web application featuring tool calling, RAG and a responsive React interface.",
        stack: [
            "React",
            "TypeScript",
            "FastAPI",
            "Python",
            "Groq",
            "RAG",
            "Upstash Redis",
        ],
        github: 
        "https://github.com/Derobm-code/project_06_ai_agent_web_app",
        demo:
        "https://project-06-ai-agent-web-app-murex.vercel.app",
        challenge:
        "Deploying a locally developed AI agent as a public web applicaiton while managing dependencies, API communication, and usage limits.",
        solution:
        "I integrated Groq for cloud inference, implemented lightweight TF-IDF retrieval, connected a React frontend to FastAPI, and added Redis-backed rate limiting.",
        outcome:
        "I deployed and verified a working AI agent with seven Python tools, knowledge-base retrieval, visible execution traces, and API request protection.",
    },
];