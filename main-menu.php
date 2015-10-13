<div class="menu-btn">
	<span></span>
	<span></span>
	<span></span>
</div>
<div id="main-menu">
	<div>
		<h1>Menu</h1>
		<ul>
			<!-- <li><a href="?view=physics">Physics Simulations</a></li> -->
		<?php if(!$_GET['view']): ?>
			<li><a href="#about"><i class="fa fa-user"></i>&nbsp;&nbsp;About me</a></li>
			<li><a href="#resume"><i class="fa fa-file-pdf-o"></i>&nbsp;&nbsp;Resume</a></li>
			<li><a href="#jpl"><i class="fa fa-rocket"></i>&nbsp;&nbsp;JPL NASA</a></li>
			<li><a href="#tbg">The Brannen Group</a></li>
			<li><a href="#redteal">RedTeal</a></li>
			<li><a href="#education"><i class="fa fa-graduation-cap"></i>&nbsp;&nbsp;Education</a></li>
		<?php else: ?>
			<li><a href="/sarabostani/"><i class="fa fa-home"></i> Home</a></li>
		<?php endif; ?>
			<!-- <li><a href="?view=ip">Image Processing</a></li> -->
			<!-- <li><a href="?view=webgl">WebGL</a></li> -->
		</ul>
	</div>
</div>