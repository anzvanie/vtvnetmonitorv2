<?php include_once "header.php";?>

<p id="controls">
    <button type="button" class="btn btn-default btn-sm" data-toggle="modal" data-target="#add-cmts">
        <i class="fa fa-plus" aria-hidden="true"></i> Add CMTS
    </button>
</p>

<div class="tableContent jumbotron">
    <table id="cmtsTable" class="table table-striped table-bordered" cellspacing="0" width="100%">
        <thead>
        <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Host</th>
            <th>Community</th>
            <th>Description</th>
            <th>Enabled</th>
        </tr>
        </thead>
        <tfoot>
        <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Host</th>
            <th>Community</th>
            <th>Description</th>
            <th>Enabled</th>
        </tr>
        </tfoot>
        <tbody>

        </tbody>
    </table>
</div>

<!-- Modal -->
<div id="add-cmts" class="modal fade" role="dialog">
    <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Add New CMTS</h4>
            </div>
            <div class="modal-body">
                <form class="form-horizontal">
                    <div class="form-group">
                        <label class="control-label col-sm-2" for="cmts-title">Title*</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="cmts-title" placeholder="Enter title" required>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-sm-2" for="cmts-host">Host*</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="cmts-host" placeholder="Enter host" required>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-sm-2" for="cmts-community">Community*</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="cmts-community" placeholder="Enter community" required>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-sm-2" for="cmts-description">Description</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="cmts-description" placeholder="Enter description">
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-offset-2 col-sm-10">
                            <div class="checkbox">
                                <label><input type="checkbox"> Enable</label>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-offset-2 col-sm-10">
                            <button type="submit" class="btn btn-default"><i class="fa fa-floppy-o" aria-hidden="true"></i> Save</button>
                            <button type="button" class="btn btn-default" data-dismiss="modal"><i class="fa fa-times" aria-hidden="true"></i> Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
            <!--<div class="modal-footer">-->
            <!--<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>-->
            <!--</div>-->
        </div>

    </div>
</div>

<?php include_once "footer.php";?>