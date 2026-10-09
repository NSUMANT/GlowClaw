import {select,isCancel} from "@clack/prompts"
import chalk from "chalk"
import figlet from "figlet"
import { runCliMode } from "../modes/cli";

const BANNER_FONT="ANSI Shadow";
const SHADOW=chalk.hex("#5b4d9e");
const FACE=chalk.hex('#e8dcf8').bold;

function printBannerWithShadow(ascii: string) {

  const bannerLines = ascii.replace(/\s+$/, '').split('\n');
  const maxLen = Math.max(...bannerLines.map((l) => l.length), 0);
  const rowWidth = maxLen + 2;

  for (const line of bannerLines) {
    console.log(SHADOW(('  ' + line).padEnd(rowWidth)));
  }
  process.stdout.write(`\x1b[${bannerLines.length}A`);
  for (const line of bannerLines) {
    console.log(FACE(line.padEnd(rowWidth)));
  }
  console.log();
}

export async function runwakeup()
{
    let ascii:string;
    try{
        ascii=figlet.textSync("GlowClaw",{font:BANNER_FONT});
    }
    catch(error)
    {
        ascii=figlet.textSync("GlowClaw",{font:"Standard"});
    }
    printBannerWithShadow(ascii);
    const mode=await select({
        message:"which mode you want to proceed with?",
        options:[
            {value:'Cli',label:'CLI'},
            {value:"Telegram",label:'Telegram'},
            {value:"Exit",label:"exit"}]
    });

    if(isCancel(mode)|| mode==='Exit')
    {
        console.log(chalk.dim('\nGoodBye\n'));
        return;
    }
    if(mode === 'Cli')
    {
        await runCliMode()
    }
    else if(mode==='Telegram')
    {
        console.log(chalk.dim("starting telegram...."));
    }
}