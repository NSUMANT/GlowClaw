#!/usr/bin/env bun

import { Command } from "commander";
import { compileFunction } from "node:vm";
import { runWakeup } from "./tui/wakeup";


const program=new Command();

program
    .name("GlowClaw")
    .description("GlowClaw cli")
    .version("0.0.1");


program
    .command("wakeup")
    .description("show the banner and pick cli or telegram mode")
    .action(
    async()=>{
        await runWakeup()
    });
await program.parseAsync(process.argv);
