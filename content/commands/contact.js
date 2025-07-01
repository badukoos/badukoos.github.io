export default {
    execute: (terminal) => {
        terminal.addOutput(`
            <div style="
                background: rgba(30, 30, 30, 0.5);
                border-radius: 8px;
                padding: 1.2em;
                margin-bottom: 1em;
                border-left: 4px solid #4a90e2;
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
                    background: radial-gradient(circle, rgba(74,144,226,0.1) 0%, transparent 70%);
                    z-index: 0;
                "></div>

                <div style="
                    position: relative;
                    z-index: 1;
                ">
                    <div style="
                        font-size: 1.1em;
                        font-weight: bold;
                        color: #4a90e2;
                        margin-bottom: 0.8em;
                        display: flex;
                        align-items: center;
                    ">
                        <span style="
                            display: inline-block;
                            width: 12px;
                            height: 12px;
                            background: #4a90e2;
                            border-radius: 50%;
                            margin-right: 10px;
                        "></span>
                        Contact Information
                    </div>

                    <div style="
                        display: grid;
                        grid-template-columns: max-content 1fr;
                        gap: 0.8em 1em;
                        align-items: center;
                    ">
                        <div style="color: #a0a8c0; font-weight: 500;">Email:</div>
                        <div style="color: #ffffff;">
                            <a href="mailto:agopinath@protonmail.com" style="color: #4a90e2; text-decoration: none; transition: all 0.2s;">
                                agopinath@protonmail.com
                                <span style="margin-left: 5px; font-size: 0.8em;">↗</span>
                            </a>
                        </div>

                        <div style="color: #a0a8c0; font-weight: 500;">GitHub:</div>
                        <div style="color: #ffffff;">
                            <a href="https://github.com/badukoos" target="_blank" style="color: #4a90e2; text-decoration: none; transition: all 0.2s;">
                                github.com/badukoos
                                <span style="margin-left: 5px; font-size: 0.8em;">↗</span>
                            </a>
                        </div>

                        <div style="color: #a0a8c0; font-weight: 500;">LinkedIn:</div>
                        <div style="color: #777777;">Not currently available</div>
                    </div>
                </div>
            </div>

            <div style="
                font-size: 0.85em;
                color: #607d8b;
                text-align: center;
                margin-top: 1em;
                font-style: italic;
            ">
                Feel free to reach out for any questions
            </div>
        `, 'html');
    },
    description: "Contact me"
};