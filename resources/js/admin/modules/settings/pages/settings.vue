<template>
<div class="side-body padding-top">
                    <h1 class="page-title">
        <i class="voyager-news"></i>
        Add Post
    </h1>
                    <div id="voyager-notifications"></div>
                    <div class="page-content container-fluid">
        <form class="form-edit-add" role="form" action="http://127.0.0.1:8001/admin/posts" method="POST" enctype="multipart/form-data">
            <!-- PUT Method if we are editing -->
                        <input type="hidden" name="_token" value="4ycC1ueTtCRilX4eYiD1elfQSoesqRMcugT4cq1d">

            <div class="row">
                <div class="col-md-8">
                    <!-- ### TITLE ### -->
                    <div class="panel">

                        <div class="panel-heading">
                            <h3 class="panel-title">
                                <i class="voyager-character"></i> Post Title
                                <span class="panel-desc"> The title for your post</span>
                            </h3>
                            <div class="panel-actions">
                                <a class="panel-action voyager-angle-down" data-toggle="panel-collapse" aria-hidden="true"></a>
                            </div>
                        </div>
                        <div class="panel-body">
                                                        <input type="text" class="form-control" id="title" name="title" placeholder="Title" value="">
                        </div>
                    </div>

                    <!-- ### CONTENT ### -->
                    <div class="panel">
                        <div class="panel-heading">
                            <h3 class="panel-title">Post Content</h3>
                            <div class="panel-actions">
                                <a class="panel-action voyager-resize-full" data-toggle="panel-fullscreen" aria-hidden="true"></a>
                            </div>
                        </div>

                        <div class="panel-body">
                                                                                    <div id="mceu_17" class="mce-tinymce mce-container mce-panel" hidefocus="1" tabindex="-1" role="application" style="visibility: hidden; border-width: 1px; width: 100%;"><div id="mceu_17-body" class="mce-container-body mce-stack-layout"><div id="mceu_18" class="mce-top-part mce-container mce-stack-layout-item mce-first"><div id="mceu_18-body" class="mce-container-body"><div id="mceu_19" class="mce-toolbar-grp mce-container mce-panel mce-first mce-last" hidefocus="1" tabindex="-1" role="group"><div id="mceu_19-body" class="mce-container-body mce-stack-layout"><div id="mceu_20" class="mce-container mce-toolbar mce-stack-layout-item mce-first mce-last" role="toolbar"><div id="mceu_20-body" class="mce-container-body mce-flow-layout"><div id="mceu_21" class="mce-container mce-flow-layout-item mce-first mce-btn-group" role="group"><div id="mceu_21-body"><div id="mceu_0" class="mce-widget mce-btn mce-menubtn mce-first mce-btn-has-text" tabindex="-1" aria-labelledby="mceu_0" role="button" aria-haspopup="true"><button id="mceu_0-open" role="presentation" type="button" tabindex="-1"><span class="mce-txt">Formats</span> <i class="mce-caret"></i></button></div><div id="mceu_1" class="mce-widget mce-btn" tabindex="-1" aria-pressed="false" role="button" aria-label="Bold"><button id="mceu_1-button" role="presentation" type="button" tabindex="-1"><i class="mce-ico mce-i-bold"></i></button></div><div id="mceu_2" class="mce-widget mce-btn" tabindex="-1" aria-pressed="false" role="button" aria-label="Italic"><button id="mceu_2-button" role="presentation" type="button" tabindex="-1"><i class="mce-ico mce-i-italic"></i></button></div><div id="mceu_3" class="mce-widget mce-btn mce-last" tabindex="-1" aria-pressed="false" role="button" aria-label="Underline"><button id="mceu_3-button" role="presentation" type="button" tabindex="-1"><i class="mce-ico mce-i-underline"></i></button></div></div></div><div id="mceu_22" class="mce-container mce-flow-layout-item mce-btn-group" role="group"><div id="mceu_22-body"><div id="mceu_4" class="mce-widget mce-btn mce-splitbtn mce-colorbutton mce-first" role="button" tabindex="-1" aria-haspopup="true" aria-label="Text color"><button role="presentation" hidefocus="1" type="button" tabindex="-1"><i class="mce-ico mce-i-forecolor"></i><span id="mceu_4-preview" class="mce-preview"></span></button><button type="button" class="mce-open" hidefocus="1" tabindex="-1"> <i class="mce-caret"></i></button></div><div id="mceu_5" class="mce-widget mce-btn mce-splitbtn mce-colorbutton mce-last" role="button" tabindex="-1" aria-haspopup="true" aria-label="Background color"><button role="presentation" hidefocus="1" type="button" tabindex="-1"><i class="mce-ico mce-i-backcolor"></i><span id="mceu_5-preview" class="mce-preview"></span></button><button type="button" class="mce-open" hidefocus="1" tabindex="-1"> <i class="mce-caret"></i></button></div></div></div><div id="mceu_23" class="mce-container mce-flow-layout-item mce-btn-group" role="group"><div id="mceu_23-body"><div id="mceu_6" class="mce-widget mce-btn mce-first" tabindex="-1" aria-pressed="false" role="button" aria-label="Align left"><button id="mceu_6-button" role="presentation" type="button" tabindex="-1"><i class="mce-ico mce-i-alignleft"></i></button></div><div id="mceu_7" class="mce-widget mce-btn" tabindex="-1" aria-pressed="false" role="button" aria-label="Align center"><button id="mceu_7-button" role="presentation" type="button" tabindex="-1"><i class="mce-ico mce-i-aligncenter"></i></button></div><div id="mceu_8" class="mce-widget mce-btn mce-last" tabindex="-1" aria-pressed="false" role="button" aria-label="Align right"><button id="mceu_8-button" role="presentation" type="button" tabindex="-1"><i class="mce-ico mce-i-alignright"></i></button></div></div></div><div id="mceu_24" class="mce-container mce-flow-layout-item mce-btn-group" role="group"><div id="mceu_24-body"><div id="mceu_9" class="mce-widget mce-btn mce-first" tabindex="-1" aria-pressed="false" role="button" aria-label="Bullet list"><button id="mceu_9-button" role="presentation" type="button" tabindex="-1"><i class="mce-ico mce-i-bullist"></i></button></div><div id="mceu_10" class="mce-widget mce-btn" tabindex="-1" aria-pressed="false" role="button" aria-label="Numbered list"><button id="mceu_10-button" role="presentation" type="button" tabindex="-1"><i class="mce-ico mce-i-numlist"></i></button></div><div id="mceu_11" class="mce-widget mce-btn" tabindex="-1" role="button" aria-label="Decrease indent"><button id="mceu_11-button" role="presentation" type="button" tabindex="-1"><i class="mce-ico mce-i-outdent"></i></button></div><div id="mceu_12" class="mce-widget mce-btn mce-last" tabindex="-1" role="button" aria-label="Increase indent"><button id="mceu_12-button" role="presentation" type="button" tabindex="-1"><i class="mce-ico mce-i-indent"></i></button></div></div></div><div id="mceu_25" class="mce-container mce-flow-layout-item mce-btn-group" role="group"><div id="mceu_25-body"><div id="mceu_13" class="mce-widget mce-btn mce-first" tabindex="-1" aria-pressed="false" role="button" aria-label="Insert/edit link"><button id="mceu_13-button" role="presentation" type="button" tabindex="-1"><i class="mce-ico mce-i-link"></i></button></div><div id="mceu_14" class="mce-widget mce-btn" tabindex="-1" aria-pressed="false" role="button" aria-label="Insert/edit image"><button id="mceu_14-button" role="presentation" type="button" tabindex="-1"><i class="mce-ico mce-i-image"></i></button></div><div id="mceu_15" class="mce-widget mce-btn mce-menubtn mce-last" tabindex="-1" aria-labelledby="mceu_15" role="button" aria-label="Table" aria-haspopup="true"><button id="mceu_15-open" role="presentation" type="button" tabindex="-1"><i class="mce-ico mce-i-table"></i> <i class="mce-caret"></i></button></div></div></div><div id="mceu_26" class="mce-container mce-flow-layout-item mce-last mce-btn-group" role="group"><div id="mceu_26-body"><div id="mceu_16" class="mce-widget mce-btn mce-first mce-last" tabindex="-1" role="button" aria-label="Source code"><button id="mceu_16-button" role="presentation" type="button" tabindex="-1"><i class="mce-ico mce-i-code"></i></button></div></div></div></div></div></div></div></div></div><div id="mceu_27" class="mce-edit-area mce-container mce-panel mce-stack-layout-item" hidefocus="1" tabindex="-1" role="group" style="border-width: 1px 0px 0px;"><iframe id="richtextbody_ifr" allowtransparency="true" title="Rich Text Area. Press ALT-F9 for menu. Press ALT-F10 for toolbar. Press ALT-0 for help" style="width: 100%; height: 600px; display: block;" frameborder="0"></iframe></div><div id="mceu_28" class="mce-statusbar mce-container mce-panel mce-stack-layout-item mce-last" hidefocus="1" tabindex="-1" role="group" style="border-width: 1px 0px 0px;"><div id="mceu_28-body" class="mce-container-body mce-flow-layout"><div id="mceu_29" class="mce-path mce-flow-layout-item mce-first"><div class="mce-path-item">&nbsp;</div></div><div id="mceu_30" class="mce-flow-layout-item mce-resizehandle"><i class="mce-ico mce-i-resize"></i></div><span id="mceu_31" class="mce-branding mce-widget mce-label mce-flow-layout-item mce-last"> Powered by <a href="https://www.tiny.cloud/?utm_campaign=editor_referral&amp;utm_medium=poweredby&amp;utm_source=tinymce" rel="noopener" target="_blank" role="presentation" tabindex="-1">Tiny</a></span></div></div></div></div><textarea class="form-control richTextBox" name="body" id="richtextbody" style="display: none;" aria-hidden="true">
</textarea>


                        </div>
                    </div><!-- .panel -->

                    <!-- ### EXCERPT ### -->
                    <div class="panel">
                        <div class="panel-heading">
                            <h3 class="panel-title">Excerpt <small>Small description of this post</small></h3>
                            <div class="panel-actions">
                                <a class="panel-action voyager-angle-down" data-toggle="panel-collapse" aria-hidden="true"></a>
                            </div>
                        </div>
                        <div class="panel-body">
                                                        <textarea class="form-control" name="excerpt"></textarea>
                        </div>
                    </div>

                    <div class="panel">
                        <div class="panel-heading">
                            <h3 class="panel-title">Additional Fields</h3>
                            <div class="panel-actions">
                                <a class="panel-action voyager-angle-down" data-toggle="panel-collapse" aria-hidden="true"></a>
                            </div>
                        </div>
                        <div class="panel-body">

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        </div>
                    </div>

                </div>
                <div class="col-md-4">
                    <!-- ### DETAILS ### -->
                    <div class="panel panel panel-bordered panel-warning">
                        <div class="panel-heading">
                            <h3 class="panel-title"><i class="icon wb-clipboard"></i> Post Details</h3>
                            <div class="panel-actions">
                                <a class="panel-action panel-collapsed voyager-angle-down" data-toggle="panel-collapse" aria-hidden="true"></a>
                            </div>
                        </div>
                        <div class="panel-body" style="display: none;">
                            <div class="form-group">
                                <label for="slug">URL slug</label>
                                                                <input type="text" class="form-control" id="slug" name="slug" placeholder="slug" data-slug-origin="title" data-slug-forceupdate="true" value="">
                            </div>
                            <div class="form-group">
                                <label for="status">Post Status</label>
                                <select class="form-control" name="status">
                                    <option value="PUBLISHED">published</option>
                                    <option value="DRAFT">draft</option>
                                    <option value="PENDING">pending</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="category_id">Post Category</label>
                                <select class="form-control" name="category_id">
                                                                            <option value="1">Category 1</option>
                                                                            <option value="2">Category 2</option>
                                                                    </select>
                            </div>
                            <div class="form-group">
                                <label for="featured">Featured</label>
                                <input type="checkbox" name="featured">
                            </div>
                        </div>
                    </div>

                    <!-- ### IMAGE ### -->
                    <div class="panel panel-bordered panel-primary">
                        <div class="panel-heading">
                            <h3 class="panel-title"><i class="icon wb-image"></i> Post Image</h3>
                            <div class="panel-actions">
                                <a class="panel-action panel-collapsed voyager-angle-down" data-toggle="panel-collapse" aria-hidden="true"></a>
                            </div>
                        </div>
                        <div class="panel-body" style="display: none;">
                                                        <input type="file" name="image">
                        </div>
                    </div>

                    <!-- ### SEO CONTENT ### -->
                    <div class="panel panel-bordered panel-info">
                        <div class="panel-heading">
                            <h3 class="panel-title"><i class="icon wb-search"></i> SEO Content</h3>
                            <div class="panel-actions">
                                <a class="panel-action voyager-angle-down panel-collapsed" data-toggle="panel-collapse" aria-hidden="true"></a>
                            </div>
                        </div>
                        <div class="panel-body" style="display: none;">
                            <div class="form-group">
                                <label for="meta_description">Meta Description</label>
                                                                <textarea class="form-control" name="meta_description"></textarea>
                            </div>
                            <div class="form-group">
                                <label for="meta_keywords">Meta Keywords</label>
                                                                <textarea class="form-control" name="meta_keywords"></textarea>
                            </div>
                            <div class="form-group">
                                <label for="seo_title">SEO Title</label>
                                                                <input type="text" class="form-control" name="seo_title" placeholder="SEO Title" value="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

                                        <button type="submit" class="btn btn-primary pull-right">
                      <i class="icon wb-plus-circle"></i> Create New Post                 </button>
                    </form>

        <iframe id="form_target" name="form_target" style="display:none"></iframe>
        <form id="my_form" action="http://127.0.0.1:8001/admin/upload" target="form_target" method="post" enctype="multipart/form-data" style="width:0;height:0;overflow:hidden">
            <input name="image" id="upload_file" type="file" onchange="$('#my_form').submit();this.value='';">
            <input type="hidden" name="type_slug" id="type_slug" value="posts">
            <input type="hidden" name="_token" value="4ycC1ueTtCRilX4eYiD1elfQSoesqRMcugT4cq1d">
        </form>
    </div>

    <div class="modal fade modal-danger" id="confirm_delete_modal">
        <div class="modal-dialog">
            <div class="modal-content">

                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                    <h4 class="modal-title"><i class="voyager-warning"></i> Are you sure</h4>
                </div>

                <div class="modal-body">
                    <h4>Are you sure you want to delete '<span class="confirm_delete_name"></span>'</h4>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-danger" id="confirm_delete">Yes, Delete it!</button>
                </div>
            </div>
        </div>
    </div>
    <!-- End Delete File Modal -->
            </div>
</template>
