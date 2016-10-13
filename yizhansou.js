var configs = {
    domains: ["v.yizhansou.com"],
    scanUrls: ["http://v.yizhansou.com/mv"],
    contentUrlRegexes: ["http://v.yizhansou.com/mv/\\d+"],
    helperUrlRegexes: ["http://v.yizhansou.com/mv"], //可留空
    fields: [
        {
            // 第一个抽取项
            name: "title",
            selector: "//h1", //默认使用XPath
            required: true //是否不能为空
        },
        {
            // 其他抽取项
            name: "thunder",
            selector: "//a[starts-with(@href,'thunder://')]/@href" 
        },
        {
            // 其他抽取项
            name: "ed2k",
            selector: "//a[starts-with(@href,'ed2k://')]/@href" 
        },
        {
            // 其他抽取项
            name: "magnet",
            selector: "//a[starts-with(@href,'magnet://')]/@href" 
        }
    ]
};

var crawler = new Crawler(configs);
crawler.start();
