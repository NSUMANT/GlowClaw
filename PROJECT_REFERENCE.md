# PROJECT REFERENCE: GlowClaw

## 🔑 Overview
This repository is named `glowclaw` and appears to be a Command Line Interface (CLI) tool.

## ⚙️ Dependencies & Tools
The project relies on the following key dependencies:
- **`ai`**: A significant dependency, indicating integration with AI services.
- **`ai/ai.config.ts`**: This file is responsible for creating an AI client via the `@openrouter/ai-sdk-provider` utility. It reads the API key and an optional default model ID (`openrouter/free`) from environment variables to initialize the agent model.
- **`commander`** and **`figlet`**: Used for CLI structure and branding/banner display.
- **`chalk`**: Used for colored terminal output.

## 💻 Code Structure
- **Main Entry Point (`index.ts`):**
    - This file initializes and runs the `commander` program.
    - It defines the main command, `Glowclaw`, and subcommands, such as `wakeup`.
- **Configuration (`tsconfig.json`):**
    - The project is configured for modern JavaScript/TypeScript standards (`"target": "ESNext"`, `"moduleResolution": "bundler"`).
    - Strictness is enforced (`"strict": true`), including checks for `noUncheckedIndexedAccess` and `noImplicitOverride`.

## 🧭 Usage Notes
- The primary command provided is `Glowclaw wakeup`, which calls the `runwakeup()` function from `./tui/wakeup`.
- The project utilizes `bun` as the language runtime, as indicated by `#!/usr/bin/env bun` in `index.ts`.