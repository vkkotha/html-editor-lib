//import Region from './region';
export default class Document {
    constructor(attributes) {
        this.attributes = attributes;
        this.regions = [];
    }

    render() {
        return `
        <head>
            <title>${this.attributes.title}</title>
            <!--[if !mso]><!-- -->
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <!--<![endif]-->
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <style type="text/css">
                body {
                    margin: 0;
                    padding: 0;
                    -webkit-text-size-adjust: 100%;
                    -ms-text-size-adjust: 100%;
                }
            
                table,
                td {
                    border-collapse: collapse;
                    mso-table-lspace: 0pt;
                    mso-table-rspace: 0pt;
                }
            
                img {
                    border: 0;
                    height: auto;
                    line-height: 100%;
                    outline: none;
                    text-decoration: none;
                    -ms-interpolation-mode: bicubic;
                }
            
                p {
                    display: block;
                    margin: 13px 0;
                }
            </style>
            ${this.attributes.styles ? `
            ${this.attributes.styles.map((style, i) => `
                <style type="text/css" id="style_${i}">
                    ${style.content}
                </style>
            `).join('')}` : ''}
            </style>
        </head>
        <body>
        </body>
        `;
    }

    addRegion() {
        //this.regions.push(new Region({}));
    }
}