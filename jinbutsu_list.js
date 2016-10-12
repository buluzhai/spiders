var configs = {
    domains: ["catalog.digitalarchives.tw"],
    scanUrls: ["http://catalog.digitalarchives.tw/Catalog/List.jsp?CID=99"],
    contentUrlRegexes: ["http://catalog.digitalarchives.tw/item/.*?/.*?/.*?/.*?\\.html.*"],
    //helperUrlRegexes: ["http://catalog.digitalarchives.tw/Catalog/List.jsp?CID=\\d+"], //可留空
    helperUrlRegexes: [], //可留空
    fields: [
        {
            // 第一个抽取项
            name: "title",
            selector: "//*[@id='expdetail']/h1", //默认使用XPath
            required: true //是否不能为空
        },
        {
            // 其他抽取项
            name: "img",
            selector: "//*[@id='DetailImageMaster']/div/a/img" 
        },
        {
            // 其他抽取项
            name: "metadata",
            selector: "//*[@id='DetailMetadata']/dl[1]" 
        },{
            // 其他抽取项
            name: "source_img",
            selector: "//*[@id='DetailImageMaster']/div/a/img" 
        }
    ]
};

configs.afterExtractField = function(fieldName, data, page) {
    if (fieldName == "img") {
        return cacheImg(data); // data是图片url, 返回可被云服务器处理的url
    }
    return data;
};

var crawler = new Crawler(configs);
crawler.start();
