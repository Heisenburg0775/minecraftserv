#!/usr/bin/env node
import ora from "ora"
import fetch from "node-fetch"
import boxen from "boxen"
import chalk from "chalk"
const Settings = {
    "Theme":"Default"
}

const argument = process.argv[2]
async function getDetails(name: string){
    if(name == undefined){
        console.log(chalk.red("Unknown Argument"))
    }
    
    const spinner = ora(`Fetching Information about ${name}`).start()
    let link1 = `https://eu.mc-api.net/v3/server/ping/${name}`
    let link2 = `https://api.mcsrvstat.us/2/${name}`
    try{
        const response = await fetch(link1);
        const data:any = await response.json()
        const response1 = await fetch(link2)
        const data2:any = await response1.json()
        if(data2.software == undefined){
            data2.software = "No Software Found"
        }
        spinner.stop()
            if(Settings.Theme == "Default"){
            console.log(boxen(chalk.yellow(`You Searched for "${name}" \nResults bellow:\n`) + "\n" + chalk.bold.cyan("General Information:\n\n") + chalk.green("Server Online: ") + data.online + "\n" + chalk.green("Server Ping(In MS): ") + chalk.yellow(data.took) + "\n" + chalk.green("Server Icon: ") + data.favicon + "\n" + chalk.green("Version: ") + data.version.name + "\n" + chalk.green("Protocol: ") + data.version.protocol + "\n" + chalk.green("Players: ") + data.players.online + chalk.red("/") + data.players.max + "\n" + chalk.green("Server Description: ") + data2.motd.clean + "\n" + chalk.green("Pinged host at: ") + data.fetch + "\n" + chalk.green("Server Software: ") + data2.software + "\n\n" + chalk.bold.cyan("Connection Information:\n\n") + chalk.green("Ip address: ") + data2.ip + "\n" + chalk.green("Port: ") + data2.port + "\n" + chalk.green("Hostname: ") + data2.hostname + "\n\n" + chalk.bold.cyan("Debug Information:\n\n") + chalk.green("Pinging: ") + data2.debug.ping + "\n" + chalk.green("Query: ") + data2.debug.query + "\n" + chalk.green("Service: ") + data2.debug.srv + "\n" + chalk.green("Qeury mismatch: ") + data2.debug.querymismatch + "\n" + chalk.green("Ip in Service: ") + data2.debug.ipinsrv + "\n" + chalk.green("Cname in Service: ") + data2.debug.cnameinsrv + "\n" + chalk.green("Animated MOTD: ") + data2.debug.animatedmotd + "\n" + chalk.green("Cache Time: ") + data2.debug.cachetime ,{borderColor:"blue", borderStyle:"round"}));
            }
            if(Settings.Theme == "Sythnwave"){
                console.log(boxen(chalk.blueBright(`You Searched for "${name}" \nResults bellow:\n`) + "\n" + chalk.bold.keyword("pink")("General Information:\n\n") + chalk.yellow("Server Online: ") + data.online + "\n" + chalk.yellow("Server Ping(In MS): ") + chalk.yellow(data.took) + "\n" + chalk.yellow("Server Icon: ") + data.favicon + "\n" + chalk.yellow("Version: ") + data.version.name + "\n" + chalk.yellow("Protocol: ") + data.version.protocol + "\n" + chalk.yellow("Players: ") + data.players.online + chalk.red("/") + data.players.max + "\n" + chalk.yellow("Server Description: ") + data2.motd.clean + "\n" + chalk.yellow("Pinged host at: ") + data.fetch + "\n" + chalk.yellow("Server Software: ") + data2.software + "\n\n" + chalk.bold.keyword("pink")("Connection Information:\n\n") + chalk.yellow("Ip address: ") + data2.ip + "\n" + chalk.yellow("Port: ") + data2.port + "\n" + chalk.yellow("Hostname: ") + data2.hostname + "\n\n" + chalk.bold.keyword("pink")("Debug Information:\n\n") + chalk.yellow("Pinging: ") + data2.debug.ping + "\n" + chalk.yellow("Query: ") + data2.debug.query + "\n" + chalk.yellow("Service: ") + data2.debug.srv + "\n" + chalk.yellow("Qeury mismatch: ") + data2.debug.querymismatch + "\n" + chalk.yellow("Ip in Service: ") + data2.debug.ipinsrv + "\n" + chalk.yellow("Cname in Service: ") + data2.debug.cnameinsrv + "\n" + chalk.yellow("Animated MOTD: ") + data2.debug.animatedmotd + "\n" + chalk.yellow("Cache Time: ") + data2.debug.cachetime ,{borderColor:"#800080", borderStyle:"round"}));
            }
            if(Settings.Theme == "Powershell"){
                console.log(boxen(chalk.gray(`You Searched for "${name}" \nResults bellow:\n`) + "\n" + chalk.bold.yellowBright("General Information:\n\n") + chalk.yellow("Server Online: ") + data.online + "\n" + chalk.yellow("Server Ping(In MS): ") + chalk.yellow(data.took) + "\n" + chalk.yellow("Server Icon: ") + data.favicon + "\n" + chalk.yellow("Version: ") + data.version.name + "\n" + chalk.yellow("Protocol: ") + data.version.protocol + "\n" + chalk.yellow("Players: ") + data.players.online + chalk.red("/") + data.players.max + "\n" + chalk.yellow("Server Description: ") + data2.motd.clean + "\n" + chalk.yellow("Pinged host at: ") + data.fetch + "\n" + chalk.yellow("Server Software: ") + data2.software + "\n\n" + chalk.bold.yellowBright("Connection Information:\n\n") + chalk.yellow("Ip address: ") + data2.ip + "\n" + chalk.yellow("Port: ") + data2.port + "\n" + chalk.yellow("Hostname: ") + data2.hostname + "\n\n" + chalk.bold.yellowBright("Debug Information:\n\n") + chalk.yellow("Pinging: ") + data2.debug.ping + "\n" + chalk.yellow("Query: ") + data2.debug.query + "\n" + chalk.yellow("Service: ") + data2.debug.srv + "\n" + chalk.yellow("Qeury mismatch: ") + data2.debug.querymismatch + "\n" + chalk.yellow("Ip in Service: ") + data2.debug.ipinsrv + "\n" + chalk.yellow("Cname in Service: ") + data2.debug.cnameinsrv + "\n" + chalk.yellow("Animated MOTD: ") + data2.debug.animatedmotd + "\n" + chalk.yellow("Cache Time: ") + data2.debug.cachetime ,{borderColor:"cyanBright", borderStyle:"round"}));
            }

    }catch(error){
        spinner.stop().fail()
        console.log(boxen(chalk.bold.bgRed("Error Occured!\n") + chalk.red("Reasons Can be:\n1)Not Connect to the internet.\n2)Invaild Arugument.\n3)Unknown Server hostname.\n4)Api server down.\n5)No Argument.") + "\n" + chalk.red("Error message:") + error+ "\n" + chalk.redBright("Usage: ") + chalk.red("minecraftserv <server address>") + "\n" + chalk.bold.redBright("Example: ") + chalk.red("minecraftserv mc.hypixel.net") + "\n\n" + chalk.italic.red("Visit https://github.com/hitontwo2/Minecraft-Server-CLI/issues, If think its an bug."),{borderColor:"redBright", borderStyle:"bold"}))
    }

}
getDetails(argument)