<!DOCTYPE html>
<html>

<head>
<?php include_once('head.php'); ?>
<title>Sarabostani</title>
</head>

<body>

<?php include_once('main-menu.php'); ?>

<div id="contents">
	<?php
		if($_GET['view']){
			switch($_GET['view']){
				case 'ip':
					include_once('imageproc/ip.php');
					break;
				case 'webgl':
					include_once('webgl/webgl.php');
					break;
				default:
					include_once('home.php');
			}
		}
		else
			include_once('home.php');
	?>
</div>

<script type="text/javascript">
	$(".menu-btn").click(function(){
		$(this).toggleClass('cross');
		$("#main-menu").fadeToggle(400);
	});

	$("#main-menu li a").click(function(){
		$(".menu-btn").click();
		var aTag = $($(this).attr('href'));
		 $('html,body').animate({scrollTop: aTag.offset().top},'slow');
	})
</script>

<script type="text/javascript" src="js/lightbox.min.js"></script>
</body>
</html>