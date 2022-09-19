import React from 'react';
import StructuredList from '../../core-components/StructuredList.js';
import TabAccordion from '../../core-components/TabAccordion';
import Input from '../../core-components/Input.js';
import Checkbox from '../../core-components/Checkbox.js';
import Radio from '../../core-components/Radio.js';
import Card from '../../core-components/Card.js';
import Logo from '../../core-components/Logo.js';
import Loader from '../../core-components/Loader.js';
import Accordion from '../../core-components/Accordion.js';
import LogoSVG from '../../svg/LogoSVG.js';
import TickSVG from '../../svg/TickSVG.js';
import SearchSVG from '../../svg/SearchSVG.js';
import DownArrow from '../../svg/DownArrow.js';
import UpArrow from '../../svg/UpArrow.js';
import SearchBar from '../../core-components/SearchBar.js';

import ExampleForm from '../../components/ExampleForm.js';


export default function Home() {


    // Data for structured list
    const columns = ['Who', 'Income Affected', 'The details', 'Relief'];
    const data = [
        ['High earners', '£100,000 - £121,200', 'Personal allowance', '60%'],
        ['Child benefit', '£50,000 - £60,000', 'Tax charge of 1% of benefit for each £100 over £50,000', 'Dependent on number of children. Over 70% for 4 children.'],
        ['Bond gains', 'Sliced gains that can be moved under higher or additional rate threshold<br /> <br />Full gains that are within high earner or child benefit traps', 'A pension contribution in the year a gain is made will extend the tax thresholds mitigating or limiting higher rates of tax', 'Depends on gain size, it can be over 100% (or free money as I like to call it).'],
        ['CGT', 'Those with gains over the higher rate threshold', 'A pension contribution in the year a gain is made will extend the tax thresholds mitigating or limiting higher rates of tax', '30% (for something that would be taxed at 28%)'],
    ];


    return (
        <div className="home-page">
            <div className="home-page_welcome">
                <h1>Template: React-Basic</h1>
            </div>

            <h2>Logo</h2>
            <LogoSVG />
            <Logo />



            <h2>Buttons</h2> 
            <div className="row">
                <button className="btn-1 btn-sm">btn-1-sm</button>
                <button className="btn-1-alt">btn-1-alt</button>
                <button className="btn-1 btn-lg">btn-1-lg</button>
            </div>
            <div className="row">
                <button className="btn-2 btn-sm">btn-2-sm</button>
                <button className="btn-2-alt">btn-2-alt</button>
                <button className="btn-2 btn-lg">btn-2-lg</button>
            </div>



            <h2>Individual Form Components</h2>
            {/* These are form components that you would use without any vaidation */}
            <Input 
                label="Example Input:"
                placeholder="Example placeholder"
                type="text"
            />
            <Checkbox label="Click" />
            <Radio
                items={["option1", "option2", "option3", "option4", "option5"]}
                checked="option2"
                name="ExampleRadio"
                label="Pick an option:"
            />
            <SearchBar />



            <h2>Form</h2>
            {/* This is an example of a wee validation form */}
            <div className="col12">
                <Card>
                    <ExampleForm/>
                </Card>
            </div>



            <h2>Grid</h2>
            {/* Simple grids: col2 - 50/50, col3 - 33/33/33, col4 - 25/25/25/25, col12 - 33/66, col121 - 25/50/25 */}
            <div className="col121">
                <div className="col1" style={{backgroundColor: "blue", height: "100px"}} />
                <div className="col2" style={{backgroundColor: "navy", height: "100px"}} />
                <div className="col1" style={{backgroundColor: "blue", height: "100px"}} />
            </div>



            <h2>Structured List</h2>
            <StructuredList
                columns={columns}
                data={data}
                verticalAlignMiddle
                small={false}
                boxed={false}
                neverFlat={false}
                flat={false}
            />



            <h2>Tab-Accordion</h2>
            <TabAccordion
                sectionHeaders={['Heading 1', 'Heading 2', 'Heading 3', 'Heading 4']}
				sectionContent={['Content 1', 'Content 2', 'Content 3', 'Content 4']}
				type="responsive"
            />

            <h2>Card</h2>
            <Card elevated>
                <div>
                    Card example
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
            </Card>
            <Card banner elevated>
                <div>
                    Card example
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
            </Card>



            <h2>Loader</h2>
            <Loader />



            <h2>Accordion</h2>
                <div className="col12">
                    <div className="col2">
                        <Accordion
                            header='Instructions'
                            content={<ol><li>1. Do this</li><li>2. Do that</li><li>3. Do this</li></ol>} />
                    </div>
                </div>


            <h2>SVG</h2>
            <TickSVG />
            <SearchSVG />
            <DownArrow />
            <UpArrow />
        </div>
    );
}