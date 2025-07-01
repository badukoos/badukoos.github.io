export default {
    execute: (terminal) => {
        const skills = [
            {
                name: "My skills include but are not limited to",
                details: [
                    "Database Performance Optimization",
                    "Automation & Infrastructure as Code (IaC)",
                    "Containerization",
                    "Cloud Infrastructure Management",
                    "SQL Server Administration",
                    "Security & Compliance",
                    "Standardization & Scalability",
                    "Collaboration & Knowledge Sharing"
                ],
                accentColor: "#82b1ff"
            }
        ];

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
                "Technical expertise",
                "Strong problem-solving skills",
                "Effective communication",
                "Adaptability",
                "Team player"
            ],
            accentColor: "#ff8a65"  // Coral color
        };

        // Clean Summary section (no colors)
        terminal.addOutput(`
            <div style="
                margin-bottom: 2em;
                line-height: 1.6;
                color: #e0e0e0;
                background: rgba(30, 30, 30, 0.5);
                border-radius: 8px;
                padding: 1.2em;
                border-left: 4px solid #4a90e2;
                box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            ">
                With 10 years in database and site reliability engineering,
                I build scalable, resilient systems across diverse domains.
                I thrive on solving complex challenges in high-demand environments
                with a hands-on, adaptive approach.
            </div>
        `, 'html');

        // Skills section
        terminal.addOutput(`
            <div style="
                margin-bottom: 2em;
                background: rgba(30, 30, 30, 0.5);
                border-radius: 8px;
                padding: 1.2em;
                border-left: 4px solid ${skills[0].accentColor};
                box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            ">
                <div style="
                    font-size: 1.1em;
                    font-weight: bold;
                    color: ${skills[0].accentColor};
                    margin-bottom: 0.8em;
                    display: flex;
                    align-items: center;
                ">
                    <span style="
                        display: inline-block;
                        width: 12px;
                        height: 12px;
                        background: ${skills[0].accentColor};
                        border-radius: 50%;
                        margin-right: 10px;
                    "></span>
                    ${skills[0].name}
                </div>

                <ul style="
                    list-style: none;
                    padding-left: 0;
                    margin: 0;
                ">
                    ${skills[0].details.map(d => `
                        <li style="
                            margin-bottom: 0.6em;
                            padding-left: 1.5em;
                            position: relative;
                            line-height: 1.5;
                        ">
                            <span style="
                                position: absolute;
                                left: 0;
                                color: ${skills[0].accentColor};
                            ">▹</span>
                            ${d}
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