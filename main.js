import { Terminal } from './terminal.js';

document.addEventListener('DOMContentLoaded', async function() {
    console.log("DOM loaded");

    try {
        const terminalContent = document.getElementById('terminal-content');
        const commandInput = document.getElementById('command-input');
        const terminal = new Terminal(terminalContent);
        console.log("Terminal instance created:", terminal);

        // Initialize empty command registry
        const commandRegistry = {};

        // Load configuration
        const { default: config } = await import('./content/commands/config.js');
        console.log("Config loaded:", config);

        // Load and merge command registry
        const { default: builtInCommands } = await import('./content/command-registry.js');
        Object.assign(commandRegistry, builtInCommands);
        console.log("Command registry initialized:", commandRegistry);

        // Dynamically import and register additional commands
        const commandModules = {
            about: import('./content/commands/about.js'),
            projects: import('./content/commands/projects.js'),
            contact: import('./content/commands/contact.js'),
            help: import('./content/commands/help.js')
        };

        for (const [name, modulePromise] of Object.entries(commandModules)) {
            try {
                const module = await modulePromise;
                commandRegistry[name] = module.default;
                console.log(`Command registered: ${name}`);
            } catch (error) {
                console.error(`Failed to load command ${name}:`, error);
            }
        }

        let commandHistory = [];
        let historyIndex = -1;

        // Initial message
        terminal.addOutput("Welcome to my terminal portfolio!", 'output');
        terminal.addOutput("Type 'help' to see available commands.", 'output');

        commandInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                const command = commandInput.value.trim();
                console.log("Command entered:", command);
                if (command) {
                    commandHistory.push(command);
                    historyIndex = commandHistory.length;
                }
                commandInput.value = '';
                processCommand(command);
            } else if (e.key === 'ArrowUp') {
                if (commandHistory.length > 0) {
                    if (historyIndex > 0) historyIndex--;
                    commandInput.value = commandHistory[historyIndex] || '';
                }
            } else if (e.key === 'ArrowDown') {
                if (commandHistory.length > 0) {
                    if (historyIndex < commandHistory.length - 1) historyIndex++;
                    commandInput.value = commandHistory[historyIndex] || '';
                }
            }
        });

        function processCommand(command) {
            console.log("Processing command:", command);
            console.log("Current config:", config);

            const parts = command.split(' ');
            const cmd = parts[0].toLowerCase();
            const args = parts.slice(1);
        
            if (!cmd.trim()) return;

            if (config.autoClear) {
                const children = terminalContent.children;
                while (children.length > 2) {
                    terminalContent.removeChild(children[2]);
                }
            }

            terminal.addOutput(`badukoos@fedora:$ ${command}`, 'command');

            if (commandRegistry[cmd]) {
                console.log(`Executing command: ${cmd}`);
                commandRegistry[cmd].execute(terminal, config, commandHistory, args);
            } else {
                terminal.addOutput(`Command not found: ${command}. Type 'help' for available commands.`, 'error');
            }
        }

    } catch (error) {
        console.error("Initialization error:", error);

        const terminalContent = document.getElementById('terminal-content');
        if (terminalContent) {
            terminalContent.textContent = "Terminal initialization failed. Please check console for errors.";
        }
    }
});