import React, {useState} from "react"
const Footer = () => {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

 
  



    return (<>
    <div class="footer">
    <p class="footer__bottom-text">
        &copy; <span className="footer__year">{currentYear}</span> <span>LumpBoosters</span>  <span> made by mf LB team</span>
    </p>
</div>

    
    </>)
}
export default Footer






