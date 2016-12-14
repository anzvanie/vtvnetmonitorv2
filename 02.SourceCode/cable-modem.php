<?php include_once "header.php";?>

    <div id="section-controls">
        <div id="titleSearchForm" class="section-title" data-toggle="collapse" data-target="#toggleSearchForm">
            Cable Modem Monitor Search
            <i class="fa fa-plus toggle-icon toggle-icon-open pull-right" aria-hidden="true"></i>
            <i class="fa fa-minus toggle-icon toggle-icon-close pull-right" aria-hidden="true"></i>
        </div>
        <div id="toggleSearchForm" class="section-body collapse in mgr-t-10">
            <div class="entry-content">
                <div class="row">
                    <div class="col-md-12">
                        <div class="col-md-6 left-entry">
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
                                <div><strong>Up SNR</strong></div>
                                <div class="row">
                                    <div class="col-md-5">
                                        <input type="text" value="" placeholder="Min" name="minUpSnr" class="form-control">
                                    </div>
                                    <div class="col-md-5">
                                        <input type="text" value="" placeholder="Max" name="maxUpSnr" class="form-control">
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div><strong>Alarm Only</strong></div>
                                <div class="row">
                                    <div class="col-md-5">
                                        <input type="checkbox" name="alarmObly" />
                                    </div>
                                </div>
                            </div>
                        </div><!-- end .left-entry -->

                        <div class="col-md-6 right-entry">
                            <div class="form-group">
                                <div><strong>Dn SNR</strong></div>
                                <div class="row">
                                    <div class="col-md-5">
                                        <input type="text" value="" placeholder="Min" name="minDnSnr" class="form-control">
                                    </div>
                                    <div class="col-md-5">
                                        <input type="text" value="" placeholder="Max" name="maxDnSnr" class="form-control">
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div><strong>Dn Power</strong></div>
                                <div class="row">
                                    <div class="col-md-5">
                                        <input type="text" value="" placeholder="Min" name="minDnPower" class="form-control">
                                    </div>
                                    <div class="col-md-5">
                                        <input type="text" value="" placeholder="Max" name="maxDnPower" class="form-control">
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div><strong>Up Power</strong></div>
                                <div class="row">
                                    <div class="col-md-5">
                                        <input type="text" value="" placeholder="Min" name="minUpPower" class="form-control">
                                    </div>
                                    <div class="col-md-5">
                                        <input type="text" value="" placeholder="Max" name="maxUpPower" class="form-control">
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
        <table id="cableModemTable" class="table table-striped table-bordered" cellspacing="0" width="100%">
            <thead>
            <tr>
                <th rowspan="2"></th>
                <th rowspan="2">Mac Address</th>
                <th rowspan="2">Subscriber Address</th>
                <th rowspan="2">Merchants</th>
                <th rowspan="2">Status</th>
                <th rowspan="2">Up-Cmts</th>
                <th colspan="7">Modem Parameters</th>
                <th rowspan="2">Time</th>
            </tr>
            <tr>
                <th>DnSNR</th>
                <th>UpSNR</th>
                <th>Fec</th>
                <th>UnFec</th>
                <th>DnPower</th>
                <th>RxPower</th>
                <th>TxPower</th>
            </tr>
            </thead>
            <tfoot>
            <tr>
                <th></th>
                <th class="hasInput">Mac Address</th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
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