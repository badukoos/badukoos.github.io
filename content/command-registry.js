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
                            font-weight: bold;
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
                        background: rgba(30, 30, 30, 0.5);
                        border-radius: 8px;
                        padding: 1.2em;
                        margin-bottom: 1em;
                        border-left: 4px solid #4fc3f7;
                        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
                        position: relative;
                        overflow: hidden;
                    ">
                        <div style="
                            position: absolute;
                            top: 0;
                            right: 0;
                            width: 100px;
                            height: 100px;
                            background: radial-gradient(circle, rgba(79,195,247,0.1) 0%, transparent 70%);
                            z-index: 0;
                        "></div>

                        <div style="
                            position: relative;
                            z-index: 1;
                        ">
                            <div style="
                                font-size: 1.1em;
                                font-weight: bold;
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
                                Command History
                            </div>

                            <div style="
                                max-height: 300px;
                                overflow-y: auto;
                                padding-right: 8px;
                            ">
                                ${commandHistory.map((cmd, idx) => `
                                    <div style="
                                        padding: 4px 0;
                                        display: flex;
                                        &:hover {
                                            background: rgba(79,195,247,0.05);
                                        }
                                    ">
                                        <div style="
                                            color: #a0a8c0;
                                            min-width: 24px;
                                            margin-right: 8px;
                                        ">${idx + 1}.</div>
                                        <div style="color: #ffffff;">${cmd}</div>
                                    </div>
                                `).join('')}
                            </div>

                            <div style="
                                margin-top: 0.8em;
                                font-size: 0.85em;
                                color: #607d8b;
                                font-style: italic;
                                text-align: right;
                            ">
                                ${commandHistory.length} command${commandHistory.length !== 1 ? 's' : ''} in history
                            </div>
                        </div>
                    </div>
                `, 'html');
            }
        },
        description: "Show command history"
    }
};

export default commandRegistry;