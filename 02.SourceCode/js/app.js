/**
 * Created by nguyen.tien.viet on 12/12/2016.
 */

var cmtsTable;
var upstreamChannelTable;
var cableModemTable;

$(document).ready(function () {
    initCmts();
    initUpstreamChannel();
    initCableModem();
});

function initCmts() {
    // Setup - add a text input to each footer cell
    $('#cmtsTable tfoot th').each( function () {
        var title = $(this).text();
        $(this).html( '<input type="text" class="form-control search-by-column" placeholder="Search '+title+'" />' );
    } );

    var cmtsData = [
        [701,"uBR-72-HPG1","101.99.22.196","noc","cntt/cntt",true  ],
        [702,"uBR-72-HPG2","101.99.22.197","noc","cntt/cntt",true  ],
        [401,"uBR-7246-TRANCUNG","172.20.53.57","cntt","cntt/cntt",true  ],
        [402,"uBR-7246-TRANCUNG-02","172.20.53.53","cntt","cntt/cntt",true  ],
        [704,"uBR-72-HPG4","101.99.22.199","noc","cntt/cntt",true  ],
        [404,"uBR10K-NCT01","172.20.53.48","cntt","cntt/cntt",true  ],
        [405,"uBR-72-TN02","172.20.53.56","cntt","cntt/cntt",true  ],
        [406,"uBR10k-TC","172.20.53.51","cntt","cntt/cntt",true  ],
        [407,"uBR10K-HD","172.20.53.52","cntt","cntt/cntt",true  ],
        [603,"Ubr7246-THACHBAN-02","172.20.53.58","cntt","cntt/cntt",true  ],
        [409,"uBR-72-TN-01","172.20.53.54","cntt","cntt/cntt",true  ],
        [501,"uBR-10-NCT03","172.20.53.50","cntt","cntt/cntt",true  ],
        [602,"Ubr7246-THACHBAN-01","172.20.53.59","noc","cntt/cntt",true  ],
        [703,"uBR-72-HPG3","101.99.22.198","noc","cntt/cntt",true  ],
        [801,"uBR-10K-NCT02","172.20.53.49","noc","cntt/cntt",true  ],
        [1001,"Ubr7246-THACHBAN-03","172.20.53.55","cntt","cntt/cntt",true  ],
        [1002,"uBR10K-VOV-01","172.20.53.61","noc","cntt/cntt",true  ],
        [901,"uBR-10K-DT","172.20.53.60","noc","cntt/cntt",true  ],
        [1003,"uBR10K-VOV-02","172.20.53.62","cntt","cntt/cntt",true  ]
    ];
    // DataTable
    var table = $('#cmtsTable').DataTable({
        //"ajax": 'http://toilamit.com/demo/vtv/data/arrays.txt'
        "scrollX": true,
        data: cmtsData
        // dom: 'Bfrtip',
        // select: true,
        // buttons: [
        //     { extend: 'create', editor: editor },
        //     { extend: 'edit',   editor: editor },
        //     { extend: 'remove', editor: editor }
        // ]
        // columns: [
        //     { title: "ID" },
        //     { title: "Title" },
        //     { title: "Host" },
        //     { title: "Community" },
        //     { title: "Description" },
        //     { title: "Enabled" }
        // ]
    });

    //swap tbody div with tfoot div
    $('.dataTables_scroll .dataTables_scrollFoot').insertAfter('.dataTables_scroll .dataTables_scrollHead');

    // Apply the search
    table.columns().every( function () {
        var that = this;
        $( 'input', this.footer() ).on( 'keyup change', function () {
            // $(this.footer() ).on( 'keyup change', function () {
            if ( that.search() !== this.value ) {
                that
                    .search( this.value )
                    .draw();
            }
        } );
    } );
}

function initCableModem() {
    // Setup - add a text input to each footer cell
    $('#cableModemTable tfoot th.hasInput').each( function () {
        var title = $(this).text();
        $(this).html( '<input type="text" class="form-control search-by-column" placeholder="Search '+title+'" />' );
    } );

    cableModemTable = $('#cableModemTable').DataTable( {
        "ajax": 'http://toilamit.com/demo/vtv/data/cableModemData.json',
        "columns": [
            {
                "className": "connect-signal",
                "orderable": false,
                "data": null,
                "defaultContent": '<a class="btn btn-sm btn-default"><i class="fa fa-rss" aria-hidden="true"></i></a>' +
                        '<a class="btn btn-sm btn-default"><i class="fa fa-refresh" aria-hidden="true"></i></a>'
            },

            {"data":"MacAddress"},
            {"data":"SubscriberAddress"},
            {"data":"Merchants"},
            {"data":"Status"},
            {"data":"UpCmts"},
            {"data":"DnSNR"},
            {"data":"UpSNR"},
            {"data":"Fec"},
            {"data":"UnFec"},
            {"data":"DnPower"},
            {"data":"RxPower"},
            {"data":"TxPower"},
            {"data":"Time"}
        ],
        "order": [[1, 'asc']]
    } );

    // Add event listener for opening and closing details
    $('#upstreamChannelTable tbody').on('click', 'td.details-row', function () {

    } );

    // Apply the search
    cableModemTable.columns().every( function () {
        var that = this;
        $( 'input', this.footer() ).on( 'keyup change', function () {
            if ( that.search() !== this.value ) {
                that.search(this.value ).draw();
            }
        } );
    } );

    //toggle search form
    $('.toggle-icon-open').hide();
    $('#titleSearchForm').on('click', function (e) {
        var toggleSearchForm = $('#toggleSearchForm');
        if (toggleSearchForm.hasClass('in')) {
            $('.toggle-icon-close').hide();
            $('.toggle-icon-open').show();
        } else {
            $('.toggle-icon-close').show();
            $('.toggle-icon-open').hide();
        }
    });
}

function initUpstreamChannel() {
    var upstreamChannelData = [
        ["Cable5/1/4-upstream0","NODE_NONE","",0,0,0,0,0,0,0  ],
        ["Cable5/0/3-upstream3","NODE_NONE","",0,0,0,0,0,0,0  ],
        ["Cable6/0-upstream1","NODE_NONE","",0,0,0,0,0,0,0  ],
        ["Cable5/0/0-upstream0","NODE_NGA3GIAPNHAT","CN2",28,0.01,0,50.23,131,135,35.53  ],
        ["Cable7/1/2-upstream3","NODE_HK-051(NHATHO)","CN3",28.5,0.17,0,51.77,41,43,35.86  ],
        ["Cable5/0/2-upstream3","NODE_NONE","",0,0,0,0,0,0,0  ],
        ["Cable5/1/4-upstream1","NODE_122TAYSON","CN2",32.5,0.02,0,52.18,57,57,37.31  ],
        ["Cable5/1/0-upstream0","NODE_DD-125(165NGOCHOKHAMTHIEN)","CN2",27.9,0,0,50.1,78,80,36.19  ],
        ["Cable6/0-upstream2","NODE_254MINHKHAI","",33.3,2.26,0.18,47.95,65,65,35.18  ],
        ["Cable5/1/0-upstream1","NODE_DD-127(HOANGAN.A)","CN2",33.6,0,0,50.01,68,71,35.98  ],
        ["Cable8/1/0-upstream0","NODE_DD-131(110KHAMTHIEN)","CN2",26.6,0.01,0,50.15,88,92,35.19  ],
        ["Cable5/0/0-upstream1","NODE-NONE","",0,0,0,0,0,0,0  ],
        ["Cable5/0/3-upstream0","NODE_212KHUONGDINH","CN2",32.6,0.04,0,49.77,47,50,36.13  ],
        ["Cable5/0/4-upstream1","NODE_135DOICAN","CN4",29.6,0.02,0.01,46.67,175,182,36.59  ],
        ["Cable5/1/4-upstream2","NODE_NONE","",0,0,0,0,0,0,0  ],
        ["Cable8/1/0-upstream1","NODE_DD-134(88TRANQUYCAP)","CN2",29.9,0.03,0,49.66,121,123,35.85  ],
        ["Cable5/1/4-upstream3","NODE_NONE","",0,0,0,0,0,0,0  ],
        ["Cable5/0/3-upstream1","NODE_236KHUONGDINH","CN2",28.7,0.01,0,44.96,70,70,36.21  ],
        ["Cable5/1/0-upstream2","NODE_NONE","",0,0,0,0,0,0,0  ],
        ["Cable5/0/0-upstream2","NODE-NONE","",0,0,0,0,0,0,0  ],
        ["Cable5/0/3-upstream2","NODE_NONE","",0,0,0,0,0,0,0  ],
        ["Cable6/0/1-upstream0","NODE_84/39NGOCKHANH","CN1",35.7,0,0,50.65,91,93,36.92  ],
        ["Cable5/0/4-upstream2","NODE_NONE","",0,0,0,0,0,0,0  ],
        ["Cable5/1/0-upstream3","NODE_NONE","",0,0,0,0,0,0,0  ],
        ["Cable5/0/0-upstream3","NODE_NGA3CHINHKINH-QUANNHAN","CN2",30.2,0,0,48.26,62,62,36.55  ],
        ["Cable6/0/3-upstream0","NODE_NONE","",0,0,0,0,0,0,0  ],
        ["Cable5/0/4-upstream3","NODE_NONE","",0,0,0,0,0,0,0  ],
        ["Cable8/1/0-upstream2","NODE_NONE","",0,0,0,0,0,0,0  ],
        ["Cable5/1/1-upstream0","NODE_DD-126(178NGOCHOKHAMTHIEN)","CN2",28.2,0.05,0,48.98,213,218,35.45  ],
        ["Cable6/0/1-upstream1","NODE_477KIMMA","CN1",34.4,0,0,54.04,52,53,37.09  ],
        ["Cable5/1/0-upstream0","NODE_NONE","",0,0,0,0,0,0,0  ],
        ["Cable5/0/1-upstream0","NODE_NONE","",0,0,0,0,0,0,0  ],
        ["Cable6/0/1-upstream1","NODE_NONE","",0,0,0,0,0,0,0  ],
        ["Cable8/1/0-upstream3","NODE_NONE","",0,0,0,0,0,0,0  ],
        ["Cable8/1/1-upstream0","NODE_DD-122(THOQUAN)","CN2",34.8,0,0,52.39,93,99,36.09  ],
        ["Cable6/0/1-upstream2","NODE_NONE","",0,0,0,0,0,0,0  ],
        ["Cable5/0/3-upstream3","NODE_41KHUONGDINH","CN2",28.1,0.49,0,46.39,60,62,35.77  ],
        ["Cable5/1/0-upstream1","NODE_22PHUCXA","CN4",33.8,0.03,0,48.44,185,188,35.89  ],
        ["Cable8/1/1-upstream1","NODE_NONE","",0,0,0,0,0,0,0  ],
        ["Cable8/1/1-upstream1","NODE_A16NGHIATAN","CN1",34.8,0,0,49.21,52,55,36.42  ],
        ["Cable8/1/1-upstream2","NODE_UBND_NGHIATAN","CN1",29.4,0.02,0.01,47.4,79,82,36.32  ],
        ["Cable8/1/1-upstream3","NODE_NGA4NGHIATAN","CN1",24.2,0.09,0,49.85,117,120,36.22  ],
        ["Cable5/0/4-upstream0","NODE_NONE","",0,0,0,0,0,0,0  ],
        ["Cable7/1/2-upstream3","NODE_430THUYKHUE","CN4",30.3,0.07,0,47.36,51,52,37.58  ],
        ["Cable6/0/2-upstream2","NODE_XOMVUC","CN2",28.1,0.04,0,43.14,28,29,36.13  ],
        ["Cable7/0/1-upstream3","NODE_CT5-MANNER","CN1",34.9,0,0,52.6,2,2,36.7  ],
        ["Cable8/1/0-upstream2","NODE_NONE","",0,0,0,0,0,0,0  ],
        ["Cable6/0-upstream1","NODE_NONE","",0,0,0,0,0,0,0  ],
        ["Cable6/0-upstream2","NODE_K10/N445LACLONGQUAN","CN4",31.9,0.02,0,46.37,107,111,36.23  ],
        ["Cable6/0-upstream3","NODE_NONE","",0,0,0,0,0,0,0  ],
        ["Cable6/1-upstream0","NODE_204TRANDUYHUNNG","CN1",26.6,0,0,51.59,36,37,36.18  ],
        ["Cable6/1-upstream1","NODE_43/99TRANDUYHUNG","CN1",35.1,0.03,0,48.94,19,19,36.16  ],
        ["Cable6/1-upstream2","NODE_337CAUGIAY","CN1",25.3,0.01,0,47.87,75,77,36.99  ],
        ["Cable6/1-upstream3","NODE_45/337CAUGIAY","CN1",29.6,0.01,0,49.24,40,41,36.34  ],
        ["Cable8/1/1-upstream2","NODE_DD-123(216LATHANH)","CN2",32.2,0.02,0,47.74,95,99,35.83  ],
        ["Cable8/1/1-upstream3","NODE_NONE","",0,0,0,0,0,0,0  ],
        ["Cable8/1/2-upstream0","NODE_DD-132(DAIDONG)","CN2",25.2,1.54,0.18,46.94,138,139,35.43  ],
        ["Cable8/1/2-upstream1","NODE_NONE","",0,0,0,0,0,0,0  ],
        ["Cable8/1/2-upstream2","NODE_NONE","",0,0,0,0,0,0,0  ],
        ["Cable5/0/4-upstream1","NODE_47KHUONGTRUNG","CN2",26.4,0,0,48.31,68,70,35.96  ],
        ["Cable8/1/2-upstream3","NODE_NONE","",0,0,0,0,0,0,0  ],
        ["Cable8/1/3-upstream0","NODE_DD-119(TONDUCTHANG)","CN2",32.6,0.01,0,51.75,107,112,35.74  ],
        ["Cable8/1/3-upstream1","NODE_NONE","",0,0,0,0,0,0,0  ],
        ["Cable5/1/0-upstream3","NODE_NONE","",0,0,0,0,0,0,0  ],
        ["Cable8/1/3-upstream2","NODE_NONE","",0,0,0,0,0,0,0  ],
        ["Cable8/1/3-upstream3","NODE_NONE","",0,0,0,0,0,0,0  ],
        ["Cable8/1/4-upstream0","NODE_DD-120(KIENTHIET)","CN2",25.4,1.5,0.05,48.02,127,130,35.09  ],
        ["Cable5/0/4-upstream2","NODE_97KHUONGTRUNG","CN2",28.6,0.42,0.77,46.74,72,74,36.18  ],
        ["Cable8/1/4-upstream1","NODE_NONE","",0,0,0,0,0,0,0  ],
        ["Cable8/1/4-upstream2","NODE_NONE","",0,0,0,0,0,0,0  ],
        ["Cable8/1/4-upstream3","NODE_NONE","",0,0,0,0,0,0,0  ],
        ["Cable5/0/4-upstream3","NODE_NONE","",0,0,0,0,0,0,0  ],
        ["Cable5/1/1-upstream0","NODE_67HOANGHOATHAM","CN4",30.3,0.03,0,49.04,131,135,36.26  ],
        ["Cable7/1/4-upstream2","NODE_46/12HAONAM","CN2",34.4,0.06,0.03,51.09,110,112,34.4  ],
        ["Cable5/1/2-upstream2","NODE_129NGUYENTRAI","CN2",25.6,0.04,0.01,49.52,124,127,36.97  ],
        ["Cable6/1/0-upstream1","NODE_139NGUYENNGOCVU","CN1",31.1,0.01,0,51.19,62,66,37.14  ],
        ["Cable8/0/2-upstream2","NODE_136PHUONGLIET","CN3",35.2,0.03,0,50.57,70,70,34.34  ],
        ["Cable5/1/2-upstream3","NODE_NGUYENTUAN","CN2",34.6,0,0,51.7,1,1,39.4  ],
        ["Cable5/1/3-upstream0","NODE_NONE","",0,0,0,0,0,0,0  ],
        ["Cable6/0/1-upstream0","NODE_Nga3CHUALANG-NGUYENCHITHANH","CN1",28.4,0.14,0,51.29,47,48,36.57  ],
        ["Cable6/0/1-upstream1","NODE_850_DUONG_LANG","CN1",34.4,0.03,0,51.91,69,69,36.73  ],
        ["Cable7/0/2-upstream0","NODE_77/14METRIHA","CN1",32.3,0.02,0,48.97,47,47,35.93  ],
        ["Cable6/0/1-upstream2","NODE_NONE","",0,0,0,0,0,0,0  ],
        ["Cable6/0/1-upstream3","NODE_NGA3_PDLANG_NCTHANH","CN1",31.3,0.01,0,51.62,67,70,36.9  ],
        ["Cable6/0/2-upstream0","NODE_NONE","",0,0,0,0,0,0,0  ],
        ["Cable6/1/0-upstream0","NODE_67THAITHINH","CN2",34.7,0,0,47.79,57,60,37.24  ],
        ["Cable6/1/0-upstream1","NODE_Ngo78THAITHINH","CN2",24.6,0.01,0,48.54,42,43,36.98  ],
        ["Cable6/1/0-upstream2","NODE_NONE","",0,0,0,0,0,0,0  ],
        ["Cable6/1/0-upstream3","NODE_67THAIHA","CN2",27.7,4.23,0,47.2,67,69,36.93  ],
        ["Cable6/1/1-upstream0","NODE_NONE","",0,0,0,0,0,0,0  ],
        ["Cable6/1/1-upstream1","NODE_142THINHQUANG","CN2",29.1,0,0,48.99,92,94,36.27  ],
        ["Cable6/1/1-upstream2","NODE_A8VINHHO","CN2",27.5,0.03,0.01,44.3,93,96,36.75  ],
        ["Cable6/1/1-upstream3","NODE_NONE","",0,0,0,0,0,0,0  ],
        ["Cable6/1/2-upstream0","NODE_22_TONTHATTUNG","CN2",24.9,0.3,0,48.03,71,75,37.02  ],
        ["Cable6/1/2-upstream1","NODE_165_CHUABOC","CN2",33.3,0,0,51.43,82,85,36.98  ],
        ["Cable6/1/2-upstream2","NODE_45CHUABOC","CN2",33.4,0.49,0,49.2,80,84,36.84  ],
        ["Cable6/1/2-upstream3","NODE_NONE","",0,0,0,0,0,0,0  ],
        ["Cable6/1/3-upstream0","NODE_1A_TONTHATTUNG","CN2",30.2,0.39,0,47.04,86,90,36.6  ],
        ["Cable6/1/3-upstream1","NODE_NONE","",0,0,0,0,0,0,0  ],
        ["Cable6/1/3-upstream2","NODE_NONE","",0,0,0,0,0,0,0  ],
        ["Cable6/1/3-upstream3","NODE_HO.KHUONGTHUONG","CN2",31.4,2.36,0,48.98,137,138,36.79  ],
        ["Cable6/1/4-upstream0","NODE_NONE","",0,0,0,0,0,0,0  ],
        ["Cable6/1/4-upstream1","NODE_DONGTAC","CN3",31.7,0.33,0,50.87,71,72,37.21  ],
        ["Cable6/1/4-upstream2","NODE_C1LUONGDINGCUA","CN3",28.3,0.04,0.01,47.43,53,54,36.8  ],
        ["Cable6/1/4-upstream3","NODE_NGO4/15PHUONGMAI","CN3",32.7,0,0,48.67,39,42,36.91  ],
        ["Cable7/0/0-upstream0","NODE_NONE","",0,0,0,0,0,0,0  ],
        ["Cable7/0/0-upstream1","NODE_178_TAYSON","CN2",33.9,0.01,0,49.64,54,55,37.3  ],
        ["Cable7/0/0-upstream2","NODE_NGA4_TQDIEU_DTDONG","CN2",30.7,0.08,0,47.02,81,84,35.25  ],
        ["Cable7/0/0-upstream3","NODE_NGA4_TQDIEU_VVDUNG","CN2",22.6,1.53,0.48,50.7,54,55,36.58  ],
        ["Cable7/0/1-upstream0","NODE_34_DTDONG","CN2",27,0,0,46.46,39,40,36.67  ],
        ["Cable7/0/1-upstream1","NODE_NONE","",0,0,0,0,0,0,0  ],
        ["Cable7/0/1-upstream2","NODE_98/73_NGLUONGBANG","CN2",34.4,0.05,0,49.63,124,128,36.18  ],
        ["Cable7/0/1-upstream3","NODE_DONGCAC","CN2",33.3,0.01,0,49.09,26,26,35.98  ],
        ["Cable7/0/2-upstream0","NODE_91LUONGDINHCUA","CN3",32.2,0.04,0,49.9,69,74,35.26  ],
        ["Cable7/0/2-upstream1","NODE_102/62TRUONGCHINH","CN3",34.5,0.04,0,51.87,65,68,35.23  ],
        ["Cable5/1/1-upstream1","NODE_NGA3TRIEUKHUC","CN2",34.9,0.38,0,49.35,66,68,36.17  ],
        ["Cable8/1/2-upstream0","NODE_120HOANGQUOCVIET","CN1",33.2,0,0,50.66,62,64,36.64  ],
        ["Cable8/1/2-upstream1","NODE_A7HOANGQUOCVIET","CN1",31.9,0.94,0,51.3,79,82,36.85  ],
        ["Cable8/1/2-upstream2","NODE_34N191LACLONGQUAN","CN4",36.1,0,0,45.14,76,76,36.59  ],
        ["Cable8/1/2-upstream3","NODE_191/38/30LACLONGQUAN","CN4",33.8,1.63,1.19,45.81,71,73,36.9  ],
        ["Cable8/1/3-upstream0","NODE_249XUANDINH","CN4",29.1,0.1,0,46.37,114,115,36.28  ],
        ["Cable8/1/3-upstream1","NODE_126XUANDINH","CN4",28.8,0.15,0,47.9,92,93,36.51  ],
        ["Cable8/1/3-upstream2","NODE_NONE","",0,0,0,0,0,0,0  ],
        ["Cable8/1/3-upstream3","NODE_NONE","",0,0,0,0,0,0,0  ],
        ["Cable8/1/4-upstream0","NODE_TT.DHNGOAINGU","CN1",35.7,0,0,47.23,26,26,35.89  ],
        ["Cable8/1/4-upstream1","NODE_86CHUAHA","CN1",29.2,0.04,0,49.95,52,55,35.5  ],
        ["Cable8/1/4-upstream2","NODE_KYTUC.DHSP","CN1",31.2,0.01,0,47.85,43,44,35.8  ],
        ["Cable8/1/4-upstream3","NODE_260CAUGIAY","CN1",33,0.01,0,48.81,47,48,35.91  ],
        ["Cable8/0/1-upstream0","NODE_470NGUYENTRAI","CN2",25,0.01,0,51.8,52,54,34.89  ],
        ["Cable8/0/1-upstream1","NODE_126KHUATDUYTIEN","CN2",28,0.01,0,48.92,71,77,36.61  ],
        ["Cable8/0/1-upstream2","NODE_NONE","",0,0,0,0,0,0,0  ],
        ["Cable8/0/1-upstream3","NODE_NONE","",0,0,0,0,0,0,0  ],
        ["Cable8/0/2-upstream0","NODE_766LAThanh","CN1",28.8,0.04,0,51.53,203,211,36.19  ],
        ["Cable8/0/2-upstream1","NODE_NONE","",0,0,0,0,0,0,0  ],
        ["Cable8/0/2-upstream2","NODE_NONE","",0,0,0,0,0,0,0  ],
        ["Cable8/0/2-upstream3","NODE_NONE","",0,0,0,0,0,0,0  ],
        ["Cable8/0/3-upstream0","NODE_NONE","",0,0,0,0,0,0,0  ],
        ["Cable8/0/3-upstream1","NODE_A6THANHXUANBAC","CN2",34.8,0.03,0,49.24,86,88,36.13  ],
        ["Cable8/0/3-upstream2","NODE_NGA3LTV-TRUNGVAN","CN2",34.3,0.06,0,51.36,46,47,36.22  ],
        ["Cable8/0/3-upstream3","NODE__167VUHUU","CN2",31.7,0.02,0,49.14,88,89,36.37  ],
        ["Cable8/0/4-upstream0","NODE_NONE","",0,0,0,0,0,0,0  ],
        ["Cable8/0/4-upstream1","NODE_78GIAIPHONG","CN3",33.6,0.05,0,51.22,45,47,36.14  ],
        ["Cable8/0/4-upstream2","NODE_NGO4.PHUONGMAI","CN3",32,0.02,0,49.41,75,80,35.61  ],
        ["Cable8/0/4-upstream3","NODE_NONE","",0,0,0,0,0,0,0  ],
        ["Cable8/1/0-upstream0","NODE_NUITRUC","CN1",33.8,0.45,0,49.77,31,31,36.64  ],
        ["Cable8/1/0-upstream1","NODE_95KIMMA","CN1",28.4,1.34,0.21,51.12,133,134,37.03  ],
        ["Cable8/1/0-upstream2","NODE_NONE","",0,0,0,0,0,0,0  ],
        ["Cable8/1/0-upstream3","NODE_NONE","",0,0,0,0,0,0,0  ],
        ["Cable8/1/1-upstream0","NODE_72/1NGUYENTRAI","CN2",34,0.01,0,50.24,90,95,37.5  ],
        ["Cable8/1/1-upstream1","NODE_328NGUYENTRAI","CN2",34.4,0.11,0,49.86,74,76,37.15  ]
    ];

    // Setup - add a text input to each footer cell
    $('#upstreamChannelTable tfoot th.hasInput').each( function () {
        var title = $(this).text();
        $(this).html( '<input type="text" class="form-control search-by-column" placeholder="Search '+title+'" />' );
    } );

    upstreamChannelTable = $('#upstreamChannelTable').DataTable( {
        //"ajax": 'http://toilamit.com/demo/vtv/data/objects.txt',
        "ajax": 'http://toilamit.com/demo/vtv/data/upstreamChannelData.json',
        "columns": [
            {
                "className": "details-row",
                "orderable": false,
                "data": null,
                "defaultContent": ""
            },
            {"data":"Description"},
            {"data":"Alias"},
            {"data":"Merchants"},
            {"data":"SNR"},
            {"data":"Fec"},
            {"data":"FecUn"},
            {"data":"TxPw"},
            {"data":"Act"},
            {"data":"Total"},
            {"data":"MER"}

        ],
        "order": [[1, 'asc']]
    } );

    // Add event listener for opening and closing details
    $('#upstreamChannelTable tbody').on('click', 'td.details-row', function () {
        var tr = $(this).closest('tr');
        var row = upstreamChannelTable.row( tr );

        if ( row.child.isShown() ) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
        }
        else {
            // Open this row
            row.child( format(row.data()) ).show();
            tr.addClass('shown');
        }
    } );

    // Apply the search
    upstreamChannelTable.columns().every( function () {
        var that = this;
        $( 'input', this.footer() ).on( 'keyup change', function () {
            if ( that.search() !== this.value ) {
                that.search(this.value ).draw();
            }
        } );
    } );

    //toggle search form
    $('.toggle-icon-open').hide();
    $('#titleSearchForm').on('click', function (e) {
        var toggleSearchForm = $('#toggleSearchForm');
        if (toggleSearchForm.hasClass('in')) {
            $('.toggle-icon-close').hide();
            $('.toggle-icon-open').show();
        } else {
            $('.toggle-icon-close').show();
            $('.toggle-icon-open').hide();
        }
    });
}

/* Formatting function for row details - modify as you need */
function format ( d ) {
    // `d` is the original data object for the row
    var now = moment().format("DD-MM-YYYY h:mm:ss");
    return '<table class="table table-striped table-bordered" cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">' +
        '<tr><td class="text-right"><strong>FRE:</strong></td> <td>60</td> <td class="text-right"><strong>WTH:</strong></td> <td>6.4</td></tr>' +
        '<tr><td class="text-right"><strong>Reg:</strong></td> <td>0</td> <td class="text-right"><strong>RxPw:</strong></td> <td>0</td></tr>' +
        '<tr><td class="text-right"><strong>DsPw:</strong></td> <td>0</td> <td class="text-right"><strong>Qam:</strong></td> <td></td></tr>' +
        '<tr><td class="text-right"><strong>DsFRE:</strong></td> <td></td> <td class="text-right"><strong>Time:</strong></td> <td>'+ now +'</td></tr>' +
        '<tr><td class="text-right"><strong>Mod:</strong></td> <td>221</td> <td class="text-right"><strong>MicRef:</strong></td> <td>0.0</td></tr>' +
        '</table>';
}