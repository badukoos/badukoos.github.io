export default {
    execute: (terminal) => {
        const projects = [
            {
                name: "Ansible - End-to-End Database Automation",
                details: [
                    "Streamlined SQL Server infrastructure with Ansible, ensuring fast, consistent, and error-free deployment and maintenance",
                    "Eliminated manual intervention by automating setup, configuration, backups, patching, and monitoring across all environments",
                    "Developed 150+ specialized modules for SQL Server and AWS specific configurations",
                    "Designed modular, reusable Ansible roles and playbooks for standardized, efficient execution of SQL Server tasks",
                    "Orchestrated complex automation pipelines using Jenkins, enabling seamless transitions between development, testing, and production",
                    "Integrated HashiCorp Vault for encrypted storage and retrieval of SQL Server secrets, ensuring compliance and security in automation workflows"
                ],
                accentColor: "#4fc3f7"  // Light blue
            },
            {
                name: "Idemchecks - A High-Performance Validation Framework",
                details: [
                    "Proactively tests SQL Server and Windows Server environments, ensuring operational integrity without relying on reactive alerts",
                    "Simple template structure with customizable options allows easy test definitions for various environments",
                    "Enforces consistent configurations across large infrastructures, reducing misconfigurations and streamlining management",
                    "Multi-threaded execution accelerates validation, delivering standardized, PowerShell-compatible outputs for seamless automation integration"
                ],
                accentColor: "#69f0ae"  // Mint green
            },
            {
                name: "EchoSnare - https://github.com/badukoos/echosnare",
                details: [
                    "OSINT tool built to track the amplification of propaganda or misinformation by fringe and coordinated websites that launder narratives across low-credibility sources",
                    "Trace the reuse of content from original articles",
                    "Identify narrative amplification through search engines (currently supporting DuckDuckGo and Google)",
                    "Extract and compare article content",
                    "Label and enrich source domain data",
                    "Analyze content reuse frequency and associated metadata"
                ],
                accentColor: "#ff8a65"  // Coral
            }
        ];

        terminal.addOutput(`
            <div style="
                font-size: 1.3em;
                font-weight: bold;
                color: #4fc3f7;
                margin-bottom: 1em;
                padding-bottom: 0.5em;
                border-bottom: 2px solid #424242;
                letter-spacing: 1px;
                display: flex;
                align-items: center;
                gap: 10px;
            ">
                <span style="
                    display: inline-block;
                    width: 12px;
                    height: 12px;
                    background: #4fc3f7;
                    border-radius: 50%;
                "></span>
                Featured Projects
            </div>
        `, 'html');

        projects.forEach(project => {
            terminal.addOutput(`
                <div style="
                    margin-bottom: 2em;
                    background: rgba(30, 30, 30, 0.5);
                    border-radius: 8px;
                    padding: 1.2em;
                    border-left: 4px solid ${project.accentColor};
                    transition: transform 0.2s;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
                ">
                    <div style="
                        font-size: 1.1em;
                        font-weight: bold;
                        color: ${project.accentColor};
                        margin-bottom: 0.8em;
                        display: flex;
                        align-items: center;
                    ">
                        <span style="
                            display: inline-block;
                            width: 12px;
                            height: 12px;
                            background: ${project.accentColor};
                            border-radius: 50%;
                            margin-right: 10px;
                        "></span>
                        ${project.name}
                    </div>
                    <ul style="
                        list-style: none;
                        padding-left: 0;
                        margin: 0;
                    ">
                        ${project.details.map(d => `
                            <li style="
                                margin-bottom: 0.6em;
                                padding-left: 1.5em;
                                position: relative;
                                line-height: 1.5;
                            ">
                                <span style="
                                    position: absolute;
                                    left: 0;
                                    color: ${project.accentColor};
                                ">▹</span>
                                ${d}
                            </li>
                        `).join('')}
                    </ul>
                </div>
            `, 'html');
        });

        terminal.addOutput(`
            <div style="
                margin-top: 1em;
                font-size: 0.9em;
                color: #b0bec5;
                text-align: right;
                font-style: italic;
            ">
                ${projects.length} significant projects showcased
            </div>
        `, 'html');
    },
    description: "View my projects"
};