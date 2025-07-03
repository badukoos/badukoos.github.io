export default {
    execute: (terminal) => {
        const skills = {
            name: "Key Skills",
            categories: [
                {
                    name: "Reliability & Performance Engineering",
                    items: [
                        "Database performance tuning: Refactoring queries, index optimization",
                        "High availability and disaster recovery on AWS (EC2 and RDS)",
                        "Query diagnostics using Query Store, DMVs, and Extended Events"
                    ]
                },
                {
                    name: "Automation & Infrastructure as Code",
                    items: [
                        "Infrastructure automation with Ansible and Terraform",
                        "CI/CD pipeline integration with Jenkins",
                        "Automated provisioning and rollback of environments"
                    ]
                },
                {
                    name: "Monitoring & Incident Response",
                    items: [
                        "Observability tools: New Relic, Datadog, SQL Sentry",
                        "Custom dashboards and alerts (NRQL, custom alerting strategies)",
                        "Incident response and postmortems with PagerDuty and Blameless"
                    ]
                },
                {
                    name: "Containerization & Testing",
                    items: [
                        "Database containerized with Docker for isolated testing",
                        "Automated test environments and rollback pipelines",
                        "Version-controlled database deployments"
                    ]
                },
                {
                    name: "Cloud Infrastructure & Cost Management",
                    items: [
                        "AWS resource optimization (EC2, RDS, S3, Aurora)",
                        "Cost tracking and analysis using AWS Cost Explorer",
                        "Resource tagging and rightsizing for budget control"
                    ]
                },
                {
                    name: "Security & Abuse Detection",
                    items: [
                        "Threat detection and response using Splunk",
                        "Worked with SOC teams to investigate and reduce incidents",
                        "Developed automated alerting and anomaly detection systems"
                    ]
                },
                {
                    name: "Collaboration & Documentation",
                    items: [
                        "Partnered with Dev, Ops, QA, and Security teams",
                        "Authored technical documentation and onboarding materials",
                        "Created recovery playbooks and automation workflows"
                    ]
                }
            ],
            accentColor: "#4fc3f7"
        };

        const tools = {
            name: "Tools & Technologies",
            items: [
                "AWS", "SQL Server", "Ansible", "Terraform",
                "Docker", "Jenkins", "Git/Bitbucket", "New Relic",
                "Datadog", "Splunk", "Blameless", "PowerShell",
                "Python", "Shell scripting"
            ],
            accentColor: "#69f0ae"
        };

        const strengths = {
            name: "Key Strengths",
            items: [
                "Expert Technical Proficiency",
                "Strategic Problem Solver",
                "Impactful Communicator",
                "Agile Operational Leader",
                "Dedicated Team Player"
            ],
            accentColor: "#ff8a65"  // Coral color
        };

        const summary = {
            name: "Summary",
            items: [
                "Database/Site Reliability Engineer with expertise in database optimization, infrastructure automation, and incident response. Proven ability to enhance system reliability, streamline deployments, and reduce operational overhead. Skilled in AWS infrastructure, Docker-based environments, and Infrastructure as Code with Ansible and Terraform. Strong collaborator with experience in security incident mitigation and creating clear, actionable documentation"
            ],
            accentColor: "#4fc3f7"
        };

        // Summary section
        terminal.addOutput(`
            <div style="
                margin-bottom: 2em;
                background: rgba(30, 30, 30, 0.5);
                border-radius: 8px;
                padding: 1.2em;
                border-left: 4px solid ${summary.accentColor};
                box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            ">
                <div style="
                    font-size: 1.1em;
                    font-weight: bold;
                    color: ${summary.accentColor};
                    margin-bottom: 0.8em;
                    display: flex;
                    align-items: center;
                ">
                    <span style="
                        display: inline-block;
                        width: 12px;
                        height: 12px;
                        background: ${summary.accentColor};
                        border-radius: 50%;
                        margin-right: 10px;
                    "></span>
                    ${summary.name}
                </div>

                <ul style="
                    list-style: none;
                    padding-left: 0;
                    margin: 0;
                ">
                    ${summary.items.map(item => `
                        <li style="
                            margin-bottom: 0.6em;
                            padding-left: 1.5em;
                            position: relative;
                            line-height: 1.5;
                        ">
                            <span style="
                                position: absolute;
                                left: 0;
                                color: ${summary.accentColor};
                            ">▹</span>
                            ${item}
                        </li>
                    `).join('')}
                </ul>
            </div>
        `, 'html');

        // Skills section
        terminal.addOutput(`
            <div style="
                margin-bottom: 2em;
                background: rgba(30, 30, 30, 0.5);
                border-radius: 8px;
                padding: 1.2em;
                border-left: 4px solid ${skills.accentColor};
                box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            ">
                <div style="
                    font-size: 1.1em;
                    font-weight: bold;
                    color: ${skills.accentColor};
                    margin-bottom: 0.8em;
                    display: flex;
                    align-items: center;
                ">
                    <span style="
                        display: inline-block;
                        width: 12px;
                        height: 12px;
                        background: ${skills.accentColor};
                        border-radius: 50%;
                        margin-right: 10px;
                    "></span>
                    ${skills.name}
                </div>

                <ul style="
                    list-style: none;
                    padding-left: 0;
                    margin: 0;
                ">
                    ${skills.categories.map(category => `
                        <li style="margin-bottom: 1em;">
                            <div style="
                                font-weight: bold;
                                color: ${skills.accentColor};
                                margin-bottom: 0.4em;
                            ">
                                ${category.name}
                            </div>
                            <ul style="
                                list-style: none;
                                padding-left: 1em;
                                margin: 0;
                            ">
                                ${category.items.map(item => `
                                    <li style="
                                        margin-bottom: 0.3em;
                                        padding-left: 1.5em;
                                        position: relative;
                                        line-height: 1.5;
                                        color: #e0e0e0;
                                    ">
                                        <span style="
                                            position: absolute;
                                            left: 0;
                                            color: ${skills.accentColor};
                                        ">▹</span>
                                        ${item}
                                    </li>
                                `).join('')}
                            </ul>
                        </li>
                    `).join('')}
                </ul>
            </div>
        `, 'html');

        // Tools & Technologies section
        terminal.addOutput(`
            <div style="
                margin-bottom: 2em;
                background: rgba(30, 30, 30, 0.5);
                border-radius: 8px;
                padding: 1.2em;
                border-left: 4px solid ${tools.accentColor};
                box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            ">
                <div style="
                    font-size: 1.1em;
                    font-weight: bold;
                    color: ${tools.accentColor};
                    margin-bottom: 0.8em;
                    display: flex;
                    align-items: center;
                ">
                    <span style="
                        display: inline-block;
                        width: 12px;
                        height: 12px;
                        background: ${tools.accentColor};
                        border-radius: 50%;
                        margin-right: 10px;
                    "></span>
                    ${tools.name}
                </div>

                <div style="
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
                    gap: 0.5em 1em;
                ">
                    ${tools.items.map(item => `
                        <div style="
                            display: flex;
                            align-items: center;
                        ">
                            <span style="
                                color: ${tools.accentColor};
                                margin-right: 0.5em;
                            ">•</span>
                            ${item}
                        </div>
                    `).join('')}
                </div>
            </div>
        `, 'html');

        // Strengths section
        terminal.addOutput(`
            <div style="
                margin-bottom: 2em;
                background: rgba(30, 30, 30, 0.5);
                border-radius: 8px;
                padding: 1.2em;
                border-left: 4px solid ${strengths.accentColor};
                box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            ">
                <div style="
                    font-size: 1.1em;
                    font-weight: bold;
                    color: ${strengths.accentColor};
                    margin-bottom: 0.8em;
                    display: flex;
                    align-items: center;
                ">
                    <span style="
                        display: inline-block;
                        width: 12px;
                        height: 12px;
                        background: ${strengths.accentColor};
                        border-radius: 50%;
                        margin-right: 10px;
                    "></span>
                    ${strengths.name}
                </div>

                <ul style="
                    list-style: none;
                    padding-left: 0;
                    margin: 0;
                ">
                    ${strengths.items.map(item => `
                        <li style="
                            margin-bottom: 0.6em;
                            padding-left: 1.5em;
                            position: relative;
                            line-height: 1.5;
                        ">
                            <span style="
                                position: absolute;
                                left: 0;
                                color: ${strengths.accentColor};
                            ">▹</span>
                            ${item}
                        </li>
                    `).join('')}
                </ul>
            </div>
        `, 'html');
    },
    description: "Learn about me"
};