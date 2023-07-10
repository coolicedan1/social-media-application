const navigation = () => {
  return(
  <div className="header">
      <nav class="navbar navbar-expand-lg">
        <div class="container">
          <a class="navbar-brand" href="index.html"><h2>TrueFace<em>.</em></h2></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="mh-head second">
			     <form class="mh-form">
				    <input placeholder="search" />
				    <a href="#/" class="fa fa-search"></a>
			     </form>
		      </div>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <a class="nav-link" href="index.html">Home
                  <span class="sr-only">(current)</span>
                </a>
              </li> 
              <li class="nav-item">
                <a class="nav-link" href="about.html">Groups</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="blog.html">Messenger</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="post-details.html">Post Details</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contact.html">Notifications</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  </div>
  );
  
}

export default navigation;