import {createElement} from './utilities';
import { configPortfolio } from './config';
import portfolioElement from './portfolioElement'
import { portfolioElementInfoList } from '../data/portfolioElementInfoList';

const portfolio = () => {
    const {portfolioContainerConfig} = configPortfolio;

    const portfolioContainer = createElement(portfolioContainerConfig)

    portfolioElementInfoList.forEach(elementInfo => {
        const element = portfolioElement(elementInfo);
        portfolioContainer.appendChild(element);
    })

    return portfolioContainer

}

export default portfolio
