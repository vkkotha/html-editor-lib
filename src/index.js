import HarmonyTemplateEditor from './editor';
import './index.scss';

var editor = new HarmonyTemplateEditor({
    renderTo: '#editor'
});

var doc = editor.newDocument();
doc.addRegion();

/*
# Open document
doc = editor.openDocumentFromElement('doc');
doc = editor.openDocument('<ht-region><ht-row><ht-column></ht-column></ht-row></ht-region>');
doc = editor.newDocument();

# Add functions
region = doc.addRegion(location);
row = region.addRow(location);
columns[] = row.setColumnLayout(columnLayout);
column.addComponent(location);

# Remove functions
doc.removeRegion(location);
region.removeRow(location);
column.removeComponent(location);

# Move functions
region.move(toLocation);
row.move(toLocation);
component.move(toColumn, toLocation);
*/

