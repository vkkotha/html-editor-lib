import Document from './template/document';
import $ from 'jquery';

export default class HarmonyTemplateEditor {
    constructor(options) {
        this.options = options;
        this.renderEl = $(this.options.renderTo);
        console.log(this.options.renderTo, this.renderEl.html());
    }

    newDocument() {
        var doc = new Document({
            title: 'Email template'
        });
        this.renderDocument(doc);
        return doc;
    }

    renderDocument(doc) {
        this.renderEl.empty();
        this.renderEl.append(`<div class="he_editor id="he_editor">
                <div class="canvas" id="canvas">
                    <iframe width="100%" height="100%" frameborder="0"></iframe>
                </div>
                <div class="panels" id="panels">
                    <ul>
                        <li><span class="panel_comp"><a href="">Text</a></span></li>
                        <li><span class="panel_comp"><a href="">Image</a></span></li>
                    </ul>
                </div>
                <div class="guides" id="guides">
                    <div class="guide-line guide-line-left">&nbsp;</div>
                    <div class="guide-line  guide-line-right">&nbsp;</div>
                </div>
            </div>`);
        var editFrameEl = $('div.he_editor div.edit_frame iframe', this.renderEl);
        var frameEl = editFrameEl[0];
        var iframeDoc = frameEl.contentDocument;
        iframeDoc.open();
        iframeDoc.write(doc.render());
        iframeDoc.close();
    }

    getDocument() {
        return this.renderEl.contents()[0].contentDocument;
    }
}