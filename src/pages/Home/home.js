import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/img/logo.png'
import Owners from '../../assets/img/group.jpg'
import './home.css'
import ScrollToTop from '../../components/scrolltotop'
import Scroll from '../../components/scroll'

export default function home() {
    return (
        <div className="box-area">
            <ScrollToTop/>
            <Scroll showBellow={500}/>
            <header>
                <div className="wrapper">
                    <div className="logo">
                        <Link to="/">
                            <img src={Logo} alt="Logo-img"/>
                        </Link>
                    </div>
                        <nav>
                            <Link to="/">Home</Link>
                            <Link to="/">About Us</Link>
                            <Link to="/">News</Link>
                        </nav>
                    </div>
            </header>
            <div className="banner-area">
                <h2>Welcome to Blue Ridge Coffee</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque semper tristique volutpat. Proin ligula ex, cursus a accumsan quis, mattis id sapien. Ut finibus justo enim, finibus hendrerit tellus lobortis vel. Maecenas vel mollis augue. Nam tempor lacinia nisl. Proin vitae rhoncus ex. Vestibulum a erat tortor. Aenean ultricies lorem ut mauris mattis commodo. Ut sit amet lacinia erat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus eu tellus orci. Integer posuere nec massa ac egestas.</p>    
            </div>
            <div className="content-area">
                <div className="wrapper">
                    <h2>About us</h2>
                    <div className="img-content">
                        <img src={Owners} alt="owners"/>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque semper tristique volutpat. Proin ligula ex, cursus a accumsan quis, mattis id sapien. Ut finibus justo enim, finibus hendrerit tellus lobortis vel. Maecenas vel mollis augue. Nam tempor lacinia nisl. Proin vitae rhoncus ex. Vestibulum a erat tortor. Aenean ultricies lorem ut mauris mattis commodo. Ut sit amet lacinia erat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus eu tellus orci. Integer posuere nec massa ac egestas.</p>
                </div>
            </div>          
        </div>
    )
}
