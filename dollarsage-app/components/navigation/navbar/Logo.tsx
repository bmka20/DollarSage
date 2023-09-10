import { useEffect, useState } from "react";
import Link from "next/link";


const Logo = () => {
const [width, setWidth] = useState(0);


const updateWidth = () => {
const newWidth = window.innerWidth;
setWidth(newWidth);
};


useEffect(() => {
window.addEventListener("resize", updateWidth);
updateWidth();
}, []);


const [showButton, setShowButton] = useState(false);


const changeNavButton = () => {
if (window.scrollY >= 400 && window.innerWidth < 768) {
setShowButton(true);
} else {
setShowButton(false);
}
};


useEffect(() => {
window.addEventListener("scroll", changeNavButton);
}, []);


return (
<>
<Link href="/" style={{ display: showButton ? "none" : "block" }}>
<div className="flex items-center text-[#F76C6C] ml-[-20px]"> {/* Adjust the negative left margin */}
<img
src="/assets/images/wizard.png"
alt="Logo Image"
className="mr-2"
style={{ width: "64px", height: "64px" }}
/>
<h1 className="font-bold text-3xl">DollarSage</h1>
</div>
</Link>
<div
style={{
display: showButton ? "block" : "none",
}}
>
</div>
</>
);
};


export default Logo;