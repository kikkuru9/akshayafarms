import ContactComponent from "./contact";
import FotterComponent from "./fotter";
import HomeComponent from "./home";
import ProductComponent from "./product";

function MenuComponent(){
    return(
        <div>
            <nav class="navbar navbar-expand-lg bg-body-success" id="menubar">
  <div class="container-fluid">
    <div class='col-6'>
    <a class="navbar-brand" href="#fotter"><img src='aflogo.jpeg' class='logo' id="logos"/></a></div>
    <div class='clo-6'><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button></div>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#product">Products</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#contact">Contact</a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
<HomeComponent/>
<ProductComponent/>
<ContactComponent/>
<FotterComponent/>
        </div>
    )
}
export default MenuComponent;

