#!/usr/bin/env node
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import ora from "ora";
import fetch from "node-fetch";
import boxen from "boxen";
import chalk from "chalk";
var Settings = {
    "Theme": "Default"
};
var argument = process.argv[2];
function getDetails(name) {
    return __awaiter(this, void 0, void 0, function () {
        var spinner, link1, link2, response, data, response1, data2, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!name == undefined) {
                        console.log(chalk.red("Unknown Argument"));
                    }
                    spinner = ora("Fetching Information about " + name).start();
                    link1 = "https://eu.mc-api.net/v3/server/ping/" + name;
                    link2 = "https://api.mcsrvstat.us/2/" + name;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 6, , 7]);
                    return [4 /*yield*/, fetch(link1)];
                case 2:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 3:
                    data = _a.sent();
                    return [4 /*yield*/, fetch(link2)];
                case 4:
                    response1 = _a.sent();
                    return [4 /*yield*/, response1.json()];
                case 5:
                    data2 = _a.sent();
                    if (data2.software == undefined) {
                        data2.software = "No Software Found";
                    }
                    spinner.stop();
                    if (Settings.Theme == "Default") {
                        console.log(boxen(chalk.yellow("You Searched for \"" + name + "\" \nResults bellow:\n") + "\n" + chalk.bold.cyan("General Information:\n\n") + chalk.green("Server Online: ") + data.online + "\n" + chalk.green("Server Ping(In MS): ") + chalk.yellow(data.took) + "\n" + chalk.green("Server Icon: ") + data.favicon + "\n" + chalk.green("Version: ") + data.version.name + "\n" + chalk.green("Protocol: ") + data.version.protocol + "\n" + chalk.green("Players: ") + data.players.online + chalk.red("/") + data.players.max + "\n" + chalk.green("Server Description: ") + data2.motd.clean + "\n" + chalk.green("Pinged host at: ") + data.fetch + "\n" + chalk.green("Server Software: ") + data2.software + "\n\n" + chalk.bold.cyan("Connection Information:\n\n") + chalk.green("Ip address: ") + data2.ip + "\n" + chalk.green("Port: ") + data2.port + "\n" + chalk.green("Hostname: ") + data2.hostname + "\n\n" + chalk.bold.cyan("Debug Information:\n\n") + chalk.green("Pinging: ") + data2.debug.ping + "\n" + chalk.green("Query: ") + data2.debug.query + "\n" + chalk.green("Service: ") + data2.debug.srv + "\n" + chalk.green("Qeury mismatch: ") + data2.debug.querymismatch + "\n" + chalk.green("Ip in Service: ") + data2.debug.ipinsrv + "\n" + chalk.green("Cname in Service: ") + data2.debug.cnameinsrv + "\n" + chalk.green("Animated MOTD: ") + data2.debug.animatedmotd + "\n" + chalk.green("Cache Time: ") + data2.debug.cachetime, { borderColor: "blue", borderStyle: "round" }));
                    }
                    if (Settings.Theme == "Sythnwave") {
                        console.log(boxen(chalk.blueBright("You Searched for \"" + name + "\" \nResults bellow:\n") + "\n" + chalk.bold.keyword("pink")("General Information:\n\n") + chalk.yellow("Server Online: ") + data.online + "\n" + chalk.yellow("Server Ping(In MS): ") + chalk.yellow(data.took) + "\n" + chalk.yellow("Server Icon: ") + data.favicon + "\n" + chalk.yellow("Version: ") + data.version.name + "\n" + chalk.yellow("Protocol: ") + data.version.protocol + "\n" + chalk.yellow("Players: ") + data.players.online + chalk.red("/") + data.players.max + "\n" + chalk.yellow("Server Description: ") + data2.motd.clean + "\n" + chalk.yellow("Pinged host at: ") + data.fetch + "\n" + chalk.yellow("Server Software: ") + data2.software + "\n\n" + chalk.bold.keyword("pink")("Connection Information:\n\n") + chalk.yellow("Ip address: ") + data2.ip + "\n" + chalk.yellow("Port: ") + data2.port + "\n" + chalk.yellow("Hostname: ") + data2.hostname + "\n\n" + chalk.bold.keyword("pink")("Debug Information:\n\n") + chalk.yellow("Pinging: ") + data2.debug.ping + "\n" + chalk.yellow("Query: ") + data2.debug.query + "\n" + chalk.yellow("Service: ") + data2.debug.srv + "\n" + chalk.yellow("Qeury mismatch: ") + data2.debug.querymismatch + "\n" + chalk.yellow("Ip in Service: ") + data2.debug.ipinsrv + "\n" + chalk.yellow("Cname in Service: ") + data2.debug.cnameinsrv + "\n" + chalk.yellow("Animated MOTD: ") + data2.debug.animatedmotd + "\n" + chalk.yellow("Cache Time: ") + data2.debug.cachetime, { borderColor: "#800080", borderStyle: "round" }));
                    }
                    if (Settings.Theme == "Powershell") {
                        console.log(boxen(chalk.gray("You Searched for \"" + name + "\" \nResults bellow:\n") + "\n" + chalk.bold.yellowBright("General Information:\n\n") + chalk.yellow("Server Online: ") + data.online + "\n" + chalk.yellow("Server Ping(In MS): ") + chalk.yellow(data.took) + "\n" + chalk.yellow("Server Icon: ") + data.favicon + "\n" + chalk.yellow("Version: ") + data.version.name + "\n" + chalk.yellow("Protocol: ") + data.version.protocol + "\n" + chalk.yellow("Players: ") + data.players.online + chalk.red("/") + data.players.max + "\n" + chalk.yellow("Server Description: ") + data2.motd.clean + "\n" + chalk.yellow("Pinged host at: ") + data.fetch + "\n" + chalk.yellow("Server Software: ") + data2.software + "\n\n" + chalk.bold.yellowBright("Connection Information:\n\n") + chalk.yellow("Ip address: ") + data2.ip + "\n" + chalk.yellow("Port: ") + data2.port + "\n" + chalk.yellow("Hostname: ") + data2.hostname + "\n\n" + chalk.bold.yellowBright("Debug Information:\n\n") + chalk.yellow("Pinging: ") + data2.debug.ping + "\n" + chalk.yellow("Query: ") + data2.debug.query + "\n" + chalk.yellow("Service: ") + data2.debug.srv + "\n" + chalk.yellow("Qeury mismatch: ") + data2.debug.querymismatch + "\n" + chalk.yellow("Ip in Service: ") + data2.debug.ipinsrv + "\n" + chalk.yellow("Cname in Service: ") + data2.debug.cnameinsrv + "\n" + chalk.yellow("Animated MOTD: ") + data2.debug.animatedmotd + "\n" + chalk.yellow("Cache Time: ") + data2.debug.cachetime, { borderColor: "cyanBright", borderStyle: "round" }));
                    }
                    return [3 /*break*/, 7];
                case 6:
                    error_1 = _a.sent();
                    spinner.stop().fail();
                    console.log(boxen(chalk.bold.bgRed("Error Occured!\n") + chalk.red("Reasons Can be:\n1)Not Connect to the internet.\n2)Invaild Arugument.\n3)Unknown Server hostname.\n4)Api server down.\n5)No Argument.") + "\n" + chalk.red("Error message:") + error_1 + "\n" + chalk.redBright("Usage: ") + chalk.red("minecraftserv <server address>") + "\n" + chalk.bold.redBright("Example: ") + chalk.red("minecraftserv mc.hypixel.net") + "\n\n" + chalk.italic.red("Visit https://github.com/hitontwo2/Minecraft-Server-CLI/issues, If think its an bug."), { borderColor: "redBright", borderStyle: "bold" }));
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    });
}
getDetails(argument);
