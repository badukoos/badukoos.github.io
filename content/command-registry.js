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
                terminal.addOutput(`
                    <div style="
                        background: rgba(30, 30, 30, 0.5);
                        border-radius: 8px;
                        padding: 1em;
                        border-left: 4px solid #4fc3f7;
                        margin-bottom: 1em;
                    ">
                        <div style="
                            display: flex;
                            align-items: center;
                            gap: 0.5em;
                            color: #e0e0e0;
                        ">
                            <span style="
                                display: inline-block;
                                width: 12px;
                                height: 12px;
                                background: #4fc3f7;
                                border-radius: 50%;
                            "></span>
                            Auto-clear ${config.autoClear ? '<span style="color: #4fc3f7;">enabled</span>' : '<span style="color: #ff5252;">disabled</span>'}
                        </div>
                    </div>
                `, 'html');
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
                            <div>${config.autoClear ? '<span style="color: #4fc3f7;">Enabled</span>' : '<span style="color: #ff5252;">Disabled</span>'}</div>
                        </div>
                    </div>
                `, 'html');

                terminal.addOutput(`
                    <div style="
                        margin-top: 1em;
                        font-size: 0.9em;
                        color: #b0bec5;
                        text-align: left;
                        font-style: italic;
                    ">
                        To toggle auto clear option, type and ↩ <span style="font-weight: bold;">config autoclear</span>
                    </div>
                `, 'html');
            }
        },
        description: "Configure terminal settings"
    }

};

export default commandRegistry;