import { createElement } from "./utilities";
import { configPortfolioElement } from "./config";

const portfolioElement = (props) => {

    const {imageSrc, description, url, veilColor} = props;
    
    const {
        portfolioElementContainerConfig,
        portfolioElementBackgroundImageConfig,
        portfolioElementBackgroundVeilConfig,
        portfolioElementDescriptionContainerConfig,
        portfolioElementDescriptionConfig,
        portfolioElementVisitDemoButtonConfig,
        portfolioElementHoverControlDivConfig

    } = configPortfolioElement;

    const portfolioElementContainer = createElement(portfolioElementContainerConfig)
    const portfolioElementBackgroundImage = createElement({...portfolioElementBackgroundImageConfig, src : imageSrc});
    const portfolioElementBackgroundVeil = createElement(portfolioElementBackgroundVeilConfig);
    const portfolioElementDescriptionContainer = createElement(portfolioElementDescriptionContainerConfig);
    const portfolioElementDescription = createElement({...portfolioElementDescriptionConfig, innerText : description});
    const portfolioElementVisitDemoButton = createElement(portfolioElementVisitDemoButtonConfig);
    const portfolioElementHoverControlDiv = createElement(portfolioElementHoverControlDivConfig);

    portfolioElementBackgroundVeil.style.backgroundColor = veilColor;
    

    portfolioElementVisitDemoButton.addEventListener('click', (e) => {
        e.preventDefault();
        window.open(url, '_blank');
        portfolioElementVisitDemoButton.removeEventListener('click', (e) => {
            e.preventDefault();
            window.open(url, '_blank');
        });
    });
    
    portfolioElementContainer.addEventListener('mouseover', (e) => {
        e.preventDefault();
        portfolioElementDescriptionContainer.style.animationName = "display";
        portfolioElementContainer.removeEventListener('mouseover', (e) => {
            e.preventDefault();
            portfolioElementDescriptionContainer.style.animationName = "display";
        });
    });

    portfolioElementContainer.addEventListener('mouseout', (e) => {
        e.preventDefault();
        portfolioElementDescriptionContainer.style.animationName = "displayNot";
        portfolioElementContainer.removeEventListener('mouseout', (e) => {
            e.preventDefault();
            portfolioElementDescriptionContainer.style.animationName = "displayNot";
        });
    });

    


    portfolioElementDescriptionContainer.appendChild(portfolioElementDescription);
    portfolioElementDescriptionContainer.appendChild(portfolioElementVisitDemoButton);

    portfolioElementContainer.appendChild(portfolioElementBackgroundImage);
    portfolioElementContainer.appendChild(portfolioElementBackgroundVeil);
    portfolioElementContainer.appendChild(portfolioElementDescriptionContainer);
    portfolioElementContainer.appendChild(portfolioElementHoverControlDiv);


    return portfolioElementContainer;

}

export default portfolioElement