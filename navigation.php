
<div class="sidebar">
        
      <div class="logo_details">
          <div class="logo">
            <i class='bx bx-moon'></i>
            <span class="logo_name">DRamirez</span>
          </div>
          <i class="bx bx-menu" id="btn"></i>
      </div>
          <ul class="nav_links">
              <li <?php if ($thisPage=="Home Page") echo " id=\"currentpage\""; ?>><a href="#">
                  <i class='bx bx-home'></i>
                  <span class="link_name">Home</span>
                  <span class="tooltip">Home</span></a>
              </li>
              <li <?php if ($thisPage=="Resume") echo " id=\"currentpage\""; ?>><a href="#">
                  <i class='bx bx-paperclip'></i>
                  <span class="link_name">Resume</span>
                  <span class="tooltip">Resume</span></a>
              </li>

              <li <?php if ($thisPage=="JavaScript Games") echo " id=\"currentpage\""; ?>>
                  <div class="icon_link" >
                      <a href="#">
                      <i class='bx bxl-javascript' ></i>
                      <span class="link_name">JS Games</span>
                      <span class="tooltip">JS Games</span></a>
                      <!--i class='bx bxs-chevron-down' ></i-->
                  </div>
              </li>

              <li <?php if ($thisPage=="Java Swing GUI") echo " id=\"currentpage\""; ?>><a href="#">
                  <i class='bx bxl-java' ></i>
                  <span class="link_name">Java Swing GUIs</span>
                  <span class="tooltip">Java Swing</span></a>
              </li>
              <li <?php if ($thisPage=="API Page") echo " id=\"currentpage\""; ?>><a href="#">
                  <i class='bx bx-transfer'></i>
                  <span class="link_name">API Integration</span>
                  <span class="tooltip">API Integration</span></a>
              </li>
              <li <?php if ($thisPage=="Data Visualization") echo " id=\"currentpage\""; ?>><a href="#">
                  <i class='bx bx-data' ></i>
                  <span class="link_name">Data Visualization</span>
                  <span class="tooltip">Data Visuals</span></a>
              </li>
              <li <?php if ($thisPage=="Graphic Design") echo " id=\"currentpage\""; ?>><a href="#">
                  <i class='bx bx-landscape'></i>
                  <span class="link_name">Graphic Design</span>
                  <span class="tooltip">Graphic Design</span></a>
              </li>
              <li <?php if ($thisPage=="PContact Page") echo " id=\"currentpage\""; ?>><a href="#">
                  <i class='bx bx-mail-send'></i>
                  <span class="link_name">Contact</span>
                  <span class="tooltip">Contact</span></a>
              </li>
            </ul>

            <!--div class="media_icons">
              <a href="#"><i class="fab fa-facebook-f"></i></a>
              <a href="#"><i class="fab fa-twitter"></i></a>
              <a href="#"><i class="fab fa-instagram"></i></a>
          </div-->

            <div class="profile_content">
              <div class="profile">
                <div class="profile_details">
                  <img src="images/small-mugshot.jpg" alt="profileImage">
                  <div class="name_job">
                    <div class="name">Diana Ramirez</div>
                    <div class="job">Software Engineer</div>
                  </div>
                </div>
              </div>  
            </div>
            
          </div>