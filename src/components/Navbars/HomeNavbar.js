
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  NavLink,
} from "reactstrap";

// export default function HomeNavbar() {
const HomeNavbar = () => {

  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  React.useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeNavbarColor);
    };
  }, []);
  const changeNavbarColor = () => {
    if (
      document.documentElement.scrollTop > 299 ||
      document.body.scrollTop > 299
    ) {
      setNavbarColor("bg-info");
    } else if (
      document.documentElement.scrollTop < 300 ||
      document.body.scrollTop < 300
    ) {
      setNavbarColor("navbar-transparent");
    }
  };
  return (
    <>
      <Navbar className={"fixed-top " + navbarColor} expand="lg">
        <Container>
          <div className="navbar-translate">
            
            <NavbarBrand to="/index" tag={Link} id="tooltip6619950104">
              <span>ABCode•</span> Let's create your solution
            </NavbarBrand>
            
            <UncontrolledTooltip delay={0} target="tooltip6619950104">
                Coded by ABCode
            </UncontrolledTooltip>
            <button className="navbar-toggler" id="navigation">

              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <UncontrolledCollapse navbar toggler="#navigation">
            <div className="navbar-collapse-header">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  ABCode˚BLK• <span>Let's create your solution</span>
                  </a>
                </Col>
                <Col className="collapse-close text-right" xs="6">
                  <button className="navbar-toggler" id="navigation">
                    <i className="tim-icons icon-simple-remove" />
                  </button>
                </Col>
              </Row>
            </div>
            <Nav className="ml-auto" navbar>
                <NavItem active>
                    <NavLink to="#pablo">
                        Home <span className="sr-only">(current)</span>
                    </NavLink>
                </NavItem>
                <NavItem active>
                    <NavLink to="#pablo">
                        Services <span className="sr-only">(current)</span>
                    </NavLink>
                </NavItem>
                <NavItem active>
                    <NavLink to="#pablo">
                        About <span className="sr-only">(current)</span>
                    </NavLink>
                </NavItem>
              <NavItem>
                <Button
                  className="nav-link"
                  color="default"
                  href="#"
                  size="sm"
                  target="_blank"
                >
                  <p>Contact Us</p>
                </Button>
              </NavItem>
            </Nav>
          </UncontrolledCollapse>
        </Container>
      </Navbar>
    </>
  );
}
export default HomeNavbar;