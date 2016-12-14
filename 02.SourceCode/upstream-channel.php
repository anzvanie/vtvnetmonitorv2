<?php include_once "header.php";?>

<div id="section-controls">
    <div id="titleSearchForm" class="section-title" data-toggle="collapse" data-target="#toggleSearchForm">
        Upstream Channel Monitor Search Form
        <i class="fa fa-plus toggle-icon toggle-icon-open pull-right" aria-hidden="true"></i>
        <i class="fa fa-minus toggle-icon toggle-icon-close pull-right" aria-hidden="true"></i>
    </div>
    <div id="toggleSearchForm" class="section-body collapse in mgr-t-10">
        <div class="entry-content">
            <div class="row">
                <div class="col-md-12">
                    <div class="col-md-6 left-entry">
                        <div class="form-group">
                            <div><strong>CMTS</strong></div>
                            <div class="row">
                                <div class="col-md-5">
                                    <select name="cmtsSeclect" id="cmtsSelect" class="form-control">
                                        <option value="1">1</option>
                                        <option value="1">2</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div><strong>Merchant</strong></div>
                            <div class="row">
                                <div class="col-md-5">
                                    <select name="merchantSelect" id="merchantSelect" class="form-control">
                                        <option value="1">1</option>
                                        <option value="1">2</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div><strong>Fec Corrected</strong></div>
                            <div class="row">
                                <div class="col-md-5">
                                    <input type="text" value="" placeholder="Min" name="minFecCorrected" class="form-control">
                                </div>
                                <div class="col-md-5">
                                    <input type="text" value="" placeholder="Max" name="maxFecCorrected" class="form-control">
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div><strong>Fec Incorrected</strong></div>
                            <div class="row">
                                <div class="col-md-5">
                                    <input type="text" value="" placeholder="Min" name="minFecInCorrected" class="form-control">
                                </div>
                                <div class="col-md-5">
                                    <input type="text" value="" placeholder="Max" name="maxFecInCorrected" class="form-control">
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div><strong>SNR</strong></div>
                            <div class="row">
                                <div class="col-md-5">
                                    <input type="text" value="" placeholder="Min" name="minSnr" class="form-control">
                                </div>
                                <div class="col-md-5">
                                    <input type="text" value="" placeholder="Max" name="maxSnr" class="form-control">
                                </div>
                            </div>
                        </div>
                    </div><!-- end .left-entry -->

                    <div class="col-md-6 right-entry">
                        <div class="form-group">
                            <div><strong>Alarm Only</strong></div>
                            <div class="row">
                                <div class="col-md-5">
                                    <input type="checkbox" name="alarmObly" />
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div><strong>TxPower</strong></div>
                            <div class="row">
                                <div class="col-md-5">
                                    <input type="text" value="" placeholder="Min" name="minTxPower" class="form-control">
                                </div>
                                <div class="col-md-5">
                                    <input type="text" value="" placeholder="Max" name="maxTxPower" class="form-control">
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div><strong>RxPower</strong></div>
                            <div class="row">
                                <div class="col-md-5">
                                    <input type="text" value="" placeholder="Min" name="minRxPower" class="form-control">
                                </div>
                                <div class="col-md-5">
                                    <input type="text" value="" placeholder="Max" name="maxRxPower" class="form-control">
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div><strong>Mer</strong></div>
                            <div class="row">
                                <div class="col-md-5">
                                    <input type="text" value="" placeholder="Min" name="minMer" class="form-control">
                                </div>
                                <div class="col-md-5">
                                    <input type="text" value="" placeholder="Max" name="maxMer" class="form-control">
                                </div>
                            </div>
                        </div>
                    </div><!-- end .right-entry -->
                </div>
            </div>
        </div><!-- end .entry-content -->

        <div class="section-footer">
            <button type="submit" class="btn btn-default"><i class="fa fa-search" aria-hidden="true"></i> Search</button>
            <button type="button" class="btn btn-default btn-sm">Export Page</button>
            <button type="button" class="btn btn-default btn-sm">Export All</button>
        </div>
    </div>
</div>

<div class="tableContent jumbotron">
    <table id="upstreamChannelTable" class="table table-striped table-bordered" cellspacing="0" width="100%">
        <thead>
        <tr>
            <th></th>
            <th>Description</th>
            <th>Alias</th>
            <th>Merchants</th>
            <th>SNR</th>
            <th>Fec</th>
            <th>FecUn</th>
            <th>TxPw</th>
            <th>Act</th>
            <th>Total</th>
            <th>MER</th>
        </tr>
        </thead>
        <tfoot>
        <tr>
            <th></th>
            <th class="hasInput">Description</th>
            <th class="hasInput">Alias</th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
        </tr>
        </tfoot>
    </table>
</div>

<?php include_once "footer.php";?>