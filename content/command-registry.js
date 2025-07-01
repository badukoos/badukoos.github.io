import config from './commands/config.js';

const commandRegistry = {
    clear: {
        execute: (terminal) => terminal.clear(),
        description: "Clear the terminal"
    },

    config: {
        execute: (terminal, _, __, args) => {
            if (args?.[0] === 'autoclear') {
                config.autoClear = !config.autoClear;
                terminal.addOutput(`Auto-clear ${config.autoClear ? 'enabled' : 'disabled'}`);
            } else {
                terminal.addOutput(`
                    <div style="
                        background: rgba(30, 30, 30, 0.5);
                        border-radius: 8px;
                        padding: 1.2em;
                        border-left: 4px solid #4fc3f7;
                    ">
                        <div style="
                            font-size: 1.1em;
                            color: #4fc3f7;
                            margin-bottom: 0.8em;
                            display: flex;
                            align-items: center;
                        ">
                            <span style="
                                display: inline-block;
                                width: 12px;
                                height: 12px;
                                background: #4fc3f7;
                                border-radius: 50%;
                                margin-right: 10px;
                            "></span>
                            Terminal Configuration
                        </div>
                        <div style="
                            display: grid;
                            grid-template-columns: max-content 1fr;
                            gap: 0.8em 1em;
                        ">
                            <div style="color: #a0a8c0;">Auto Clear:</div>
                            <div>${config.autoClear ? 'Enabled' : 'Disabled'}</div>
                            <div style="color: #a0a8c0;">Max History:</div>
                            <div>${config.maxHistory}</div>
                        </div>
                    </div>
                `, 'html');
            }
        },
        description: "Configure terminal settings"
    },

    history: {
        execute: (terminal, _, commandHistory) => {
            if (commandHistory.length === 0) {
                terminal.addOutput("No commands in history", 'output');
            } else {
                terminal.addOutput(`
                    <div style="
                        font-size: 1.2em;
                        font-weight: bold;
                        color: #4fc3f7;
                        margin-bottom: 0.5em;
                    ">
                        Command History
                    </div>
                `, 'html');

                commandHistory.forEach((cmd, idx) => {
                    terminal.addOutput(`${idx + 1}. ${cmd}`, 'output');
                });

                terminal.addOutput(`
                    <div style="
                        margin-top: 0.5em;
                        font-size: 0.9em;
                        color: #607d8b;
                        font-style: italic;
                    ">
                        ${commandHistory.length} commands in history
                    </div>
                `, 'html');
            }
        },
        description: "Show command history"
    }
};

export default commandRegistry;