<?php
require_once "functions.php";
$page = basename($_SERVER["SCRIPT_FILENAME"], '.php');
$cmtsActive = 'active';
$upstreamChannelActive = '';
$cableModemActive = '';

switch ($page) {
    default: $cmtsActive = "active";
        break;
    case "upstream-channel":
        $cmtsActive = '';
        $upstreamChannelActive = 'active';
        $cableModemActive = '';
        break;
    case "cable-modem":
        $cmtsActive = '';
        $upstreamChannelActive = '';
        $cableModemActive = 'active';
        break;
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="https://getbootstrap.com/favicon.ico">

    <title>VTV Cap</title>

    <link href="vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet">
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
    <!--<link href="https://cdn.datatables.net/1.10.13/css/jquery.dataTables.min.css" rel="stylesheet">-->
    <link href="https://cdn.datatables.net/1.10.13/css/dataTables.bootstrap.min.css" rel="stylesheet">
    <link href="https://editor.datatables.net/extensions/Editor/css/editor.dataTables.min.css" rel="stylesheet">


    <!--<link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha.5/css/bootstrap.css" rel="stylesheet">-->
    <!--<link href="https://cdn.datatables.net/1.10.13/css/dataTables.bootstrap4.min.css" rel="stylesheet">-->

    <!--<link href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.6/semantic.min.css" rel="stylesheet">-->
    <!--<link href="https://cdn.datatables.net/1.10.13/css/dataTables.semanticui.min.css" rel="stylesheet">-->



    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <!--<link href="css/ie10-viewport-bug-workaround.css" rel="stylesheet">-->

    <!-- Custom styles for this template -->
    <link href="css/style.css" rel="stylesheet">
</head>

<body>

<div class="container">
    <header>
        <section id="banner">
            <img src="https://placeholdit.imgix.net/~text?txtsize=19&txt=1140%C3%97200&w=1140&h=200" alt="banner vtv"/>
        </section>
        <section id="menu">
            <nav class="navbar navbar-default">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
                                aria-expanded="false" aria-controls="navbar">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="#">VTV.net</a>
                    </div>
                    <div id="navbar" class="navbar-collapse collapse">
                        <ul class="nav navbar-nav">
                            <li class="<?php echo $cmtsActive;?>"><a href="index.php">Cmts</a></li>
                            <li class="<?php echo $upstreamChannelActive;?>"><a href="upstream-channel.php">Upstream Channel</a></li>
                            <li class="<?php echo $cableModemActive;?>"><a href="cable-modem.php">Cable Modem</a></li>
                            <li><a href="#">Customer Mapping</a></li>
                            <li><a href="#">Upstream Metadata</a></li>
                            <li><a href="#">Mechant</a></li>
                            <li><a href="#">Alarm Config</a></li>
                            <!--<li class="dropdown">-->
                            <!--<a href="https://getbootstrap.com/examples/navbar/#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>-->
                            <!--<ul class="dropdown-menu">-->
                            <!--<li><a href="https://getbootstrap.com/examples/navbar/#">Action</a></li>-->
                            <!--<li><a href="https://getbootstrap.com/examples/navbar/#">Another action</a></li>-->
                            <!--<li><a href="https://getbootstrap.com/examples/navbar/#">Something else here</a></li>-->
                            <!--<li role="separator" class="divider"></li>-->
                            <!--<li class="dropdown-header">Nav header</li>-->
                            <!--<li><a href="https://getbootstrap.com/examples/navbar/#">Separated link</a></li>-->
                            <!--<li><a href="https://getbootstrap.com/examples/navbar/#">One more separated link</a></li>-->
                            <!--</ul>-->
                            <!--</li>-->
                        </ul>
                        <!--<ul class="nav navbar-nav navbar-right">-->
                        <!--<li class="active"><a href="https://getbootstrap.com/examples/navbar/">Default <span class="sr-only">(current)</span></a></li>-->
                        <!--<li><a href="https://getbootstrap.com/examples/navbar-static-top/">Static top</a></li>-->
                        <!--<li><a href="https://getbootstrap.com/examples/navbar-fixed-top/">Fixed top</a></li>-->
                        <!--</ul>-->
                    </div><!--/.nav-collapse -->
                </div><!--/.container-fluid -->
            </nav>
        </section>
    </header>

    <div id="mainContent" class="main-content">