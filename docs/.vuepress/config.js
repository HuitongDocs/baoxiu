module.exports = {
    base: '/baoxiu/',
    title: '叮当报修帮助文档',
    description: '快速开始指南',
    themeConfig: {
        docsDir: 'docs',
        editLinks: false,
        editLinkText: '在 GitHub 上编辑此页面',
        repo: 'https://github.com/HuitongDocs/baoxiu',
        lastUpdated: '上次更新',
        sidebar: [
            './',
            './guide/Repair',
            './guide/Create',
            './guide/Applets',
            './guide/Web',
            {
                title:'FAQ',
                children: [
                    ['./guide/FAQ/GetAssetQRCode', '如何获取资产二维码？'],
                    ['./guide/FAQ/UseTheOriginalAssetCode', '原有的资产编码是否可以使用？'],
                    ['./guide/FAQ/CustomLabel', '如何定制资产标签？']
                ]
            }
        ]
    }
}
