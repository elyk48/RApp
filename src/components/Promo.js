
import PromoHeading from "./PromoHeading";

const data = {
heading :"99% of all items",
callToAction : "Everything must go"

}
function Promo() {
    return (
        <div className="promo-section">
            <div>
                <h1>Don't miss this deal!</h1>
                <PromoHeading  heading={data.heading}
                callToAction={data.callToAction}/>
                </div>
                <div>
                <h2>Subscribe to my newsletter and get all the shop items at 50% off!</h2>
            </div>
        </div>
    );
};

export default Promo;