import React, { Component } from "react";
import { Link, Route, Redirect } from "react-router-dom";
import { Container, Row, Col, Nav, NavItem, Card, CardHeader, CardBody, CardFooter, CardText } from "reactstrap";
import { urls } from "../../routes";

import TapesInfoFaqQuestion from "./TapesInfoFaqQuestion";

class TapesInformationCenter extends Component {
    render() {
        return (
            <div>
                <Nav tabs className="mb-4">
                    <NavItem>
                        <Link className="nav-link" to={urls.divisions.tapes.info.faq}>FAQ</Link>
                    </NavItem>
                    <NavItem>
                        <Link className="nav-link" to={urls.divisions.tapes.info.applications}>Applications</Link>
                    </NavItem>
                    <NavItem>
                        <Link className="nav-link" to={urls.divisions.tapes.info.quality}>Quality</Link>
                    </NavItem>
                    <NavItem>
                        <Link className="nav-link" to={urls.divisions.tapes.info.glossary}>Glossary</Link>
                    </NavItem>
                </Nav>
                <Route path="/divisions/agt-tapes/information-center" component={ Views }/>
            </div>
        );
    }
}

class TapesInfoRedirect extends Component {
    render() {
        return (
            <Redirect to={urls.divisions.tapes.info.default} />
        );
    }
}

class TapesInfoFaq extends Component {
    questions = [
        {
            question: "Do you do custom sizes, colors, cuts, and shapes?",
            answer: "Yes! we are a coating and converting company, meaning, we have the capability to coat almost any material as well as provide you with custom sizes, shapes, and cuts to fit your adhesive tape application."
        },
        {
            question: "What is the difference between rubber and acrylic-based adhesives?",
            answer: "Rubber-based adhesives have an aggressive and immediate bond to a variety of surfaces but are not the preferable adhesives for sunlight exposure as well as flexibility. Acrylic-based adhesives provide a higher temperature resistance, perform well in exposed sunlight and work with flexible materials. Acrylic adhesives usually take 24-48 hours to reach full strength in bonding."
        },
        {
            question: "What is Pressure Sensitive Adhesive (PSA)?",
            answer: "Pressure sensitive adhesive (PSA) tape can be defined as a continuous flexible strip of cloth, paper, metal or plastic coated on one or both sides with a permanently tacky adhesive at room temperature which will adhere to a variety of surfaces with light pressure."
        },
        {
            question: "How long does removable adhesive hold?",
            answer: "Once bonded on a clean surface, removable adhesives can last over 12 months and still remove cleanly. Exposure to sunlight and extreme temperatures can reduce the holding power of these adhesives."
        },
        {
            question: "What is the best way to clean a surface before applying tape?",
            answer: "Using a 50/50 mixture of isopropyl alcohol and water then drying with a clean lint-free cloth is the simplest way to make sure a surface is clean. Using products that can leave a residue, such as commercial window cleaners are not recommended."
        },
        {
            question: "Which adhesive can withstand the outdoors?",
            answer: "Acrylic adhesives provide a wider temperature range and are usually better suited for outdoor use. All pressure sensitive adhesives need to be applied at ambient temperature for best results."
        },
        {
            question: "How much weight can foam tape hold?",
            answer: "Permanent adhesives such as Pop Stick™, can hold up to 1lb PSI. Removable adhesives such as Temp Tape can hold up 1/2lb PSI. Conditions and variables do apply and can produce different results."
        },
        {
            question: "What thickness of foam should I use?",
            answer: 'For most POP display applications, use 1/32" thickness. For corrugated or textured surfaces, a 1/16" thickness would be better. Greater thicknesses are available to add gap filling as needed.'
        },
        {
            question: "What is the difference between a silicon-based adhesive and other adhesives?",
            answer: "Silicones have special properties compared to other adhesives. They have a wide temperature range with low temperatures of -100°F (-75°C) and very good temperature stability up to 390°F (200°C) with continuous exposure up to 575°F (300°C) for short periods. The properties of silicones remain virtually unchanged over this temperature range. Silicones have excellent resistance to moisture, chemicals, and weathering. They bond well to silicone foams and rubbers. Silicones are also used for splicing silicone release coated materials. Silicone Adhesives are also used in various masking applications where clean removability is required."
        }
    ]
    render() {
        return (
            <div>
                <h4 className="mb-4">FAQ</h4>
                <hr />
                <div>
                    {this.questions.map((q, index) => (
                        <TapesInfoFaqQuestion key={index} qkey={index} question={q.question} answer={q.answer} />
                    ))}
                </div>
            </div>
        );
    }
}

class TapesInfoApplications extends Component {
    render() {
        return (
            <div>
                <h4 className="mb-4">Applications</h4>
                <hr />
                <div>
                    <h5 className="mb-3">Tips for obtaining an optimal bond</h5>
                    <p>Silicone Adhesive Rubber base adhesives provide a greater initial adhesion (initial tack), which is an immediate stick when needed for load bearing.</p>
                    <p>Proper cleaning reduces any contamination on the surface and allows for the best way to improve the bond of the adhesive.</p>
                    <p>Apply firm pressure evenly across the entire surface to provide a stronger bond of the adhesive. Foam tapes create a greater surface contact when adhering to rough or irregular surfaces.</p>
                    <p>To firmly secure edges of the adhesive applied materials, apply pressure to the tape from the top-down or center out the material to proved extra tension toedges.</p>
                    <p>To experience the perfect bond, adhesives are recommended to be applied at a temperature anywhere between 65°F and 100°F. The adhesive as well as the application surface must be at ambient temperatures.</p>
                </div>
                <hr />
                <div>
                    <h5 className="mb-3">Adhesion</h5>
                    <p>Adhesion is the bond or force of attraction between two materials or substrates. The strength of a bond is determined by the surface energy of the applicant. The higher the surface energy, the greater the attraction.</p>
                    <p>Adhesion characteristics are different depending on the surface it is applied to. Knowing the substrate used helps to determine the proper adhesive chemicals to use to produce a quality bond.</p>
                    <p>The texture of the applicant is also a variable in the affect of the adhesion. Smooth surfaces are easier to bond to than textured or rough surfaces.</p>
                    <p>AGT's application technicians can analyze your substrate and external factors for your bond in order to help you determine the best product(s) for your application.</p>
                </div>
                <hr />
                <div>
                    <h5 className="mb-3">Substrates</h5>
                    <p>Many applications are involved with two substrates. One will bond with the unwind adhesive during a converting process known as "lamination". The second will bond with a liner side adhesive known as 'mounting".</p>
                    <div className="ml-3">
                        <h6>Surface Energy</h6>
                        <p>Surface Energy is the amount of resistance a substrate will affect the adhesives ability to "wet out" or spread over the application. For example Low Surface Energy (LSE) materials resist adhesive wet out, making bonding to the surface difficult. A rubber and acrylic based adhesives typically provide a stronger adhesion to LSE substrates.</p>
                        <h6>Surface Texture</h6>
                        <p>The texture of a surface area can affect the adhesive bond strength. Very rigid textured materials do not allow a 100% contact of the adhesive (less contact + less adhesion area = lower bond strength).</p>
                        <h6>Performance improvements on rigid textured materials:</h6>
                        <ul>
                            <li>Greater adhesive mass allows for more surface area to be bonded.</li>
                            <li>Softer adhesives have better flow properties.</li>
                            <li>Aggressive adhesives maximizes adhesion strength at contact areas.</li>
                            <li>Flexible tape conforms into the texture.</li>
                        </ul>
                        <h6>Surface Contamination</h6>
                        <p>Contamination on surfaces can prevent an effective bond from the adhesive. To avoid common surface contamination, simply clean the area (by washing or flame treating) to ensure a stronger bond.</p>
                        <h6>Common Contaminants:</h6>
                        <ul>
                            <li>Dust</li>
                            <li>Ultraviolet light</li>
                            <li>Temperature</li>
                            <li>Surface coating</li>
                            <li>Humidity</li>
                            <li>Physical stress</li>
                            <li>Chemicals</li>
                            <li>Surface contact</li>
                            <li>Time</li>
                            <li>Weather</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div>
                    <h5 className="mb-3">Bonding Strength</h5>
                    <p>Adhesive strengths can be matched to the substrate and stress to which the adhesion will be exposed to. Most tapes perform at a higher bond when the primary stress is tensile or shear. In some industries a combination of stresses may involve cleavage and peel.</p>
                    
                    <Container className="p-0">
                        <Row>
                            <Col lg="3" sm="6">
                                <Card className="mb-2">
                                    <CardHeader tag="h6">
                                        Tensile
                                    </CardHeader>
                                    <img className="w-100 py-3" src="/images/infographics/bonding-tensile.png" alt="Tensile Bonding" />
                                    <CardFooter>
                                        The pulling of equal of force over the entire bond. The pull direction is usually straight and away from the adhesion bond.
                                    </CardFooter>
                                </Card>
                            </Col>
                            <Col lg="3" sm="6">
                                <Card className="mb-2">
                                    <CardHeader tag="h6">
                                        Shear
                                    </CardHeader>
                                    <img className="w-100 py-3" src="/images/infographics/bonding-shear.png" alt="Shear Bonding" />
                                    <CardFooter>
                                        The pulling directed across the adhesive, forcing the substrates to slide over each other.
                                    </CardFooter>
                                </Card>
                            </Col>
                            <Col lg="3" sm="6">
                                <Card className="mb-2">
                                    <CardHeader tag="h6">
                                        Cleavage
                                    </CardHeader>
                                    <img className="w-100 py-3" src="/images/infographics/bonding-cleavage.png" alt="Cleavage Bonding" />
                                    <CardFooter>
                                        The pulling that is concentrated at one or more edges of the joint which exerts a force on the bond.
                                    </CardFooter>
                                </Card>
                            </Col>
                            <Col lg="3" sm="6">
                                <Card className="mb-2">
                                    <CardHeader tag="h6">
                                        Peel
                                    </CardHeader>
                                    <img className="w-100 py-3" src="/images/infographics/bonding-peel.png" alt="Peel Bonding" />
                                    <CardFooter>
                                        Concentrated along a thin edge of the bond where one substrate is flexible. The adhesive would separate and peeled away from its mating surface.
                                    </CardFooter>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <hr />
                <div>
                    <h5 className="mb-3">Adhesive Characteristics</h5>
                    <h6>Rubber-Based</h6>
                    <p>A rubber-based adhesive provides the most cost effective solution for a variety of applications. It's ability to immediately and aggressively bond to many different surfaces makes it the first option when using double sided adhesive.</p>
                    <p className="font-italic">Characteristics:</p>
                    <ul>
                        <li>High initial adhesion</li>
                        <li>Some adhesion build up</li>
                        <li>Good shear strength</li>
                        <li>Moderate temperature resistance</li>
                        <li>Fair UV resistance</li>
                        <li>Poor plasticizer resistance</li>
                    </ul>
                    <h6>Acrylic-Based</h6>
                    <p>Pure acrylic adhesive is able to withstand extreme UV exposure better then a rubber-based. Acrylic adhesives are resistant to plasticizers but will typically require longer set-up time to create a strong bond, generally 24-48 hours.</p>
                    <p className="font-italic">Characteristics:</p>
                    <ul>
                        <li>Fair initial adhesion</li>
                        <li>Gradual adhesion build up</li>
                        <li>High shear strength</li>
                        <li>High temperature resistance</li>
                        <li>Excellent UV resistance</li>
                        <li>Good plasticizer resistance</li>
                    </ul>
                    <h6>Modified Acrylic-Based</h6>
                    <p>Modified acrylic contains the best properties of both rubber and acrylic-based adhesives. These adhesives are UV resistant, withstand higher temperatures, and bonds well to many substrates with a higher initial tack.</p>
                    <h6>Silicon-Based</h6>
                    <p>Silicones have special properties compared to other adhesives. They have a wide temperature range with low temperatures of -100&deg;F (-75&deg;C) and very good temperature stability up to 390&deg;F (200&deg;C) with continuous exposure up to 575&deg;F (300&deg;C) for short periods.</p>
                    <p>The properties of silicones remain virtually unchanged over this temperature range. Silicones have excellent resistance to moisture, chemicals, and weathering. They bond well to Silicone foams and rubbers. Silicones are also used for splicing silicone release coated materials. Silicone adhesives are also used in various masking applications where clean removability is required.</p>
                    <h6>Removable Adhesives</h6>
                    <p>Removable adhesives are a short-term, non-permanent Adhesive that can easily be removed with little to no residue. They are nonaggressive adhesives, but can still hold strong for over 12 months. AGT offers double or single-sided removable adhesive tapes.</p>
                </div>
            </div>
        );
    }
}

class TapesInfoQuality extends Component {
    render() {
        return (
            <div>
                <h4 className="mb-4">Quality</h4>
                <hr />
                <p>As an <a href="/images/company/agt-iso-9001-certificate.pdf" target="_blank">ISO:9001 certified company</a>, AGT provides quality adhesive testing with our state of the art quality machinery. With maturing ovens to accurately predict the aging process of your adhesive known as AAT (Accelerated Aging Test), to Sticking measurements which measures the strength of the adhesive bond against gravity (Cohesion Testing). With our lab testing equipment we can match any previous adhesive bonds you may have from previous suppliers matching it identically.</p>
                <div>
                    <h5 className="mb-3">Quality Application Tests</h5>
                    <Container className="p-0">
                        <Row>
                            <Col xl="6" sm="12" className="d-flex align-items-stretch">
                                <Card className="mb-3">
                                    <CardHeader tag="h6">
                                        Adhesion
                                    </CardHeader>
                                    <CardBody>
                                        <CardText>
                                            Adhesion is the force of attraction between the adhesive and the contact surface. The strength of the adhesion is determined by the applications Surface Energy and chemical compounds of the adhesive.
                                        </CardText>
                                    </CardBody>
                                    <div className="h-100 w-100 d-flex align-items-center">
                                        <img className="w-100 p-3" src="/images/infographics/test-adhesion.png" alt="Adhesion Test" />
                                    </div>
                                    <CardFooter>
                                        <em>Testing Process: </em><br />The adhesive tape is pulled at a 90&deg; or 180&deg; angle, 12" per min pressure.
                                    </CardFooter>
                                </Card>
                            </Col>
                            <Col xl="6" sm="12" className="d-flex align-items-stretch">
                                <Card className="mb-3">
                                    <CardHeader tag="h6">
                                        Tack
                                    </CardHeader>
                                    <CardBody>
                                        <CardText>
                                            Tack is the property of pressure-sensitive adhesive (PSA) that allows it to adhere to a surface with very light pressure needed know as "Quick Stick".
                                        </CardText>
                                    </CardBody>
                                    <div className="h-100 w-100 d-flex justify-content-center align-items-center">
                                        <img className="w-75 p-3" src="/images/infographics/test-tack.png" alt="Tack Test" />
                                    </div>
                                    <CardFooter>
                                        <em>Testing Process: </em><br />Adhesive tape is lowered and applied to a surface using no pressure until contact is made.
                                    </CardFooter>
                                </Card>
                            </Col>
                            <Col xs="12" className="d-flex align-items-stretch">
                                <Card className="mb-3">
                                    <CardHeader tag="h6">
                                        Cohesion
                                    </CardHeader>
                                    <CardBody>
                                        <CardText>
                                            Cohesion or cohesive strength, refers to the internal strength of the adhesive and its ability to resist splitting caused by shearing forces. Cohesion is measured by its resistance to forces parallel to the application surface.
                                        </CardText>
                                    </CardBody>
                                    <CardFooter>
                                        <em>Testing Process: </em><br />A standard area of adhesive tape is applied to a vertical test panel; a standard weight is suspended to the bottom of the portion of the supported tape. Failure can be conducted by age testing which is gradually and consistently rising the temperature in a oven at which the tape fails called Shear Adhesion Failure Temperature (SAFT).
                                    </CardFooter>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}

class TapesInfoGlossary extends Component {
    terms = [
        {
            term:"Accelerated Aging",
            definition:"A means of reproducing a lavatory aging affect to determine the deterioration of adhesive tapes."
        },
        {
            term:"Accelerated Weathering", 
            definition:"A means of reproducing a lavatory weathering affect to determine the deterioration of adhesive tapes."
        },
        {
            term:"Acrylic", 
            definition:"A synthetic polymer with excellent aging characteristics that can withstand extreme UV exposure and are resistant to plasticizers. Typically requires 24-48 hours to reach full bonding strength."
        },
        {
            term:"Adhesion", 
            definition:"A bond created between pressure sensitive adhesive and a substrate."
        },
        {
            term:"Adhesion Build Up", 
            definition:"An increase in peel adhesion of pressure sensitive adhesive after is has dwelled to the applied surface."
        },
        {
            term:"Adhesive", 
            definition:"A chemical compound material that will hold two or more surfaces together."
        },
        {
            term:"Adhesive Residue", 
            definition:"Adhesive that pulls away from the carrier and remains on the applied surface."
        },
        {
            term:"Backing", 
            definition:"A flexible material that the adhesive is applied to manufacture the end result, tape."
        },
        {
            term:"Bond", 
            definition:"When the material adheres to the adhesive and/or surfaces."
        },
        {
            term:"Carrier", 
            definition:"Refers to the material to which the adhesive is bonded to; particularly in the double faced tapes."
        },
        {
            term:"Closed Cell", 
            definition:"A non-interconnecting cell material structure."
        },
        {
            term:"Conformability", 
            definition:"The ability of adhesive tape to create a complete contact bond with the surface of an irregular surface without creasing."
        },
        {
            term:"Density", 
            definition:"Material\"s weight per unit volume."
        },
        {
            term:"Double Coated", 
            definition:"Adhesive is applied on both (top/bottom) sides of the backing which serves as a carrier."
        },
        {
            term:"Elastic Memory", 
            definition:"The attempt of tapes to return in the original state of length after being elongated."
        },
        {
            term:"Elongation", 
            definition:"The distance a tape will stretch lengthwise."
        },
        {
            term:"EPDM", 
            definition:"A rubber polymer compound that consists of ethylene, propylene, and diene molecules."
        },
        {
            term:"Finger Lift (Kiss-cut)", 
            definition:"Liner paper which extends past the adhesive for easy liner removal."
        },
        {
            term:"Foam", 
            definition:"A synthetic rubber or elastomeric materials that is formed by creating a bubble based material to result in a soft, cushiony material."
        },
        {
            term:"Gloss", 
            definition:"A surface that has a luster, brightness, or shine."
        },
        {
            term:"Hot Melt", 
            definition:"A molten adhesive which cools to form a pressure sensitive adhesive."
        },
        {
            term:"Lamination", 
            definition:"A combination of two or more materials that function as one backing."
        },
        {
            term:"Matte", 
            definition:"A surface that has no luster or gloss; dull finish."
        },
        {
            term:"Modified Acrylic", 
            definition:"A hybrid polymer adhesive that has both the attributes of the regular acrylic and rubber adhesives."
        },
        {
            term:"Mono-Coat (Single-Sided)", 
            definition:"The adhesive is applied to one side of the carrier."
        },
        {
            term:"Peel Adhesion", 
            definition:"The force per unit width to break a bond between the tape and the surface when peeled back at usually 180 degrees."
        },
        {
            term:"Plasticization", 
            definition:"The softening of an adhesive when exposed to plasticizers or oils."
        },
        {
            term:"Plasticizer", 
            definition:"a chemical added to impart flexibility, workability, and strechability."
        },
        {
            term:"Polyethylene", 
            definition:"A strong flexible material that has positive characteristics at low temperatures."
        },
        {
            term:"Polyester", 
            definition:"A strong film material that has resistance to moisture, solvents, oils, and many other chemicals."
        },
        {
            term:"Polypropylene", 
            definition:"A material with similar properties to polyester but stronger and higher temperature resistance."
        },
        {
            term:"PSA", 
            definition:"Pressure Sensitive Adhesive."
        },
        {
            term:"PSI", 
            definition:"Pounds per Square Inch."
        },
        {
            term:"Pressure Sensitive", 
            definition:"Refers to adhesive tapes that require pressure by hand, roller, or machine to bond the surfaces."
        },
        {
            term:"Pressure Sensitive Tape", 
            definition:"A combination of PSA and the backing."
        },
        {
            term:"Priming", 
            definition:"Coating the backing of an adhesive side with a thin layer of adhesive like material that serves as a bonding agent to both the adhesive and backing."
        },
        {
            term:"Quick Stick", 
            definition:"The property of a pressure sensitive adhesive that allows it to adhere to a surface with little to no pressure."
        },
        {
            term:"Release Liner", 
            definition:"A web or sheet of material covering the adhesive side of the tape. It is removed prior to application."
        },
        {
            term:"Shear Adhesion", 
            definition:"The ability of a tape to resist the static forces applied in the same plane as the backing."
        },
        {
            term:"Shear Stress", 
            definition:"The force of a material by slippage along a plane or planes that are parallel to the imposed stress."
        },
        {
            term:"Silicone", 
            definition:"A unique polymer system that can be a very effective release coating or pressure sensitive adhesive capable of functioning effectively at extreme temperatures."
        },
        {
            term:"Silicone Adhesive", 
            definition:"Silicones have special properties compared to other adhesives. They have a wide temperature range with low temperatures of -100|F (-75|C) and very good temperature stability up to 390|F (200|C) with continuous exposure up to 575|F (300|C) for short periods. The properties of silicones remain virtually unchanged over this temperature range. Silicones have excellent resistance to moisture, chemicals, and weathering. They bond well to silicone foams and rubbers. Silicones are also used for splicing silicone release coated materials. Silicone Adhesives are also used in various masking applications where clean removability is required."
        },
        {
            term:"Surface Energy", 
            definition:"The measure of surface tension. The lower the surface energy of a substrate the more difficult for the adhesive to bond."
        },
        {
            term:"Tack", 
            definition:"The ability of a material to adhere instantly to a solid surface when brought into contact by a very light pressure."
        },
        {
            term:"Tensile Strength", 
            definition:"The force exerted to break a piece of tape by pulling on opposite ends."
        },
        {
            term:"Transfer Tape", 
            definition:"Unsupported adhesive applied directly to a release coated liner."
        },
        {
            term:"Transparency", 
            definition:"Allowing transmission of light."
        },
        {
            term:"Web", 
            definition:"The width of any material going through a machine."
        }
    ]
    render() {
        return (
            <div>
                <h4 className="mb-4">Glossary</h4>
                <hr />
                <div>
                    {this.terms.map((term, index) => (
                        <TapesInfoFaqQuestion key={"question" + index} qkey={index} question={term.term} answer={term.definition} />
                    ))}
                </div>
            </div>
        );
    }
}

const Views = ({ match }) => (
    <div>
        <Route exact path={ match.url } component={ TapesInfoRedirect } />
        <Route exact path={ match.url + "/faq" } component={ TapesInfoFaq } />
        <Route exact path={ match.url + "/applications" } component={ TapesInfoApplications } />
        <Route exact path={ match.url + "/quality" } component={ TapesInfoQuality } />
        <Route exact path={ match.url + "/glossary" } component={ TapesInfoGlossary } />
    </div>
);

export default TapesInformationCenter;