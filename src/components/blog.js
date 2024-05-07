import { Link } from 'react-router-dom';
import React from "react";

function Blog()
{
    return(
        <div>

<div class="container-fluid p-0 nav-bar">
        <nav class="navbar navbar-expand-lg bg-none navbar-dark py-3">
            <Link to="/" class="navbar-brand">
                <h1 class="m-0 display-4 font-weight-bold text-uppercase text-white">Gymnast</h1>
            </Link>
            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                <div class="navbar-nav ml-auto p-4 bg-secondary">
                    <Link to="/" class="nav-item nav-link">Home</Link>
                    <Link to="/about" class="nav-item nav-link">About Us</Link>
                    <Link to="/class" class="nav-item nav-link">Classes</Link>
                    <Link to="/workout" class="nav-item nav-link">Workouts</Link>
                    <Link to="/blog" class="nav-item nav-link">Blog</Link>
                    <Link to="/diet" class="nav-item nav-link">Diet</Link>
                    <Link to="/membership" class="nav-item nav-link">Membership</Link>

                    <Link to="/contact" class="nav-item nav-link">Contact</Link>
                    <Link to="/signup" class="nav-item nav-link">Signup</Link>
                    <Link to="/login" class="nav-item nav-link">Login</Link>
                </div>
            </div>
        </nav>
    </div>
    
    <div class="container-fluid page-header mb-5">
        <div class="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5" >            <h4 class="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase font-weight-bold">Detail Page</h4>
            <div class="d-inline-flex">
                <p class="m-0 text-white"><a class="text-white" href="">Home</a></p>
                <p class="m-0 text-white px-2">/</p>
                <p class="m-0 text-white">Blog</p>
            </div>
        </div>
    </div>
  
    <div class="container py-5">
        <div class="row">
            <div class="col-12">
                <img class="img-fluid mb-4" src="template/img/carousel-1.jpg" alt="Image"/>
                <div class="d-flex align-items-center mb-4">
                    <div class="d-flex flex-column align-items-center justify-content-center rounded-circle bg-primary text-white"
                     >
                        <span>01</span>
                        <strong class="text-uppercase m-0 text-white">Jan</strong>
                        <span>2045</span>
                    </div>
                    <div class="pl-3">
                        <h1 class="font-weight-bold mb-3">Lorem ipsum dolor sit amet</h1>
                        <div class="d-flex">
                            <span class="mr-2 text-muted"><i class="fa fa-user"></i> Admin</span>
                            <span class="mr-2 text-muted"><i class="fa fa-folder"></i> Web Design</span>
                            <span class="mr-2 text-muted"><i class="fa fa-comments"></i> 15 Comments</span>
                        </div>
                    </div>
                </div>
                <p>Sadipscing labore amet rebum est et justo gubergren. Et eirmod ipsum sit diam ut magna lorem. Nonumy vero labore lorem sanctus rebum et lorem magna kasd, stet amet magna accusam consetetur eirmod. Kasd accusam sit ipsum sadipscing et at at sanctus et. Ipsum sit gubergren dolores et, consetetur justo invidunt at et aliquyam ut et vero clita. Diam sea sea no sed dolores diam nonumy, gubergren sit stet no diam kasd vero, eos tempor gubergren clita est consetetur dolores et dolor. Sadipscing lorem kasd labore ea sanctus sanctus, dolores invidunt et consetetur et duo. Tempor dolores accusam sit vero sit, sed labore duo vero et at, et amet et justo gubergren. Labore aliquyam voluptua dolor nonumy lorem. Sanctus sed sadipscing rebum ipsum dolor et ea no. Ipsum elitr sea erat.</p>
                <p>Voluptua est takimata stet invidunt sed rebum nonumy stet, clita aliquyam dolores vero stet consetetur elitr takimata rebum sanctus. Sit sed accusam stet sit nonumy kasd diam dolores, sanctus lorem kasd duo dolor dolor vero sit et. Labore ipsum duo sanctus amet eos et. Consetetur no sed et aliquyam ipsum justo et, clita lorem sit vero amet amet est dolor elitr, stet et no diam sit. Dolor erat justo dolore sit invidunt, sed duo dolor et amet no et. Ut takimata tempor kasd amet kasd ut. No et ipsum amet tempor et. Sed nonumy sed vero ut, sed aliquyam accusam clita dolores tempor est. Ea et takimata consetetur et amet sanctus. Duo no diam ipsum diam dolores, eirmod diam dolores clita sed erat magna. Dolore ut amet ea magna. Sea et dolore sit labore at amet eos. Dolor voluptua sit rebum sit ut nonumy. Dolor amet amet sit sadipscing, lorem.</p>
                <h2 class="mb-4 font-weight-bold">Est dolor lorem et ea</h2>
                <img class="w-50 float-left mr-4 mb-3" src="template/img/blog-1.jpg" alt="Image"/>
                <p>Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua tempor invidunt at est sanctus sanctus. Clita dolores sit kasd diam takimata justo diam lorem sed. Magna amet sed rebum eos. Clita no magna no dolor erat diam tempor rebum consetetur, sanctus labore sed nonumy diam lorem amet eirmod. No at tempor sea diam kasd, takimata ea nonumy elitr sadipscing gubergren erat. Gubergren at lorem invidunt sadipscing rebum sit amet ut ut, voluptua diam dolores at sadipscing stet. Clita dolor amet dolor ipsum vero ea ea eos. Invidunt sed diam dolores takimata dolor dolore dolore sit. Sit ipsum erat amet lorem et, magna sea at sed et eos. Accusam eirmod kasd lorem clita sanctus ut consetetur et. Et duo tempor sea kasd clita ipsum et. Takimata kasd diam justo est eos erat aliquyam et ut. Ea sed sadipscing no justo et eos labore, gubergren ipsum magna dolor lorem dolore, elitr aliquyam takimata sea kasd dolores diam, amet et est accusam labore eirmod vero et voluptua. Amet labore clita duo et no. Rebum voluptua magna eos magna, justo gubergren labore sit voluptua eos. Dolores et no stet magna et gubergren amet dolor sit, lorem dolore est vero et. Justo erat magna ipsum magna sea. Magna amet est sit sed sadipscing. At takimata dolores ut dolore takimata stet nonumy ipsum, gubergren vero ea consetetur aliquyam kasd est magna justo, dolore justo at dolore et aliquyam nonumy lorem gubergren. Amet duo invidunt kasd labore aliquyam. Vero dolores lorem elitr justo ut, accusam erat sed dolor at accusam takimata ipsum sea diam. Ipsum voluptua lorem sed amet, amet sea sit et at nonumy labore takimata, justo ipsum voluptua stet takimata. Ea lorem elitr aliquyam gubergren sit magna sanctus, sed sed dolore ipsum justo dolor et amet invidunt erat. Sadipscing sanctus stet.</p>
                <h3 class="mb-4 font-weight-bold">Est dolor lorem et ea</h3>
                <img class="w-50 float-right ml-4 mb-3" src="template/img/blog-2.jpg" alt="Image"/>
                <p>Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua tempor invidunt at est sanctus sanctus. Clita dolores sit kasd diam takimata justo diam lorem sed. Magna amet sed rebum eos. Clita no magna no dolor erat diam tempor rebum consetetur, sanctus labore sed nonumy diam lorem amet eirmod. No at tempor sea diam kasd, takimata ea nonumy elitr sadipscing gubergren erat. Gubergren at lorem invidunt sadipscing rebum sit amet ut ut, voluptua diam dolores at sadipscing stet. Clita dolor amet dolor ipsum vero ea ea eos. Invidunt sed diam dolores takimata dolor dolore dolore sit. Sit ipsum erat amet lorem et, magna sea at sed et eos. Accusam eirmod kasd lorem clita sanctus ut consetetur et. Et duo tempor sea kasd clita ipsum et. Takimata kasd diam justo est eos erat aliquyam et ut. Ea sed sadipscing no justo et eos labore, gubergren ipsum magna dolor lorem dolore, elitr aliquyam takimata sea kasd dolores diam, amet et est accusam labore eirmod vero et voluptua. Amet labore clita duo et no. Rebum voluptua magna eos magna, justo gubergren labore sit voluptua eos. Dolores et no stet magna et gubergren amet dolor sit, lorem dolore est vero et. Justo erat magna ipsum magna sea. Magna amet est sit sed sadipscing. At takimata dolores ut dolore takimata stet nonumy ipsum, gubergren vero ea consetetur aliquyam kasd est magna justo, dolore justo at dolore et aliquyam nonumy lorem gubergren. Amet duo invidunt kasd labore aliquyam. Vero dolores lorem elitr justo ut, accusam erat sed dolor at accusam takimata ipsum sea diam. Ipsum voluptua lorem sed amet, amet sea sit et at nonumy labore takimata, justo ipsum voluptua stet takimata. Ea lorem elitr aliquyam gubergren sit magna sanctus, sed sed dolore ipsum justo dolor et amet invidunt erat. Sadipscing sanctus stet.</p>
            </div>
            <div class="col-12 pt-4">
                <div class="media bg-secondary text-white mb-4 p-5">
                    <img src="template/img/user.jpg" alt="Image" class="mr-3 mt-1 rounded-circle p-3 bg-dark"
                   />
                    <div class="media-body">
                        <h4 class="text-light mb-3">John Doe</h4>
                        <p class="m-0">Consetetur elitr erat vero sanctus labore dolor ipsum et diam, tempor dolores eos dolor consetetur lorem ipsum, ipsum accusam ipsum sit no ut est. Gubergren ea ipsum erat consetetur magna kasd amet est, voluptua magna elitr ea sit justo sed sanctus. Accusam duo duo sit sit. Ut eos ipsum sed takimata sed dolor justo, elitr no labore amet et et sanctus. Duo invidunt magna diam no clita, ea eos vero sanctus est aliquyam et, dolores gubergren eirmod sea invidunt no kasd. Amet ut sadipscing eirmod et dolore. Sed lorem stet aliquyam ipsum eos.</p>
                    </div>
                </div>
            </div>
            <div class="col-12 py-4">
                <h3 class="mb-4 font-weight-bold">3 Comments</h3>
                <div class="media mb-4">
                    <img src="template/img/user.jpg" alt="Image" class="mr-3 mt-1 rounded-circle"
                     />
                    <div class="media-body">
                        <h4>John Doe <small><i>01 Jan 2045 at 12:00pm</i></small></h4>
                        <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum. Gubergren clita aliquyam consetetur sadipscing, at tempor amet ipsum diam tempor consetetur at sit.</p>
                        <button class="btn btn-sm btn-dark">Reply</button>
                    </div>
                </div>
                <div class="media mb-4">
                    <img src="template/img/user.jpg" alt="Image" class="mr-3 mt-1 rounded-circle"
                        />
                    <div class="media-body">
                        <h4>John Doe <small><i>01 Jan 2045 at 12:00pm</i></small></h4>
                        <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum. Gubergren clita aliquyam consetetur sadipscing, at tempor amet ipsum diam tempor consetetur at sit.</p>
                        <button class="btn btn-sm btn-dark">Reply</button>
                        <div class="media mt-4">
                            <img src="template/img/user.jpg" alt="Image" class="mr-3 mt-1 rounded-circle"
                                />
                            <div class="media-body">
                                <h4>John Doe <small><i>01 Jan 2045 at 12:00pm</i></small></h4>
                                <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum. Gubergren clita aliquyam consetetur sadipscing, at tempor amet ipsum diam tempor consetetur at sit.</p>
                                <button class="btn btn-sm btn-dark">Reply</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
        </div>
    </div>
  
    <div class="footer container-fluid mt-5 py-5 px-sm-3 px-md-5 text-white">
        <div class="row pt-5">
            <div class="col-lg-3 col-md-6 mb-5">
                <h4 class="text-light mb-4">Get In Touch</h4>
                <p><i class="fa fa-map-marker-alt mr-2"></i>123 Street, New York, USA</p>
                <p><i class="fa fa-phone-alt mr-2"></i>+012 345 67890</p>
                <p><i class="fa fa-envelope mr-2"></i>info@example.com</p>

            </div>
            <div class="col-lg-3 col-md-6 mb-5">
                <h4 class="text-light mb-4">Links</h4>
                <div class="d-flex flex-column justify-content-start">
                    <Link class="text-white mb-2" to="/"><i class="fa fa-angle-right mr-2"></i>Home</Link>
                    <Link class="text-white mb-2" to="/about"><i class="fa fa-angle-right mr-2"></i>About Us</Link>
                    <Link class="text-white mb-2" to="/class"><i class="fa fa-angle-right mr-2"></i>Classes</Link>
                    <Link class="text-white mb-2" to="workout"><i class="fa fa-angle-right mr-2"></i>Workouts</Link>
                    <Link class="text-white" to="/blog"><i class="fa fa-angle-right mr-2"></i>Blog</Link>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 mb-5">
                <h4 class="text-light mb-4">Links</h4>
                <div class="d-flex flex-column justify-content-start">
                    <Link class="text-white mb-2" to="/diet"><i class="fa fa-angle-right mr-2"></i>Diet</Link>
                    <Link class="text-white mb-2" to="/membership"><i class="fa fa-angle-right mr-2"></i>Membership</Link>
                    
                    <Link class="text-white mb-2" to="/contact"><i class="fa fa-angle-right mr-2"></i>Contact</Link>
                    <Link class="text-white mb-2" to="/signup"><i class="fa fa-angle-right mr-2"></i>Signup</Link>
                    <Link class="text-white mb-2" to="/login"><i class="fa fa-angle-right mr-2"></i>Login</Link>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 mb-5">
                <h4 class="text-light mb-4">Opening Hours</h4>
                <h5 class="text-white">Monday - Friday</h5>
                <p>8.00 AM - 8.00 PM</p>
                <h5 class="text-white">Saturday - Sunday</h5>
                <p>2.00 PM - 8.00 PM</p>
            </div>
        </div>
        <div class="container border-top border-dark pt-5">
            <p class="m-0 text-center text-white">
                &copy; <Link class="text-white font-weight-bold" to="#">Your Site Name</Link>. All Rights Reserved. Designed by
                <Link class="text-white font-weight-bold" to="https://htmlcodex.com">HTML Codex</Link>
            </p>
        </div>
    </div>
   
    <a href="#" class="btn btn-outline-primary back-to-top"><i class="fa fa-angle-double-up"></i></a>

        </div>
    )
}

export default Blog;