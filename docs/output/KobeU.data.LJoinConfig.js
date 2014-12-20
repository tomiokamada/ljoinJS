Ext.data.JsonP.KobeU_data_LJoinConfig({"tagname":"class","name":"KobeU.data.LJoinConfig","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"LJoinConfig.js","href":"LJoinConfig.html#KobeU-data-LJoinConfig"}],"aliases":{},"alternateClassNames":[],"extends":"Ext.Base","mixins":[],"requires":[],"uses":[],"members":[{"name":"alias","tagname":"cfg","owner":"KobeU.data.LJoinConfig","id":"cfg-alias","meta":{}},{"name":"model","tagname":"cfg","owner":"KobeU.data.LJoinConfig","id":"cfg-model","meta":{}},{"name":"modelID","tagname":"cfg","owner":"KobeU.data.LJoinConfig","id":"cfg-modelID","meta":{}},{"name":"selections","tagname":"cfg","owner":"KobeU.data.LJoinConfig","id":"cfg-selections","meta":{}},{"name":"setupFields","tagname":"method","owner":"KobeU.data.LJoinConfig","id":"method-setupFields","meta":{"private":true}}],"code_type":"ext_define","id":"class-KobeU.data.LJoinConfig","component":false,"superclasses":["Ext.Base"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Base<div class='subclass '><strong>KobeU.data.LJoinConfig</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/LJoinConfig.html#KobeU-data-LJoinConfig' target='_blank'>LJoinConfig.js</a></div></pre><div class='doc-contents'><p>LJoinConfig is used to specify join conditions of {KobeU.data.LJoinedManager}.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-alias' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KobeU.data.LJoinConfig'>KobeU.data.LJoinConfig</span><br/><a href='source/LJoinConfig.html#KobeU-data-LJoinConfig-cfg-alias' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KobeU.data.LJoinConfig-cfg-alias' class='name expandable'>alias</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'><p>The alias for this source element to be treated in the joined element.</p>\n</div><div class='long'><p>The alias for this source element to be treated in the joined element.</p>\n</div></div></div><div id='cfg-model' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KobeU.data.LJoinConfig'>KobeU.data.LJoinConfig</span><br/><a href='source/LJoinConfig.html#KobeU-data-LJoinConfig-cfg-model' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KobeU.data.LJoinConfig-cfg-model' class='name expandable'>model</a> : <span class=\"signature\"></span></div><div class='description'><div class='short'>The model class of the Ext.data.Model to be joined. ...</div><div class='long'><p>The model class of the Ext.data.Model to be joined. You have to specify modelID or model.</p>\n</div></div></div><div id='cfg-modelID' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KobeU.data.LJoinConfig'>KobeU.data.LJoinConfig</span><br/><a href='source/LJoinConfig.html#KobeU-data-LJoinConfig-cfg-modelID' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KobeU.data.LJoinConfig-cfg-modelID' class='name expandable'>modelID</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The name of the Ext.data.Model class to be joined. ...</div><div class='long'><p>The name of the Ext.data.Model class to be joined. You have to specify modelID or model.</p>\n</div></div></div><div id='cfg-selections' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KobeU.data.LJoinConfig'>KobeU.data.LJoinConfig</span><br/><a href='source/LJoinConfig.html#KobeU-data-LJoinConfig-cfg-selections' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KobeU.data.LJoinConfig-cfg-selections' class='name expandable'>selections</a> : Array<span class=\"signature\"></span></div><div class='description'><div class='short'>The list of filters. ...</div><div class='long'><p>The list of filters.</p>\n\n<p>In each filter, you can use the value of left tables as:</p>\n\n<pre><code>  { property: 'field1', value: { table: 'model0', property: 'field0'}}\n</code></pre>\n\n<p>The above means that field1 is filtered by the value of model0 on field0.\nYou can specify data type ('type' attribute), operator ('operator' attribtue), and so on.\nThe parameters are used to create KobeU.data.filter.* instances.\nIf you specify \"type\" as the type attribute, this library uses the filter class with the alias \"'filter.'+type\".</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-setupFields' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KobeU.data.LJoinConfig'>KobeU.data.LJoinConfig</span><br/><a href='source/LJoinConfig.html#KobeU-data-LJoinConfig-method-setupFields' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KobeU.data.LJoinConfig-method-setupFields' class='name expandable'>setupFields</a>( <span class='pre'>manager</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>setup fields ...</div><div class='long'><p>setup fields</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>manager</span> : <a href=\"#!/api/KobeU.data.LJoinManager\" rel=\"KobeU.data.LJoinManager\" class=\"docClass\">KobeU.data.LJoinManager</a><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});