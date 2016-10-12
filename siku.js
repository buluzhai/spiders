var configs = {
    domains: ["kanji.zinbun.kyoto-u.ac.jp"],
    scanUrls: ["http://kanji.zinbun.kyoto-u.ac.jp/db-machine/ShikoTeiyo/"],
    contentUrlRegexes: ["http://kanji.zinbun.kyoto-u.ac.jp/db-machine/ShikoTeiyo/\\d+\\.html"],
    helperUrlRegexes: ["http://kanji.zinbun.kyoto-u.ac.jp/db-machine/ShikoTeiyo/"], //可留空
    fields: [
        {
            // 第一个抽取项
            name: "subtitle",
            selector: "/html/body/font", //默认使用XPath
            required: true //是否不能为空
        },
        {
            // 其他抽取项
            name: "title",
            selector: "/html/body/h2" 
        },
        {
            // 其他抽取项
            name: "content",
            selector: "/html/body/p" 
        },
        {
            // 其他抽取项
            name: "text2",
            selector: "/html/body/blockquote" 
        }
    ]
};

var crawler = new Crawler(configs);
crawler.start();
