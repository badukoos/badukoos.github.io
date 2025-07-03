export default {
    execute: (terminal) => {
        const commands = [
            { name: "about", description: "Learn about me and my skills" },
            { name: "projects", description: "View my featured projects" },
            { name: "contact", description: "Get my contact information" },
            { name: "clear", description: "Clear the terminal screen" },
            { name: "config", description: "Display current terminal config" },
            { name: "help", description: "Display this help message" }
        ];

        terminal.addOutput(`
            <div style="
                font-size: 1.3em;
                font-weight: bold;
                color: #ffffff;
                margin-bottom: 1em;
                padding-bottom: 0.5em;
                border-bottom: 2px solid #424242;
                letter-spacing: 1px;
            ">
                Available Commands
            </div>
            ${commands.map(cmd => `
                <div style="
                    margin-bottom: 1em;
                    background: rgba(30, 30, 30, 0.5);
                    border-radius: 8px;
                    padding: 1em;
                    border-left: 4px solid #4fc3f7;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
                    display: grid;
                    grid-template-columns: 120px 1fr;
                    gap: 1em;
                    align-items: center;
                ">
                    <div style="font-weight: bold; color: #4fc3f7;">
                        ${cmd.name}
                    </div>
                    <div style="color: #e0e0e0;">
                        ${cmd.description}
                    </div>
                </div>
            `).join('')}
            <div style="
                margin-top: 1em;
                font-size: 0.9em;
                color: #b0bec5;
                font-style: italic;
            ">
                Type any command and ↩ to execute it
            </div>
        `, 'html');
    },
    description: "Display available commands"
};