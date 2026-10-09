import chalk from "chalk";
import {select,isCancel} from "@clack/prompts"
import { runAgentMode } from "./agent/orchestrator";
import { runAskMode } from "./ask/orchestrator";

export async function runCliMode() {
    while(true)
    {
        const mode=await select({
            message:"Choose Cli sub-mode",
            options:[
                {value:"Agent",label:"Agent Mode"},
                {value:"Plan",label:"Plan mode"},
                {value:"ask",label:"Ask Mode"},
                {value:"back",label:"Back to main menu"},
            ]
        });
        if(isCancel(mode) || mode === "back")return;
        if(mode==="Agent")
        {
           await runAgentMode();
        }
        if(mode==="Plan")
        {
            console.log("Plan")
        }
        if(mode==='ask')
        {
            await runAskMode()
        }
        if(mode!=='Agent' && mode!=='Plan' && mode!=='ask')
        {
            console.log(chalk.yellow("\nThat mode is not implemented yet\n"));
        }
    }
}
