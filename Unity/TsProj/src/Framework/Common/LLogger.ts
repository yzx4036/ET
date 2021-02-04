//引入source-map-support,babel-plugin-source-map-support插件

var path = require('./../../../node_modules/path/path');

import sourceMapSupport from 'source-map-support'
sourceMapSupport.install()

import moment from "moment";//好用的获取时间的包
export class LLogger {
    public static log:any;
    
    static Init() {

        //重新console.log()
        this.log = function (message: any, ...args: any[]) {
            //如果是生产环境下,不打印任何内容
            //create-react-app 这个脚手架生产的项目,
            //默认情况下,生产环境下process.env.NODE_ENV = "production", 
            //开发环境 process.env.NODE_ENV = "development"
            if (process.env.NODE_ENV === "production") {
                return;
            }
            let stackInfoStr = LLogger.stackInfo();
            //console.log()是可以控制输出内容的颜色的,这样的格式
            //console.log("%c这是要打印的内容","color:blue")
            //这里将时间戳,行数等信息打印成不同的颜色,内容为默认的白色
            let info = `%c[${moment().format("YYYY-MM-DD HH:mm:ss.SSS")}][log][${stackInfoStr.file}:${stackInfoStr.line} (${stackInfoStr.method})] %c`;
            console.log(info, "color: #48d1cc", "color: white", message, ...args);
        };

        // //重新console.info()
        // let loginfo = console.info;
        // console.info = function (message: any, ...args: any[]) {
        //     if (process.env.NODE_ENV === "production") {
        //         return;
        //     }
        //     let stackInfoStr = LLogger.stackInfo();
        //     let info = `%c[${moment().format("YYYY-MM-DD HH:mm:ss.SSS")}][info][${stackInfoStr.file}:${stackInfoStr.line} (${stackInfoStr.method})] %c`;
        //     loginfo(info, "color: #3ebe3e", "color: white", message, ...args);
        // };

        // //重新console.warn()
        // let warn = console.warn;
        // console.warn = function (message: any, ...args: any[]) {
        //     if (process.env.NODE_ENV === "production") {
        //         return;
        //     }
        //     let stackInfoStr = LLogger.stackInfo();
        //     let info = `%c[${moment().format("YYYY-MM-DD HH:mm:ss.SSS")}][warn][${stackInfoStr.file}:${stackInfoStr.line} (${stackInfoStr.method})] %c`;
        //     warn(info, "color: #dbd172", "color: #dbd172", message, ...args);
        // };
        //
        // //重新console.error()
        // let error = console.error;
        // console.error = function (message: any, ...args: any[]) {
        //     //如果要在生产环境下仍然打印error信息,则把这里的if判断去掉
        //     if (process.env.NODE_ENV === "production") {
        //         return;
        //     }
        //     let stackInfoStr = LLogger.stackInfo();
        //     //error默认就是红色,如果特意指定颜色反而会变成白色的,不知道为什么
        //     let info = `[${moment().format("YYYY-MM-DD HH:mm:ss.SSS")}][error][${stackInfoStr.file}:${stackInfoStr.line} (${stackInfoStr.method})] `;
        //     error(info, message, ...args);
        // };
    }

    //通过这个函数,来获取打印内容所在的文件,函数和行号
    //你可以使用下 console.log(new Error()) 来试验下,看下打印出来的内容,就是通过这个方法获取到文件信息的
    static stackInfo(num: number = 0) {
        var stackReg = /at\s+(.*)\s+\((.*):(\d*):(\d*)\)/i;
        var stackReg2 = /at\s+()(.*):(\d*):(\d*)/i;
        var stacklist = new Error().stack.split("\n").slice(3);//获取堆栈信息,其中包含文件,函数和行号
        var s = stacklist[num];
        var sp = stackReg.exec(s) || stackReg2.exec(s);
        var data: any = {};
        if (sp && sp.length === 5) {
            data.method = sp[1];
            data.path = sp[2];
            data.line = sp[3];
            data.pos = sp[4];
            data.file = path.basename(data.path);
        }
        return data;
    }
}