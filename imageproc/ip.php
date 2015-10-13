<div class="two columns sidebar">
	<h5>Image Processing</h5>
	<ul>
		<li><a href="?view=ip&item=1">Grayscale</a></li>
	</ul>
</div>
<div class="ten columns">
	<div class="item-content">
		<?php
			if($_GET['item'])
				include_once('item'.$_GET['item'].'.php');
			else
				include_once('item1.php');
		?>
	</div>

</div>