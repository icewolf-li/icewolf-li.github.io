var now1 = new Date();

function createtime1() {
    var grt = new Date("03/25/2022 00:00:00"); //此处修改你的建站时间或者网站上线时间
    now1.setTime(now1.getTime() + 250);
    var days = (now1 - grt) / 1000 / 60 / 60 / 24;
    var dnum = Math.floor(days);

    var ascll = [
        `欢迎来到Icewolf_li🌭の狗窝!`,
        `Future is now 🍭🍭🍭`,
        `
        
        _____     ____    _____   ___       ___     ____     _____       _________                 _____        _____  
        (_   _)   / ___)  / ___/  (  (       )  )   / __ \   (_   _)     (_   _____)               (_   _)      (_   _) 
          | |    / /     ( (__     \  \  _  /  /   / /  \ \    | |         ) (___                    | |          | |   
          | |   ( (       ) __)     \  \/ \/  /   ( ()  () )   | |        (   ___)                   | |          | |   
          | |   ( (      ( (         )   _   (    ( ()  () )   | |   __    ) (                       | |   __     | |   
         _| |__  \ \___   \ \___     \  ( )  /     \ \__/ /  __| |___) )  (   )       ___________  __| |___) )   _| |__ 
        /_____(   \____)   \____\     \_/ \_/       \____/   \________/    \_/       |___________| \________/   /_____( 
                                                                                                                          
                                              
`,
        "啊呜~~嗷嗷",
        dnum,
        "汪汪！！",
        "©2022 By icewolf-li",
    ];

    setTimeout(
        console.log.bind(
            console,
            `\n%c${ascll[0]} %c ${ascll[1]} %c ${ascll[2]} %c${ascll[3]}%c ${ascll[4]}%c ${ascll[5]}\n\n%c ${ascll[6]}\n`,
            "color:#39c5bb",
            "",
            "color:#39c5bb",
            "color:#39c5bb",
            "",
            "color:#39c5bb",
            ""
        )
    );
}

createtime1();

function createtime2() {
    var ascll2 = [`NCC2-036`, `调用前置摄像头拍照成功，识别为「哈士奇」`, `Photo captured: `, ` 🤪 `];

    setTimeout(
        console.log.bind(
            console,
            `%c ${ascll2[0]} %c ${ascll2[1]} %c \n${ascll2[2]} %c\n${ascll2[3]}`,
            "color:white; background-color:#10bcc0",
            "",
            "",
            'background:url("https://unpkg.zhimg.com/anzhiyu-assets@latest/image/common/tinggge.gif") no-repeat;font-size:450%'
        )
    );

    setTimeout(console.log.bind(console, "%c WELCOME %c 欢迎光临，犬友", "color:white; background-color:#23c682", ""));

    setTimeout(
        console.warn.bind(
            console,
            "%c ⚡ Powered by icewolf-li🌭 %c 你正在访问icewolf-liの狗窝",
            "color:white; background-color:#f0ad4e",
            ""
        )
    );

    setTimeout(console.log.bind(console, "%c W23-12 %c 系统监测到你已打开控制台", "color:white; background-color:#4f90d9", ""));
    setTimeout(
        console.warn.bind(console, "%c S013-782 %c 你现在正处于监控中", "color:white; background-color:#d9534f", "")
    );
}
createtime2();

// 重写console方法
console.log = function () { };
console.error = function () { };
console.warn = function () { };