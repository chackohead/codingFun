<!--- 
eSignRoom 2.1
by David Gaddy
2014
--->

<cfif IsDefined("Session.type")>
	<cflocation url="welcome.cfm"/>
</cfif>

<cfinclude template="includes/closedHtmlHeader.cfm"/>

<body class="datatables-page"> 

<!-- Start: Header -->
<header class="navbar navbar-fixed-top">
  <div class="pull-left"> <a class="navbar-brand" href="dashboard.html">
    <div class="navbar-logo"><img src="img/logos/logo-red.png" class="img-responsive" alt="logo"/></div>
    </a>
  </div>
</header>
<!-- End: Header --> 
<!-- Start: Main -->
<div id="main"> 
  <!-- Start: Sidebar -->
  <aside id="sidebar">
    <div id="sidebar-menu">
      <ul class="nav sidebar-nav">
      	<li> <a href="dashboard.html"><span class="glyphicons glyphicons-new_window"></span><span class="sidebar-title">Log Out</span></a> </li>
      </ul>
    </div>
  </aside>
  <!-- End: Sidebar --> 
  <!-- Start: Content -->
  <section id="content">
    <div id="topbar">
      <ol class="breadcrumb">
        <li><a href="dashboard.html"><span class="glyphicon glyphicon-home"></span></a></li>
        <li><a href="index.html">Home</a></li>
        <li class="active">Datatables</li>
      </ol>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="panel panel-visible">
            <div class="panel-heading">
              <div class="panel-title hidden-xs"> <span class="glyphicon glyphicon-tasks"></span> Editable Data Table</div>
            </div>
            <div class="panel-body padding-bottom-none">
              <table class="table table-striped table-bordered table-hover" id="datatable">
                <thead>
                  <tr>
                    <th class="hidden-xs">Type</th>
                    <th>Loan</th>
                    <th class="hidden-xs">Borrower</th>
                    <th class="visible-lg">Property</th>
                    <th class="hidden-xs hidden-sm">Pages</th>
                    <th>Status</th>
                    <th class="text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><span class="xedit">Try Me!</span></td>
                    <td class="hidden-xs"><span class="xedit">Henry Ford</span></td>
                    <td class="hidden-xs hidden-sm"><span class="label label-info">CSS</span></td>
                    <td class="visible-lg">GNU GPLv3</td>
                    <td>FSkit</td>
                    <td>Free</td>
                    <td class="hidden-xs text-center"><div class="btn-group">
                        <button type="button" class="btn btn-info btn-gradient"> <span class="glyphicons glyphicons-user"></span> </button>
                        <button type="button" class="btn btn-success btn-gradient"> <span class="glyphicon glyphicon-earphone"></span> </button>
                        <button type="button" class="btn btn-danger btn-gradient dropdown-toggle" data-toggle="dropdown"> <span class="glyphicons glyphicons-cogwheel"></span> </button>
                        <ul class="dropdown-menu checkbox-persist pull-right text-left" role="menu">
                          <li><a><i class="fa fa-user"></i> View Profile </a></li>
                          <li><a><i class="fa fa-envelope-o"></i> Message </a></li>
                        </ul>
                      </div></td>
                  </tr>
                  <tr>
                    <td><span class="xedit">Try Me!</span></td>
                    <td class="hidden-xs"><span class="xedit">Roger Rights</span></td>
                    <td class="hidden-xs hidden-sm"><span class="label btn-orange2 margin-right-sm">HTML</span><span class="label btn-dark">Java</span></td>
                    <td class="visible-lg">GNU GPLv3</td>
                    <td>Webkit</td>
                    <td>License</td>
                    <td class="hidden-xs text-center"><div class="btn-group">
                        <button type="button" class="btn btn-info btn-gradient"> <span class="glyphicons glyphicons-user"></span> </button>
                        <button type="button" class="btn btn-success btn-gradient"> <span class="glyphicon glyphicon-earphone"></span> </button>
                        <button type="button" class="btn btn-danger btn-gradient dropdown-toggle" data-toggle="dropdown"> <span class="glyphicons glyphicons-cogwheel"></span> </button>
                        <ul class="dropdown-menu checkbox-persist pull-right text-left" role="menu">
                          <li><a><i class="fa fa-user"></i> View Profile </a></li>
                          <li><a><i class="fa fa-envelope-o"></i> Message </a></li>
                        </ul>
                      </div></td>
                  </tr>
                  <tr>
                    <td><span class="xedit">Try Me!</span></td>
                    <td class="hidden-xs"><span class="xedit">Goblin Jones</span></td>
                    <td class="hidden-xs hidden-sm"><span class="label btn-green">PHP</span></td>
                    <td class="visible-lg">CF2</td>
                    <td>FSkit</td>
                    <td>Contract</td>
                    <td class="hidden-xs text-center"><div class="btn-group">
                        <button type="button" class="btn btn-info btn-gradient"> <span class="glyphicons glyphicons-user"></span> </button>
                        <button type="button" class="btn btn-success btn-gradient"> <span class="glyphicon glyphicon-earphone"></span> </button>
                        <button type="button" class="btn btn-danger btn-gradient dropdown-toggle" data-toggle="dropdown"> <span class="glyphicons glyphicons-cogwheel"></span> </button>
                        <ul class="dropdown-menu checkbox-persist pull-right text-left" role="menu">
                          <li><a><i class="fa fa-user"></i> View Profile </a></li>
                          <li><a><i class="fa fa-envelope-o"></i> Message </a></li>
                        </ul>
                      </div></td>
                  </tr>
                  <tr>
                    <td><span class="xedit">Try Me!</span></td>
                    <td class="hidden-xs"><span class="xedit">David Fleece</span></td>
                    <td class="hidden-xs hidden-sm"><span class="label btn-red">Python</span></td>
                    <td class="visible-lg">CC V2</td>
                    <td>Webkit</td>
                    <td>Free</td>
                    <td class="hidden-xs text-center"><div class="btn-group">
                        <button type="button" class="btn btn-info btn-gradient"> <span class="glyphicons glyphicons-user"></span> </button>
                        <button type="button" class="btn btn-success btn-gradient"> <span class="glyphicon glyphicon-earphone"></span> </button>
                        <button type="button" class="btn btn-danger btn-gradient dropdown-toggle" data-toggle="dropdown"> <span class="glyphicons glyphicons-cogwheel"></span> </button>
                        <ul class="dropdown-menu checkbox-persist pull-right text-left" role="menu">
                          <li><a><i class="fa fa-user"></i> View Profile </a></li>
                          <li><a><i class="fa fa-envelope-o"></i> Message </a></li>
                        </ul>
                      </div></td>
                  </tr>
                  <tr>
                    <td><span class="xedit">Try Me!</span></td>
                    <td class="hidden-xs"><span class="xedit">Mary Shark</span></td>
                    <td class="hidden-xs hidden-sm"><span class="label btn-blue2 margin-right-sm">Javascript</span><span class="label btn-green">PHP</span></td>
                    <td class="visible-lg">GNU GPLv3</td>
                    <td>FSkit</td>
                    <td>License</td>
                    <td class="hidden-xs text-center"><div class="btn-group">
                        <button type="button" class="btn btn-info btn-gradient"> <span class="glyphicons glyphicons-user"></span> </button>
                        <button type="button" class="btn btn-success btn-gradient"> <span class="glyphicon glyphicon-earphone"></span> </button>
                        <button type="button" class="btn btn-danger btn-gradient dropdown-toggle" data-toggle="dropdown"> <span class="glyphicons glyphicons-cogwheel"></span> </button>
                        <ul class="dropdown-menu checkbox-persist pull-right text-left" role="menu">
                          <li><a><i class="fa fa-user"></i> View Profile </a></li>
                          <li><a><i class="fa fa-envelope-o"></i> Message </a></li>
                        </ul>
                      </div></td>
                  </tr>
                  <tr>
                    <td><span class="xedit">Try Me!</span></td>
                    <td class="hidden-xs"><span class="xedit">Alexander Right</span></td>
                    <td class="hidden-xs hidden-sm"><span class="label btn-alert"> A Warm Heart</span></td>
                    <td class="visible-lg">GNU GPLv3</td>
                    <td>Webkit</td>
                    <td>Contract</td>
                    <td class="hidden-xs text-center"><div class="btn-group">
                        <button type="button" class="btn btn-info btn-gradient"> <span class="glyphicons glyphicons-user"></span> </button>
                        <button type="button" class="btn btn-success btn-gradient"> <span class="glyphicon glyphicon-earphone"></span> </button>
                        <button type="button" class="btn btn-danger btn-gradient dropdown-toggle" data-toggle="dropdown"> <span class="glyphicons glyphicons-cogwheel"></span> </button>
                        <ul class="dropdown-menu checkbox-persist pull-right text-left" role="menu">
                          <li><a><i class="fa fa-user"></i> View Profile </a></li>
                          <li><a><i class="fa fa-envelope-o"></i> Message </a></li>
                        </ul>
                      </div></td>
                  </tr>
                  <tr>
                    <td><span class="xedit">Try Me!</span></td>
                    <td class="hidden-xs"><span class="xedit">Peter Parker</span></td>
                    <td class="hidden-xs hidden-sm"><span class="label btn-blue6">NewEgg</span></td>
                    <td class="visible-lg">CC V2</td>
                    <td>FSkit</td>
                    <td>Free</td>
                    <td class="hidden-xs text-center"><div class="btn-group">
                        <button type="button" class="btn btn-info btn-gradient"> <span class="glyphicons glyphicons-user"></span> </button>
                        <button type="button" class="btn btn-success btn-gradient"> <span class="glyphicon glyphicon-earphone"></span> </button>
                        <button type="button" class="btn btn-danger btn-gradient dropdown-toggle" data-toggle="dropdown"> <span class="glyphicons glyphicons-cogwheel"></span> </button>
                        <ul class="dropdown-menu checkbox-persist pull-right text-left" role="menu">
                          <li><a><i class="fa fa-user"></i> View Profile </a></li>
                          <li><a><i class="fa fa-envelope-o"></i> Message </a></li>
                        </ul>
                      </div></td>
                  </tr>
                  <tr>
                    <td><span class="xedit">Try Me!</span></td>
                    <td class="hidden-xs"><span class="xedit">Florida Toss</span></td>
                    <td class="hidden-xs hidden-sm"><span class="label btn-dark">Skills</span></td>
                    <td class="visible-lg">CF2</td>
                    <td>Webkit</td>
                    <td>License</td>
                    <td class="hidden-xs text-center"><div class="btn-group">
                        <button type="button" class="btn btn-info btn-gradient"> <span class="glyphicons glyphicons-user"></span> </button>
                        <button type="button" class="btn btn-success btn-gradient"> <span class="glyphicon glyphicon-earphone"></span> </button>
                        <button type="button" class="btn btn-danger btn-gradient dropdown-toggle" data-toggle="dropdown"> <span class="glyphicons glyphicons-cogwheel"></span> </button>
                        <ul class="dropdown-menu checkbox-persist pull-right text-left" role="menu">
                          <li><a><i class="fa fa-user"></i> View Profile </a></li>
                          <li><a><i class="fa fa-envelope-o"></i> Message </a></li>
                        </ul>
                      </div></td>
                  </tr>
                  <tr>
                    <td><span class="xedit">Try Me!</span></td>
                    <td class="hidden-xs"><span class="xedit">Cynthia Rodes</span></td>
                    <td class="hidden-xs hidden-sm"><span class="label btn-orange margin-right-sm">HTML</span><span class="label btn-green">PHP</span></td>
                    <td class="visible-lg">CF2</td>
                    <td>FSkit</td>
                    <td>Free</td>
                    <td class="hidden-xs text-center"><div class="btn-group">
                        <button type="button" class="btn btn-info btn-gradient"> <span class="glyphicons glyphicons-user"></span> </button>
                        <button type="button" class="btn btn-success btn-gradient"> <span class="glyphicon glyphicon-earphone"></span> </button>
                        <button type="button" class="btn btn-danger btn-gradient dropdown-toggle" data-toggle="dropdown"> <span class="glyphicons glyphicons-cogwheel"></span> </button>
                        <ul class="dropdown-menu checkbox-persist pull-right text-left" role="menu">
                          <li><a><i class="fa fa-user"></i> View Profile </a></li>
                          <li><a><i class="fa fa-envelope-o"></i> Message </a></li>
                        </ul>
                      </div></td>
                  </tr>
                  <tr>
                    <td><span class="xedit">Try Me!</span></td>
                    <td class="hidden-xs"><span class="xedit">James Harvy</span></td>
                    <td class="hidden-xs hidden-sm"><span class="label btn-alert margin-right-sm">Patience</span><span class="label label-info">CSS</span></td>
                    <td class="visible-lg">CC V2</td>
                    <td>Webkit</td>
                    <td>License</td>
                    <td class="hidden-xs text-center"><div class="btn-group">
                        <button type="button" class="btn btn-info btn-gradient"> <span class="glyphicons glyphicons-user"></span> </button>
                        <button type="button" class="btn btn-success btn-gradient"> <span class="glyphicon glyphicon-earphone"></span> </button>
                        <button type="button" class="btn btn-danger btn-gradient dropdown-toggle" data-toggle="dropdown"> <span class="glyphicons glyphicons-cogwheel"></span> </button>
                        <ul class="dropdown-menu checkbox-persist pull-right text-left" role="menu">
                          <li><a><i class="fa fa-user"></i> View Profile </a></li>
                          <li><a><i class="fa fa-envelope-o"></i> Message </a></li>
                        </ul>
                      </div></td>
                  </tr>
                  <tr>
                    <td><span class="xedit">Uzbl</span></td>
                    <td class="hidden-xs"><span class="xedit">Hue Fontain</span></td>
                    <td class="hidden-xs hidden-sm"><span class="label btn-red2">Ice Cream</span></td>
                    <td class="visible-lg">GNU GPLv3</td>
                    <td>FSkit</td>
                    <td>License</td>
                    <td class="hidden-xs text-center"><div class="btn-group">
                        <button type="button" class="btn btn-info btn-gradient"> <span class="glyphicons glyphicons-user"></span> </button>
                        <button type="button" class="btn btn-success btn-gradient"> <span class="glyphicon glyphicon-earphone"></span> </button>
                        <button type="button" class="btn btn-danger btn-gradient dropdown-toggle" data-toggle="dropdown"> <span class="glyphicons glyphicons-cogwheel"></span> </button>
                        <ul class="dropdown-menu checkbox-persist pull-right text-left" role="menu">
                          <li><a><i class="fa fa-user"></i> View Profile </a></li>
                          <li><a><i class="fa fa-envelope-o"></i> Message </a></li>
                        </ul>
                      </div></td>
                  </tr>
                  <tr>
                    <td><span class="xedit">Try Me!</span></td>
                    <td class="hidden-xs"><span class="xedit">George Michaels</span></td>
                    <td class="hidden-xs hidden-sm"><span class="label btn-brown">Dedication</span></td>
                    <td class="visible-lg">GNU GPLv3</td>
                    <td>Webkit</td>
                    <td>Contract</td>
                    <td class="hidden-xs text-center"><div class="btn-group">
                        <button type="button" class="btn btn-info btn-gradient"> <span class="glyphicons glyphicons-user"></span> </button>
                        <button type="button" class="btn btn-success btn-gradient"> <span class="glyphicon glyphicon-earphone"></span> </button>
                        <button type="button" class="btn btn-danger btn-gradient dropdown-toggle" data-toggle="dropdown"> <span class="glyphicons glyphicons-cogwheel"></span> </button>
                        <ul class="dropdown-menu checkbox-persist pull-right text-left" role="menu">
                          <li><a><i class="fa fa-user"></i> View Profile </a></li>
                          <li><a><i class="fa fa-envelope-o"></i> Message </a></li>
                        </ul>
                      </div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End: Content --> 
</div>
<!-- End: Main --> 

<!-- Core Javascript - via CDN --> 
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script> 
<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script> 
<script src="http://netdna.bootstrapcdn.com/bootstrap/3.1.0/js/bootstrap.min.js"></script> <!-- Plugins - Via CDN -->
<script type="text/javascript" src="http://ajax.aspnetcdn.com/ajax/jquery.dataTables/1.9.4/jquery.dataTables.min.js"></script>
<!--<script type="text/javascript" src="vendor/plugins/datatables/jquery.dataTables.min.js"></script> Local Option -->

<!-- Plugins -->
<script type="text/javascript" src="vendor/plugins/datatables/js/datatables.js"></script><!-- Datatable Bootstrap Addon -->
<script type="text/javascript" src="vendor/plugins/datatables/extras/TableTools/media/js/TableTools.min.js"></script><!-- Datatable TableTools Addon -->
<script type="text/javascript" src="vendor/plugins/datatables/extras/TableTools/media/js/ZeroClipboard.js"></script><!-- Datatable TableTools Addon -->
<script type="text/javascript" src="vendor/editors/xeditable/js/bootstrap-editable.js"></script> 
<script type="text/javascript" src="vendor/plugins/chosen/chosen.jquery.min.js"></script> 

<!-- Theme Javascript --> 
<script type="text/javascript" src="js/uniform.min.js"></script> 
<script type="text/javascript" src="js/main.js"></script>
<script type="text/javascript" src="js/custom.js"></script> 
<script type="text/javascript">
jQuery(document).ready(function() {

  Core.init();

  // Init Datatables with Tabletools Addon	
  $('#datatable').dataTable( {
	"aoColumnDefs": [{ 'bSortable': false, 'aTargets': [ -1 ] }],
	"oLanguage": { "oPaginate": {"sPrevious": "", "sNext": ""} },
	"iDisplayLength": 6,
	"aLengthMenu": [[5, 10, 25, 50, -1], [5, 10, 25, 50, "All"]],
	"sDom": 'T<"panel-menu dt-panelmenu"lfr><"clearfix">tip',
	"oTableTools": {
		"sSwfPath": "vendor/plugins/datatables/extras/TableTools/media/swf/copy_csv_xls_pdf.swf"
	}
  });	
  
  // Add Placeholder text to datatables filter bar
  $('.dataTables_filter input').attr("placeholder", "Enter Search Terms Here....");
  
  // Manually Init Chosen on Datatables Filters
  $("select[name='datatable_length']").chosen();	
  
  // Init Xeditable Plugin
  $.fn.editable.defaults.mode = 'popup';
  $('.xedit').editable();

});
</script>
</body>

</html>