import JavascriptIcon from '../assets/logo/JavaScript.svg';
import PythonIcon from '../assets/logo/Python.svg';
import SwiftIcon from '../assets/logo/Swift.svg';
import HtmlIcon from '../assets/logo/HTML5.svg';
import CssIcon from '../assets/logo/CSS3.svg';
import BootstrapIcon from '../assets/logo/Bootstrap.svg';
import ReactIcon from '../assets/logo/React.svg';
import ReduxIcon from '../assets/logo/Redux.svg';
import SassIcon from '../assets/logo/Sass.svg';
import NodeIcon from '../assets/logo/NodeJs.svg';
import VscodeIcon from '../assets/logo/VisualStudioCode.svg';
import VsIcon from '../assets/logo/VisualStudio.svg';
import XcodeIcon from '../assets/logo/Xcode.svg';
import GitIcon from '../assets/logo/Git.svg';
import GithubIcon from '../assets/logo/GitHub.svg';
import FigmaIcon from '../assets/logo/Figma.svg';

import SQLiteIcon from '../assets/logo/SQLite.svg';

import AdobephotoshopIcon from '../assets/logo/PhotoShop_Adobe.png';
import IllustratorIcon from '../assets/logo/Illustrator_Adobe.png';
import CanvaIcon from '../assets/logo/Canva.png';
import DotnetIcon from '../assets/logo/DotNet.png';
import CsharpIcon from '../assets/logo/CSharp.svg';
import ExpressIcon from '../assets/logo/Express.svg';
import WpfIcon from '../assets/logo/WPF.jpg';

import ip from '../assets/logo/ip-api.png';
import myMemory from '../assets/logo/MyMemoryAPI.png';
import openWeather from '../assets/logo/OpenWeatherMapAPI.png'
import quoteable from '../assets/logo/QuotableAPI.svg';
import openCountries from '../assets/logo/RestCountries.png';

export const languages = [
    { name: 'JavaScript', iconSrc: JavascriptIcon },
    { name: 'Python', iconSrc: PythonIcon },
    { name: 'C Sharp', iconSrc: CsharpIcon },
    { name: 'Swift', iconSrc: SwiftIcon },
    { name: 'HTML', iconSrc: HtmlIcon },
    { name: 'CSS', iconSrc: CssIcon }
];
export const databases = [
    {name: 'SQLite', iconSrc: SQLiteIcon }
];
export const frameworks = [
    { name: 'Dot NET', iconSrc: DotnetIcon },
    { name: 'WPF', iconSrc: WpfIcon },
    { name: 'Bootstrap', iconSrc: BootstrapIcon }
];
export const libraries = [
    { name: 'React', iconSrc: ReactIcon },
    { name: 'Redux', iconSrc: ReduxIcon }
];
export const preprocessor = [
    { name: 'Sass', iconSrc: SassIcon }
];
export const runtime = [
    { name: 'NodeJs', iconSrc: NodeIcon },
    { name: 'Express', iconSrc: ExpressIcon }
];
export const devTools = [
    { name: 'Visual Studio Code', iconSrc: VscodeIcon },
    { name: 'Visual Studio', iconSrc: VsIcon },
    { name: 'Xcode', iconSrc: XcodeIcon }
];
export const versionControl = [
    { name: 'Git', iconSrc: GitIcon },
    { name: 'GitHub', iconSrc: GithubIcon }
];
export const designTools = [
    { name: 'Figma', iconSrc: FigmaIcon },
    { name: 'Adobe Photoshop', iconSrc: AdobephotoshopIcon },
    { name: 'Illustrator', iconSrc: IllustratorIcon },
    { name: 'Canva', iconSrc: CanvaIcon }
];

export const apis = [
    { name: "ip-api", iconSrc: ip },
    { name: "MyMemoryAPI", iconSrc: myMemory },
    { name: "OpenWeatherMapAPI", iconSrc: openWeather },
    { name: "QuotableAPI", iconSrc: quoteable },
    { name: "RestCountries", iconSrc: openCountries }
]

export const allSkills = [
    ...languages,
    ...databases,
    ...frameworks,
    ...libraries,
    ...preprocessor,
    ...runtime,
    ...devTools,
    ...versionControl,
    ...designTools,
    ...apis,
];


