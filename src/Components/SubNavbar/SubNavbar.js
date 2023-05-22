import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./SubNavbar.scss";

export const SubNavbar = () => {
  return (
    <Navbar className="SubNavbar">
      <Navbar.Toggle aria-controls="navbar" />
      <Navbar.Collapse id="navbar" className="SubNavbar__list">
        <Nav>
          <NavDropdown className="SubNavbar__dropdown" title="MEDICINE">
            <NavDropdown.Item href="">Item 1</NavDropdown.Item>
            <NavDropdown.Item href="">Item 2</NavDropdown.Item>
            <NavDropdown.Item href="">Item 3</NavDropdown.Item>
            <NavDropdown.Item href="">Item 4</NavDropdown.Item>
            <NavDropdown.Item href="">Item 5</NavDropdown.Item>
            <NavDropdown.Item href="">Item 6</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <NavDropdown className="SubNavbar__dropdown" title="MEDICAL DEVICES">
            <NavDropdown.Item href="">Item 1</NavDropdown.Item>
            <NavDropdown.Item href="">Item 2</NavDropdown.Item>
            <NavDropdown.Item href="">Item 3</NavDropdown.Item>
            <NavDropdown.Item href="">Item 4</NavDropdown.Item>
            <NavDropdown.Item href="">Item 5</NavDropdown.Item>
            <NavDropdown.Item href="">Item 6</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <NavDropdown
            className="SubNavbar__dropdown"
            title="PHARMACEUTICAL PRODUCTS"
          >
            <NavDropdown.Item href="">Item 1</NavDropdown.Item>
            <NavDropdown.Item href="">Item 2</NavDropdown.Item>
            <NavDropdown.Item href="">Item 3</NavDropdown.Item>
            <NavDropdown.Item href="">Item 4</NavDropdown.Item>
            <NavDropdown.Item href="">Item 5</NavDropdown.Item>
            <NavDropdown.Item href="">Item 6</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <NavDropdown className="SubNavbar__dropdown" title="WELLNESS">
            <NavDropdown.Item href="">Item 1</NavDropdown.Item>
            <NavDropdown.Item href="">Item 2</NavDropdown.Item>
            <NavDropdown.Item href="">Item 3</NavDropdown.Item>
            <NavDropdown.Item href="">Item 4</NavDropdown.Item>
            <NavDropdown.Item href="">Item 5</NavDropdown.Item>
            <NavDropdown.Item href="">Item 6</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <NavDropdown className="SubNavbar__dropdown" title="PERSONAL CARE">
            <NavDropdown.Item href="">Item 1</NavDropdown.Item>
            <NavDropdown.Item href="">Item 2</NavDropdown.Item>
            <NavDropdown.Item href="">Item 3</NavDropdown.Item>
            <NavDropdown.Item href="">Item 4</NavDropdown.Item>
            <NavDropdown.Item href="">Item 5</NavDropdown.Item>
            <NavDropdown.Item href="">Item 6</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default SubNavbar;
